import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../../Screens/HomeScreens';

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
            backgroundColor: 'red',
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
    </Stack.Navigator>
  );
}
