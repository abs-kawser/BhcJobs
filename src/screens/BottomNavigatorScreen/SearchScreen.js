import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../Auth/LoginScreen'

const SearchScreen = ({ navigation }) => {
  return (
      <View style={{flex:1}}>
      <LoginScreen navigation={navigation}/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

