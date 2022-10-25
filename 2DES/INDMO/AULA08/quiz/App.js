import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/homeScreen';
import Quest1 from './src/screens/quest1Screen';
import Quest2 from './src/screens/quest2Screen';
import Quest3 from './src/screens/quest3Screen';
import Quest4 from './src/screens/quest4Screen';
import Quest5 from './src/screens/quest5Screen';
import Result from './src/screens/resultScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quest1" component={Quest1} />
        <Stack.Screen name="Quest2" component={Quest2} />
        <Stack.Screen name="Quest3" component={Quest3} />
        <Stack.Screen name="Quest4" component={Quest4} />
        <Stack.Screen name="Quest5" component={Quest5} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}