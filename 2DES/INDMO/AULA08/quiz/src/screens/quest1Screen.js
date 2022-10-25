import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest1({ navigation }) {
  const [checked1, setChecked1] = React.useState(" ");
  const storeQ1 = async (checked1) => {
    try {
      await AsyncStorage.setItem("@storage_Key", checked1);
    } catch (e) {
        console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta 1</Text>
      <Text>
        Qual a maneira correta de posicionar o arroz e o feijão no prato?
      </Text>
      <RadioButton
        value="first"
        status={checked1 === "first" ? "checked1" : "unchecked1"}
        onPress={() => setChecked1("first")}
      />
      <Text>Arroz por cima e feijão por baixo</Text>
      <RadioButton
        value="second"
        status={checked1 === "second" ? "checked1" : "unchecked1"}
        onPress={() => setChecked1("second")}
      />
      <Text>Feijão por cima e arroz por baixo</Text>
      <RadioButton
        value="third"
        status={checked1 === "third" ? "checked1" : "unchecked1"}
        onPress={() => setChecked1("third")}
      />
      <Text>Arroz de um lado e feijão do outro</Text>
      <RadioButton
        value="forth"
        status={checked1 === "forth" ? "checked1" : "unchecked1"}
        onPress={() => setChecked1("forth")}
      />
      <Text>Feijão e arroz misturados com farofa</Text>
      <ButtonPrevious />
      <ButtonNext />
    </View>
  );
}

// https://cdn-icons-png.flaticon.com/512/2879/2879564.png
// https://cdn-icons-png.flaticon.com/512/2879/2879564.png
// https://cdn-icons-png.flaticon.com/512/1505/1505473.png