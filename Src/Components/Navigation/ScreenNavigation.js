import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../../Screens/HomeScreens';
import NextScreen from '../../Screens/NextScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
export default function ScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{
          headerTitle: () => (
            <View>
              <View style={{flex: 1}}>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                  ডেমো অ্যাপ
                </Text>
              </View>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#850101',
          },
          headerRight: () => (
            <View>
              <Icon
                name="search"
                style={{color: 'white', fontSize: 16, paddingRight: 15}}></Icon>
            </View>
          ),
        }}></Stack.Screen>
      <Stack.Screen
        name="HomeScreenBottom"
        component={HomeScreens}></Stack.Screen>
      <Stack.Screen
        name="NextScreen"
        component={NextScreen}
        options={{
          headerTitle: () => (
            <View>
              <View style={{flex: 1}}>
                <Text
                  style={{fontSize: 15, color: 'white'}}>
                  কন্টাক্টস লিস্ট
                </Text>
              </View>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#850101',
          },
          headerRight: () => (
            <View>
              <Icon
                name="search"
                style={{color: 'white', fontSize: 16, paddingRight: 15}}></Icon>
            </View>
          ),
        }}
      
      />
    </Stack.Navigator>
  );
}
