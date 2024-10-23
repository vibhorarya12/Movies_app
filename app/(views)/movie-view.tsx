import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import MovieDetails from '@/components/MovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '@/redux/action';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const MovieView = () => {
  const { id } = useLocalSearchParams(); // Get the movie ID from the search parameters
  const [shortListed, setShortListed] = useState(false);
  const dispatch = useDispatch();
  const {moviesList} = useSelector(state=>state.movies);

  

  console.log("movies list is", moviesList);
  interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }
  // Fetch movie details using useQuery
  const { data: movieData, isLoading, isError } = useQuery({
    queryKey: ['fetchMovie', id],
    queryFn: () =>
      axios.get(`http://www.omdbapi.com/?apikey=6c54a197&i=${id}`)
        .then((res) => res.data),
    enabled: !!id, // Only run the query if the ID is present
  });

  const isShortListed = movieData && moviesList.some(movie => movie.imdbID === movieData.imdbID);


  const handleShortList = (item:Movie) => {
    if(isShortListed){
     dispatch(removeFromList(item.imdbID)); 
    }
    else{
      dispatch(addToList(item));
    }
   
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
        handleShortList={handleShortList}
        isShortListed={isShortListed}
        
      />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Add any necessary styles here
});

export default MovieView;
