import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import TopSuperheroMovies from '@/components/TopSuperhero'
import TopRatedShows from '@/components/TopRatedShows'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const MoviesListingScreen = () => {
  return (
    <View style={styles.container}>
        {/* header */}
      <SafeAreaView style={{marginBottom:3, marginTop:40, width:'100%', flexDirection:'row'}}>
        <StatusBar style={'light'}/>
        <View style={styles.header}>
            <Text style={{fontSize:27, color:'white', fontWeight:'bold'}}>
                <Text style={{color:'#E1CE7A'}}>M</Text>ovies
            </Text>
            <TouchableOpacity onPress={()=>router.push('/(views)/search-view')} style={{backgroundColor:'black', right:0}}>
        <Ionicons size={30} name=  {'search'} color={"#FED766"} />
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
         {/* Trending superhero movies  */}
        <TopSuperheroMovies/>
          {/* Top rated tv shows */}
          <TopRatedShows/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        alignItems:'center',
        backgroundColor:'black'
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      gap:20,
        borderColor:'white',
        width:'100%',
        height:'auto'
    }
})


export default MoviesListingScreen;