import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Bottom Tab Navigator import
import BottomTabNavigator from '../BottomNavigator/bottomNavigator';

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

        </Stack.Navigator>
 
    );};

export default StackNavigator ;  

