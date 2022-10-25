import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest2({ navigation }) {
  const [checked2, setChecked2] = React.useState("primeiro");
  const storeQ2 = async (checked2) => {
    try {
      await AsyncStorage.setItem("@token2", checked2);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Pergunta 2</Text>
      <Text>
        Qual a maneira correta de comer a coxinha?
      </Text>
      <RadioButton
        value="first"
        status={checked2 === "first" ? "checked2" : "unchecked2"}
        onPress={() => setChecked2("first")}
      />
      <Text>Pela ponta</Text>
      <RadioButton
        value="second"
        status={checked2 === "second" ? "checked2" : "unchecked2"}
        onPress={() => setChecked2("second")}
      />
      <Text>Pela base</Text>
      <RadioButton
        value="third"
        status={checked2 === "third" ? "checked2" : "unchecked2"}
        onPress={() => setChecked2("third")}
      />
      <Text>Pela lateral</Text>
      <RadioButton
        value="forth"
        status={checked2 === "forth" ? "checked2" : "unchecked2"}
        onPress={() => setChecked2("forth")}
      />
      <Text>Enfiar tudo na boca</Text>
    </View>
  );
}