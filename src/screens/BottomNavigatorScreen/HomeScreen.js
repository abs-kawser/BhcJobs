import React from 'react';
import { View, ScrollView,Text } from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";


const HomeScreen = ({ navigation }) => {
  return (
    <>
      <AppHeader/>
      <ScrollView>
        <HomeHeroSection/> 
        <View>
          <Text>Other content goes here...</Text>
        </View>
        </ScrollView>
    </>
  );
};

export default HomeScreen;