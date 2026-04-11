import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../Auth/LoginScreen'

const DashBoardScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <LoginScreen  navigation={navigation} />
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({})