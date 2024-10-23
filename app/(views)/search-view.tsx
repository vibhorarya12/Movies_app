import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, FlatList, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import axios from 'axios';
import { BASE_URL } from '@/constants/BaseUrl';

const { width, height } = Dimensions.get('window');

interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface SearchResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: string;
}

interface MovieCardProps {
  item: MovieItem;
}

const SearchView = () => {
  const [search, setSearch] = useState('');
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['searchMovies', search],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
       `${BASE_URL}?s=${encodeURIComponent(search)}&page=${pageParam}`
      );
      const data: SearchResponse = await response.data;
      return {
        movies: data.Search || [],
        totalResults: parseInt(data.totalResults || '0'),
        nextPage: data.Response === 'True' && data.Search?.length === 10 ? pageParam + 1 : undefined
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: search.length > 2,
  });

  const allMovies = data?.pages.flatMap(page => page.movies) || [];

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
      <SafeAreaView style={{ marginBottom: 3, marginTop: 7, width: '100%', flexDirection: 'row' }}>
        <StatusBar style={'light'} />
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
            Search <Text style={{ color: '#E1CE7A' }}>M</Text>ovies
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.inputTxtContainer}>
        <Ionicons color={'white'} name='search' size={24} />
        <TextInput
          keyboardType={'default'}
          placeholderTextColor={'#808080'}
          cursorColor={'green'}
          placeholder='search movies'
          style={{ width: '80%', color: 'white', marginLeft: 10 }}
          onChangeText={setSearch}
          value={search}
        />
      </View>

      {isLoading && !isFetchingNextPage ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator color={'white'} size={24} />
        </View>
      ) : isError ? (
        <View style={styles.centerContainer}>
          <Text style={styles.messageText}>Error loading movies</Text>
        </View>
      ) : allMovies.length === 0 && search.length > 2 ? (
        <View style={styles.centerContainer}>
          <Text style={styles.messageText}>No movies found</Text>
        </View>
      ) : (
        <FlatList
          data={allMovies}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => <MovieCard item={item} />}
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={() => 
            isFetchingNextPage ? (
              <View style={styles.footer}>
                <ActivityIndicator color={'white'} size={20} />
              </View>
            ) : null
          }
        />
      )}
    </View>
  );
};

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  return (
    <TouchableOpacity onPress={()=>router.push({pathname:'/(views)/movie-view', params : {id :item.imdbID} })} style={styles.cardContainer}>
      <Image 
        source={{ 
          uri: item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/150'
        }} 
        style={styles.posterImage} 
      />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.Title}</Text>
        <Text style={styles.movieYear}>{item.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    borderColor: 'white',
    width: '100%',
    height: 'auto',
  },
  inputTxtContainer: {
    width: width * 0.9,
    borderWidth: 1,
    height: height * 0.068,
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
    gap: 8,
    borderColor: 'white',
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    width: width * 0.9,
  },
  posterImage: {
    width: width * 0.3,
    height: height * 0.2,
    borderRadius: 8,
  },
  movieInfo: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 14,
    color: '#808080',
    marginTop: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default SearchView;