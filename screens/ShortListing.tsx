import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ShortListingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ShortListing</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default ShortListingScreen;