import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest2({ navigation }) {
  const [checked, setChecked] = React.useState("primeiro");
  const storeQ2 = async (checked) => {
    try {
      await AsyncStorage.setItem("@token2", checked);
    } catch (e) {
      console.log(e);
    }
  }

  const avancar = (() => {
    navigation.navigate('Quest3')
  });
  const voltar = (() => {
    navigation.navigate('Quest1')
  });

  return (
    <View style={styles.container}>
      <Text>Pergunta 2</Text>
      <Text>
        Qual a maneira correta de comer a coxinha?
      </Text>
      <View>
        <View style={styles.alternativas}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Pela ponta</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Pela base</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>Pela lateral</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked === "forth" ? "checked" : "unchecked"}
            onPress={() => setChecked("forth")}
          />
          <Text>Enfiar tudo na boca</Text>
        </View>
      </View>
      <View style={styles.navegacao}>
        <ButtonPrevious onPress={voltar} />
        <ButtonNext onPress={avancar} />
      </View>
    </View>
  );
}