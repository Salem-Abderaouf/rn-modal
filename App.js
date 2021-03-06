import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from './Screen/Splash'
import Menu from './Screen/Menu'
import AfterMenu from './Screen/AfterMenu'
import ListGuid from './Screen/ListGuid'
import GuidDetails from './Screen/GuidDetails'
import One from './Guid/One';
import Two from './Guid/Two';
import Three from './Guid/Three';
import Four from './Guid/Four';

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
        <Stack.Screen name="one" component={One} options={{ headerShown: false }} />
        <Stack.Screen name="two" component={Two} options={{ headerShown: false }} />
        <Stack.Screen name="three" component={Three} options={{ headerShown: false }} />
        <Stack.Screen name="four" component={Four} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
