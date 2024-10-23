import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

import { router } from 'expo-router'
const { width, height } = Dimensions.get('window');
interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


interface MovieCardProps {
  item: MovieItem;
}
const ShortListingScreen = () => {
  const {moviesList} = useSelector(state=>state.movies);


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginBottom: 3, marginTop: 7, width: '100%', flexDirection: 'row' }}>
       
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: '400' }}>
            Shortlisted <Text style={{ color: '#E1CE7A' }}>M</Text>ovies
          </Text>
        </View>
      </SafeAreaView>

      <FlatList
          data={moviesList}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => <MovieCard item={item} />}
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
          
        />

    </View>
  )
}




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
    container:{
        flex:1,
        
        alignItems:'center',
        backgroundColor:'black'
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
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#333',
      marginBottom: 10,
      borderRadius: 8,
      padding: 10,
      width: width * 0.9,
    },
})


export default ShortListingScreen;