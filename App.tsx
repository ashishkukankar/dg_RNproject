/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
const Stack = createNativeStackNavigator()

const App = () => {
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='Homescreen' component={HomeScreen}
    options={{headerShown:false}}/>
  </Stack.Navigator>
</NavigationContainer>
  )
};


export default App;
