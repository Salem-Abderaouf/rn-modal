import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './Screen/Splash'
import Menu from './Screen/Menu'
import AfterMenu from './Screen/AfterMenu'
import ListGuid from './Screen/ListGuid'
import GuidDetails from './Screen/GuidDetails'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="aftermenu" component={AfterMenu} options={{ headerShown: false }} />
        <Stack.Screen name="listguid" component={ListGuid} options={{ headerShown: false }} />
        <Stack.Screen name="guiddetails" component={GuidDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
