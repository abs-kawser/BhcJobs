import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FA6 from 'react-native-vector-icons/FontAwesome6';

// Screens import
import DashBoardScreen from '../../screens/BottomNavigatorScreen/DashBoardScreen';
import HomeScreen from '../../screens/BottomNavigatorScreen/HomeScreen';
import JobsScreen from '../../screens/BottomNavigatorScreen/JobsScreens';
import ProfileScreen from '../../screens/BottomNavigatorScreen/ProfileScreen';
import SearchScreen from '../../screens/BottomNavigatorScreen/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          height: 55,     
          paddingBottom: 2,
          paddingTop: 2,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600', 
          fontFamily:"system-ui", 
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        }, 

        tabBarIcon: ({ color }) => {

          if (route.name === 'Home') {
            return <FA6 name="clock-rotate-left" size={22} color={color} solid />;
          }

          if (route.name === 'Profile') {
            return <FA6 name="user" size={22} color={color} solid />;
          }

          if (route.name === 'Jobs') {
            return <FA6 name="briefcase" size={22} color={color} solid />;
          }

          let iconName;

          if (route.name === 'Dashboard') iconName = 'grid';
          else if (route.name === 'Search') iconName = 'search';

          return <Feather name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Dashboard" component={DashBoardScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator> 


  );
};

export default BottomNavigator ;