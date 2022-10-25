import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest4({ navigation }) {
  const [chhecked4, setChhecked4] = React.useState("primeiro");
  const store4 = async (checked4) => {
    try {
      await AsyncStorage.setItem('@token4', checked4);
    }catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Pergunta 4</Text>
      <Text>
        Qual melhor maneira de comer camarão?
      </Text>
      <RadioButton
        value="first"
        status={chhecked4 === "first" ? "chhecked4" : "unchhecked4"}
        onPress={() => setChhecked4("first")}
      />
      <Text>A milanesa</Text>
      <RadioButton
        value="second"
        status={chhecked4 === "second" ? "chhecked4" : "unchhecked4"}
        onPress={() => setChhecked4("second")}
      />
      <Text>Salteado na manteiga</Text>
      <RadioButton
        value="third"
        status={chhecked4 === "third" ? "chhecked4" : "unchhecked4"}
        onPress={() => setChhecked4("third")}
      />
      <Text>Na moranga</Text>
      <RadioButton
        value="forth"
        status={chhecked4 === "forth" ? "chhecked4" : "unchhecked4"}
        onPress={() => setChhecked4("forth")}
      />
      <Text>Com tudo e mais um pouco</Text>
    </View>
  );
}
