import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
      <Button title='Show Map' onPress={()=>{navigation.navigate('map')}}></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})