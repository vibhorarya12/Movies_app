import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const MovieDetails = ({ movieData,  handleShortList, isShortListed }) => {
  const item = {
    Title: movieData.Title,
    Year: movieData.Year,
    imdbID: movieData.imdbID,
    Type: movieData.Type,
    Poster: movieData.Poster,
    
  };


  return (
    <View>
      {/* Header with Back and Favorite buttons */}
      <SafeAreaView
        style={{
          marginTop: 40,
          backgroundColor: 'transparent',
          zIndex: 5,
          alignSelf: 'center',
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.95,
        }}
      >
        <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 40 }} onPress={()=>router.back()}>
          <Ionicons size={35} name="arrow-back-circle" color="#FED766" />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 40 }} onPress={()=>handleShortList(item)}>
          <Ionicons size={35} name={isShortListed ? 'heart' : 'heart-outline'} color="#FED766" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Movie Poster */}
      <Image source={{ uri: movieData.Poster }} style={{ width: width, height: height * 0.6, borderRadius: 10 }} />

      {/* General Details */}
      <View style={{ width: '100%', borderColor: 'white', gap: 5, alignSelf:'center' }}>
        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{movieData.Title}</Text>
        <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>
          Released {movieData.Released} | {movieData.Rated} | {movieData.Runtime}
        </Text>
      </View>

      {/* Ratings */}
      <View style={{ width: '100%', marginTop: 5, borderColor: 'white', gap: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>⭐ {movieData.imdbRating}</Text>
          <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>IMDb</Text>
        </View>
        {movieData.Ratings && movieData.Ratings.length > 1 && (
          <View>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>🍅 {movieData.Ratings[1].Value}</Text>
            <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Rotten Tomatoes</Text>
          </View>
        )}
      </View>

      {/* Overview Header */}
      <View style={{ width: width * 0.3, borderColor: 'white', alignSelf: 'flex-start', marginTop: 15, padding: 5, borderRadius: 10, backgroundColor: '#FED766', marginLeft: 5 }}>
        <Text style={{ color: 'black', fontSize: 18, textAlign: 'center' }}>Overview</Text>
      </View>

      {/* Plot */}
      <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'left' }}>{movieData.Plot}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
