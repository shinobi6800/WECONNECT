import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen/HomeScreenChats';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome5, Ionicons } from "@expo/vector-icons"; // Import icons
import GroupScreen from '../Screens/GroupsScreen/GroupScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import COLORS from "../Constants/Colors"
import SettingsSreen from '../Screens/SettingsScreen/SettingsSreen';
import HomeNaviagation from './HomeNaviagation';
export default function MainNavigation() {
    const Tabs= createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ 
    tabBarActiveTintColor:COLORS.MILDGREEN,
    tabBarStyle:{
        backgroundColor:COLORS.PRIMARYBG,
        borderTopWidth:0,
    },
    headerShown:false
    ,headerShadowVisible:false,
    headerShadowVisible:false
    }}>
      
    {/* Home Screen */}
    <Tabs.Screen 
      name="Home" 
      component={HomeNaviagation} 
      options={{
             headerShadowVisible:false,
             headerShown:false,
             backgroundColor:"red",
        title: "Explore",
        tabBarIcon: ({ color, size }) => ( // ✅ FIXED
          <FontAwesome5 name="rocketchat" size={24} color={color} />
        ),
        
      }}
    />

    {/* Profile Screen */}

        <Tabs.Screen 
      name="Groups" 
      component={GroupScreen} 
      options={{
        headerShadowVisible:false,
        headerShown:false,
        backgroundColor:"red",
        title: "Groups",
        tabBarIcon: ({ color, size }) => ( // ✅ FIXED
            <MaterialIcons name="groups" size={24} color={color} />

        ),
      }}
    />
        <Tabs.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => ( // 
         <FontAwesome5 name="user" size={24} color={color}/>
        ),
      }}
    />
            <Tabs.Screen 
      name="Settings" 
      component={SettingsSreen} 
      options={{
        title: "Settings",
        tabBarIcon: ({ color, size }) => ( // 
         <MaterialIcons name="settings" size={24} color={color}/>
        ),
      }}
    />
  </Tabs.Navigator>
  )
}