import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest4({ navigation }) {
  const [chhecked, setChhecked] = React.useState("primeiro");
  const store4 = async (checked) => {
    try {
      await AsyncStorage.setItem('@token4', checked);
    }catch (e) {
      console.log(e);
    }
  }

  const avancar = (() => {
    navigation.navigate('Quest5')
  });
  const voltar = (() => {
    navigation.navigate('Quest3')
  });

  return (
    <View style={styles.container}>
      <Text>Pergunta 4</Text>
      <Text>
        Qual melhor maneira de comer camarão?
      </Text>
      <View>
        <View style={styles.alternativas}>
          <RadioButton
            value="first"
            status={chhecked === "first" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("first")}
          />
          <Text>A milanesa</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={chhecked === "second" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("second")}
          />
          <Text>Salteado na manteiga</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={chhecked === "third" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("third")}
          />
          <Text>Na moranga</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={chhecked === "forth" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("forth")}
          />
          <Text>Com tudo e mais um pouco</Text>
        </View>
      </View>
      <View style={styles.navegacao}>
        <ButtonPrevious onPress={voltar} />
        <ButtonNext onPress={avancar} />
      </View>
    </View>
  );
}
