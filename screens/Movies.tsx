import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import TopSuperheroMovies from '@/components/TopSuperhero'
import TopRatedShows from '@/components/TopRatedShows'

const MoviesListingScreen = () => {
  return (
    <View style={styles.container}>
        {/* header */}
      <SafeAreaView style={{marginBottom:3, marginTop:40, width:'100%'}}>
        <StatusBar style={'light'}/>
        <View style={styles.header}>
            <Text style={{fontSize:27, color:'white', fontWeight:'bold'}}>
                <Text style={{color:'#E1CE7A'}}>M</Text>ovies
            </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
         {/* Trending superhero movies  */}
        <TopSuperheroMovies/>
          {/* Top rated tv shows */}
          <TopRatedShows/>
        </ScrollView>

      </SafeAreaView>
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
       
        borderColor:'white',
        width:'100%',
        height:'auto'
    }
})


export default MoviesListingScreen;