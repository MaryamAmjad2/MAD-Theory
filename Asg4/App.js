import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing Screens
import Home from './Home'
import SignUp from './SignUp'
import LogIn from './Login'
import Profile from './Profile'



const Stack = createNativeStackNavigator();
const App=() =>{
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome Page'}}
        />
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Sign UP" component={SignUp} />
   <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App
