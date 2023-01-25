import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ScreenNavigation from './Src/Components/Navigation/ScreenNavigation'
import NextScreen from './Src/Screens/NextScreen';
import Contact from './Src/Screens/Contact';

export {Contact};

const App = () => {
  return (
    // <View>

    // </View>
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
