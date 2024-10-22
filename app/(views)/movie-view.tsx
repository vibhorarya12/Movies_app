import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import MovieDetails from '@/components/MovieDetails';

const { width, height } = Dimensions.get('window');

const MovieView = () => {
  const { id } = useLocalSearchParams(); // Get the movie ID from the search parameters
  const [shortListed, setShortListed] = useState(false);

  // Fetch movie details using useQuery
  const { data: movieData, isLoading, isError } = useQuery({
    queryKey: ['fetchMovie', id],
    queryFn: () =>
      fetch(`http://www.omdbapi.com/?apikey=6c54a197&i=${id}`)
        .then((res) => res.json()),
    enabled: !!id, // Only run the query if the ID is present
  });

  const handleShortList = () => {
    setShortListed(!shortListed);
  };

  // if (isLoading) {
  //   return 
    
  //   <ActivityIndicator size="large" color="#FED766" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  // }

  // if (isError || !movieData || movieData.Response === 'False') {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text style={{ color: 'white' }}>Failed to load movie details.</Text>
  //     </View>
  //   );
  // }

  return (
    <ScrollView
      style={{ backgroundColor: 'black', flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10, alignItems: 'center' }}
    >
       {isLoading?<ActivityIndicator size="large" color="#FED766" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , marginTop:150}} />:<MovieDetails
        movieData={movieData}
        shortListed={shortListed}
        handleShortList={handleShortList}
        
      />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Add any necessary styles here
});

export default MovieView;
