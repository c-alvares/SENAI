import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela1 from './src/screens/Tela1.js';
import Tela2 from './src/screens/Tela2.js';
import Tela3 from './src/screens/Tela3.js';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tela1" component={Tela1} />
      <Tab.Screen name="Tela2" component={Tela2} />
      <Tab.Screen name="Tela3" component={Tela3} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />        
      </Stack.Navigator> */}
      <MyTabs />
    </NavigationContainer>
  )
}