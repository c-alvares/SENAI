import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonNext from "../components/buttonNext/index";

export default function Quest1({ navigation }) {

  const [checked, setChecked] = React.useState(" ");

  const storeQ1 = async (chave,checked) => {
    try {
      await AsyncStorage.setItem(chave, checked);
    } catch (e) {
      console.log(e); 
    }
  };

  const avancar = (() => {
    navigation.navigate('Quest2')
  });

  return (
    <View style={styles.container}>
      <Text>Pergunta 1</Text>
      <Text>
        Qual a maneira correta de posicionar o arroz e o feijão no prato?
      </Text>
      <View>
        <View style={styles.alternativas}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Arroz por cima e feijão por baixo</Text>
        </View>
        <View style={styles.alternativas}> 
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Feijão por cima e arroz por baixo</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>Arroz de um lado e feijão do outro</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked === "forth" ? "checked" : "unchecked"}
            onPress={() => setChecked("forth")}
          />
          <Text>Feijão e arroz misturados com farofa</Text>
        </View>
      </View>
      <View style={styles.navegacao}>
        <ButtonNext onPress={avancar} />
      </View>
    </View>
  );
}