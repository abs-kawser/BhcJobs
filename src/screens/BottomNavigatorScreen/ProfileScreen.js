import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from '../Auth/LoginScreen'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <LoginScreen navigation={navigation}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})