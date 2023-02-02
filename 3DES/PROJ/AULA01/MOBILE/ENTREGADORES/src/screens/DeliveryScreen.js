import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import styles from "../styles/style";

export default function DeliveryScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}