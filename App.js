import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ScreenNavigation from './Src/Components/Navigation/ScreenNavigation'


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