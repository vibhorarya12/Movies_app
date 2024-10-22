
import { View, Text, StyleSheet, ScrollView, SafeAreaView , TouchableOpacity , Image, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
const { width, height } = Dimensions.get('window');
import Ionicons from '@expo/vector-icons/Ionicons';
const data = {
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "Rated": "PG-13",
  "Released": "26 Apr 2019",
  "Runtime": "181 min",
  "Genre": "Action, Adventure, Drama",
  "Director": "Anthony Russo, Joe Russo",
  "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
  "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
  "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  "Language": "English, Japanese, Xhosa, German",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 70 wins & 133 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
      },
      {
          "Source": "Metacritic",
          "Value": "78/100"
      }
  ],
  "Metascore": "78",
  "imdbRating": "8.4",
  "imdbVotes": "1,304,298",
  "imdbID": "tt4154796",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "$858,373,000",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}


const MovieView = () => {
  const {id} = useLocalSearchParams();
  const [shortListed, setShortListed] = useState(false);
  const handleShortList = ()=>{
     setShortListed(!shortListed);
  }

  return (
    <ScrollView style={{backgroundColor:'black', flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10, alignItems:'center'}}>
       <SafeAreaView style={{ marginTop:40 ,  backgroundColor:'transparent', zIndex:5 , alignSelf:'center', position:'absolute', flexDirection:'row', justifyContent:'space-between', width:width*0.95}}>
        <TouchableOpacity style={{backgroundColor:'black', borderRadius:40}} onPress={()=> router.back()}>
        <Ionicons size={35} name='arrow-back-circle' color={"#FED766"} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'black', borderRadius:40}} onPress={handleShortList}>
        <Ionicons size={35} name=  {shortListed?'heart':'heart-outline'} color={"#FED766"} />
        </TouchableOpacity>
       </SafeAreaView>

       <Image source={{uri:data.Poster}} style={{width:width, height:height*0.6, borderRadius:10}} />
       {/* General details */}
       <View style={{width:'100%' , borderColor:'white', gap:5}}>
        <Text style={{color:'white', fontSize:20, textAlign:'center'}} >{data.Title}</Text>
        <Text style={{color:'white', fontSize:15, textAlign:'center'}} >Released {data.Released} | {data.Rated} | {data.Runtime}</Text>
       </View>
       {/* ratings */}
      <View style={{width:'100%' , marginTop:5, borderColor:'white', gap:10, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View>
        <Text style={{color:'white', fontSize:18, textAlign:'center'}}>
            ⭐ {data.Ratings[0].Value}
          </Text>
          <Text style={{color:'white', fontSize:15, textAlign:'center'}}>
            ImDB
          </Text>
        </View>
        <View>
        <Text style={{color:'white', fontSize:18, textAlign:'center'}}>
            🍅 {data.Ratings[0].Value}
          </Text>
          <Text style={{color:'white', fontSize:15, textAlign:'center'}}>
          Rotten Tomatoes
          </Text>
        </View>
      </View>
      {/* overview header */}
      <View style={{width:width*0.3,  borderColor:'white', alignSelf:'flex-start', marginTop:15, padding:5, borderRadius:10, backgroundColor:"#FED766", marginLeft:5}}>
      <Text style={{color:'black', fontSize:18, textAlign:'center'}}>
        Overview
          </Text>
      </View>
      <View style={{marginTop:5}}>
        <Text style={{color:'white', fontSize:16, textAlign:'left'}}>
          {data.Plot}
        </Text>
      </View>
     
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  backButton:{

  }
})

export default MovieView;