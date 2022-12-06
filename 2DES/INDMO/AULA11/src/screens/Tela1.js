import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import styles from '../styles/style';

import Tela2 from './Tela2.js';
import Tela3 from './Tela3';

const Stack = createNativeStackNavigator();

export default function Tela1({navigation}) {

    return(
    // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Tela2" component={Tela2} />
            <Stack.Screen name="Tela3" component={Tela3} />        
        </Stack.Navigator>
    // </NavigationContainer>
    )
}