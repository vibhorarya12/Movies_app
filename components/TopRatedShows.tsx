import { View, Text, Image, Dimensions, StyleSheet , TouchableWithoutFeedback, FlatList} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const data = [
  
    {
        "Title": "Game of Thrones",
        "Year": "2011–2019",
        "imdbID": "tt0944947",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGY3NTg1ODMtOGIzZS00YWFiLTgzYzktNzBiYWZkYjcwNGRhXkEyXkFqcGc@._V1_SX300.jpg"
    },

    {"Title":"Breaking Bad","Year":"2008–2013","imdbID":"tt0903747","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg"},
    {
      "Title": "Money Heist",
      "Year": "2017–2021",
      "imdbID": "tt6468322",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_SX300.jpg"
  },


 
  {
    "Title": "House of the Dragon",
    "Year": "2022–",
    "imdbID": "tt11198330",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_SX300.jpg"
},
{
  "Title": "Prison Break",
  "Year": "2005–2017",
  "imdbID": "tt0455275",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTljM2Y5OTUtMzg3Yy00ZjI3LTg4YzUtMmVkMGY2NTgyMmQ3XkEyXkFqcGc@._V1_SX300.jpg"
},
{
  "Title": "Brooklyn Nine-Nine",
  "Year": "2013–2021",
  "imdbID": "tt2467372",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_SX300.jpg"
},
{
  "Title": "The Crown",
  "Year": "2016–2023",
  "imdbID": "tt4786824",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODcyODZlZDMtZGE0Ni00NjBhLWJlYTAtZDdlNWY3MzkwMGVhXkEyXkFqcGc@._V1_SX300.jpg"
}
];

const TopRatedShows = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top rated tv shows</Text>
      {/* <Carousel
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
            /> */}
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                  <MovieCard item={item}/> 
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false} // Optional: hide the scroll indicator
                contentContainerStyle={styles.contentContainer} // Optional styling
            />
    </View>
  );
};

const MovieCard = ({ item }) => {
  // Fallback if item or item.Poster is undefined
  const posterUri = item?.Poster ?? 'https://via.placeholder.com/300';
  return (
    <TouchableWithoutFeedback  onPress={() => router.push({ pathname: '/(views)/movie-view', params: { id: item.imdbID } })}>
      <View style={{ borderColor:'white' , justifyContent:'center', alignItems:'center'}}> 
        <Image resizeMode={'contain'} source={{ uri: posterUri }} style={styles.image} />
        {/* <Text style={styles.title}>{item.Title.length > 8 ? item.Title.slice(0, 8) : item.Title} {item.Year}</Text> */}
      </View>
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
    marginLeft:5,
    letterSpacing:1.5
   
  },
  image: {
    width: width * 0.38,
    height: height * 0.3,
    borderRadius: 20,
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop:10,
    gap:5
},
});

export default TopRatedShows;
