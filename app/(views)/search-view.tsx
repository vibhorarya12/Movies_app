import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

const SearchView = () => {
  return (
   <View style={{flex:1, backgroundColor:'black', alignItems:'center'}}>
    <SafeAreaView style={{marginBottom:3, marginTop:7, width:'100%', flexDirection:'row'}}>
        <StatusBar style={'light'}/>
        <View style={styles.header}>
            <Text style={{fontSize:25, color:'white', fontWeight:'bold'}}>
             Search <Text style={{color:'#E1CE7A'}}>M</Text>ovies
            </Text>
           
        </View>
        
        
      </SafeAreaView>
      <View style={styles.inputTxtContainer}>
                <Ionicons color={'white'} name='search' size={24} />
                <TextInput keyboardType={'number-pad'} placeholderTextColor={'#808080'} cursorColor={'green'} placeholder='search movies'  style={{ width: 104, borderColor: 'red', height: 21 }} />
            </View>
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
  },
  inputTxtContainer: {
   width:width*0.9,
    borderWidth: 1,
    height:height*0.068,
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
    gap: 8,
    borderColor: 'white',
    marginTop:5
    
}
})


export default SearchView;