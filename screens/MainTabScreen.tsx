import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import SettingsScreen from './SettingsScreen'

type RootStackParamList = {
  Home: undefined,
  Details: undefined,
  Settings: undefined
}
  
type MainProps = NativeStackScreenProps<RootStackParamList>;
type TabBarIconProps = {
  focused: boolean; color: string;
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const DetailsStack = createNativeStackNavigator<RootStackParamList>();
const SettingsStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="Main"
        activeColor="#fff"
        // barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: "#009387",
            tabBarIcon: ({ color }: TabBarIconProps) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Details',
            tabBarColor: "#d02860",
            tabBarIcon: ({ color } : TabBarIconProps) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: "#d02860",
            tabBarIcon: ({ color } : TabBarIconProps) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />


      </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({navigation} : MainProps) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    )
}
  
const DetailsStackScreen = ({navigation}: MainProps) => {
    return (
      <DetailsStack.Navigator >
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerShown: false,
          }}
        />
      </DetailsStack.Navigator>
    )
}
  
const SettingsStackScreen = ({navigation}: MainProps) => {
  return (
    <SettingsStack.Navigator >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  )
}

