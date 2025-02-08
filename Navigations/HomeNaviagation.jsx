import { View, Text } from 'react-native'
import React from 'react'
import { Header, createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreenChats';
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import SignUpScreen from "../Screens/AuthScreen/SignUpScreen"
import LoginScreen from "../Screens/AuthScreen/LoginScreen"
export default function HomeNaviagation() {
    const Stack=createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='SignUp' screenOptions={{
      headerShown:false,
      headershowTitle:false,
      }}>
      <Stack.Screen name='HomeChats' component={HomeScreen} options={{headerShadowVisible:false,
      headerShown:false,
      headershowTitle:false,
      headershowTitle:false,
    }
      } >
      </Stack.Screen>
      <Stack.Screen name='Chats' component={ChatScreen}>
      </Stack.Screen>
      <Stack.Screen name='SignUp' component={SignUpScreen}>
      </Stack.Screen>
      <Stack.Screen name='LoginScreen' component={LoginScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}