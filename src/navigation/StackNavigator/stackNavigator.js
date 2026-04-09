import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Bottom Tab Navigator import
import BottomTabNavigator from '../BottomNavigator/bottomNavigator';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
    // <NavigationContainer> </NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* First Screen */}
            <Stack.Screen
                name="Main"
                component={BottomTabNavigator}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />

        </Stack.Navigator>
 
    );};

export default StackNavigator ;  

