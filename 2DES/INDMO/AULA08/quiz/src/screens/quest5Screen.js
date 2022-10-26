import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonFinish from "../components/buttonFinish/index";

export default function Quest5({ navigation }) {
  const [checked, setChecked] = React.useState("primeiro");
  const store5 = async (checked) => {
    try {
      await AsyncStorage.setItem('@token5', checked);
    } catch (e) {
      console.log(e);
    }
  }

  const finalizar = (() => {
    navigation.navigate('Result')
  });
  const voltar = (() => {
    navigation.navigate('Quest4')
  });

  return (
    <View style={styles.container}>
      <Text>Pergunta 5</Text>
      <Text>
        Em qual refeição familiar comemorativa se deve colocar passas no arroz?
      </Text>
      <View>
        <View style={styles.alternativas}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Natal</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Ano Novo</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>Páscoa</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked === "forth" ? "checked" : "unchecked"}
            onPress={() => setChecked("forth")}
          />
          <Text>Você é maluco é ?</Text>
        </View>
      </View>
      <View style={styles.navegacao}>
        <ButtonPrevious onPress={voltar} />
        <ButtonFinish onPress={finalizar} />
      </View>
    </View >
  );
}
