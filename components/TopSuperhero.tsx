import { View, Text, Image, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const data = [
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Captain America: The Winter Soldier',
    Year: '2014',
    imdbID: 'tt1843866',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_SX300.jpg',
  },
  {
    Title: 'Spider-Man: Homecoming',
    Year: '2017',
    imdbID: 'tt2250912',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg',
  },
  {
    Title: 'The Dark Knight Rises',
    Year: '2012',
    imdbID: 'tt1345836',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
  },
  {
    Title: 'Captain Marvel',
    Year: '2019',
    imdbID: 'tt4154664',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg',
  },
];

const TopSuperheroMovies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending superhero movies</Text>
      <Carousel
            style={{borderColor:'white'}}
                mode={'parallax'}
                pagingEnabled={true}
                loop
                width={width*0.95}
                height={height*0.6}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                data={data}
                
                renderItem={({item})=><MovieCard item={item}/>}
            />
    </View>
  );
};

const MovieCard = ({ item }) => {
  // Fallback if item or item.Poster is undefined
  const posterUri = item?.Poster ?? 'https://via.placeholder.com/300';
  return (
    <TouchableWithoutFeedback onPress={()=>router.push({ pathname: '/(views)/movie-view', params: { id: item.imdbID } })}>
      <Image resizeMode={'cover'} source={{ uri: posterUri }} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    marginTop:10
    // alignItems:'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft:5
   
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 15,
  },
});

export default TopSuperheroMovies;
