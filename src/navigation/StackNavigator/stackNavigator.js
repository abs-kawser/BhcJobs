import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Bottom Tab Navigator import
import BottomTabNavigator from '../BottomNavigator/bottomNavigator';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import VerifyScreen from '../../screens/Auth/VerifyScreen'
import { SafeAreaView } from 'react-native-safe-area-context';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        // <NavigationContainer> </NavigationContainer>

        <SafeAreaView style={{ flex: 1 }}>
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

                <Stack.Screen
                 name="Verify"
                 component={VerifyScreen}
                 
                />

            </Stack.Navigator>
        </SafeAreaView>

    );
};

export default StackNavigator;

