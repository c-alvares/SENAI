import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest3({ navigation }) {
  const [chhecked3, setChhecked3] = React.useState("primeiro");
  const store3 = async (checked3) => {
    try {
      await AsyncStorage.setItem("@token3", checked3);
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Pergunta 3</Text>
      <Text>
        Como se deve chamar a massa doce assada duas vezes?
      </Text>
      <RadioButton
        value="first"
        status={chhecked3 === "first" ? "chhecked3" : "unchhecked3"}
        onPress={() => setChhecked3("first")}
      />
      <Text>Biscoito</Text>
      <RadioButton
        value="second"
        status={chhecked3 === "second" ? "chhecked3" : "unchhecked3"}
        onPress={() => setChhecked3("second")}
      />
      <Text>Bolacha</Text>
      <RadioButton
        value="third"
        status={chhecked3 === "third" ? "chhecked3" : "unchhecked3"}
        onPress={() => setChhecked3("third")}
      />
      <Text>Cookie</Text>
      <RadioButton
        value="forth"
        status={chhecked3 === "forth" ? "chhecked3" : "unchhecked3"}
        onPress={() => setChhecked3("forth")}
      />
      <Text>Biscuit</Text>
      <RadioButton
        value="fifth"
        status={chhecked3 === "fifth" ? "chhecked3" : "unchhecked3"}
        onPress={() => setChhecked3("fifth")}
      />
      <Text>Robson Teixeira</Text>
    </View>
  );
}
