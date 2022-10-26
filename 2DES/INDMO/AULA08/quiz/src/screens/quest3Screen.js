import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest3({ navigation }) {
  const [chhecked, setChhecked] = React.useState("primeiro");
  const store3 = async (checked) => {
    try {
      await AsyncStorage.setItem("@token3", checked);
    } catch (e) {
        console.log(e);
    }
  }

  const avancar = (() => {
    navigation.navigate('Quest4')
  });
  const voltar = (() => {
    navigation.navigate('Quest2')
  });

  return (
    <View style={styles.container}>
      <Text>Pergunta </Text>
      <Text>
        Como se deve chamar a massa doce assada duas vezes?
      </Text>
      <View>
        <View style={styles.alternativas}>
          <RadioButton
            value="first"
            status={chhecked === "first" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("first")}
          />
          <Text>Biscoito</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={chhecked === "second" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("second")}
          />
          <Text>Bolacha</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={chhecked === "third" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("third")}
          />
          <Text>Cookie</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={chhecked === "forth" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("forth")}
          />
          <Text>Biscuit</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="fifth"
            status={chhecked === "fifth" ? "chhecked" : "unchhecked"}
            onPress={() => setChhecked("fifth")}
          />
          <Text>Robson Teixeira</Text>
        </View>
      </View>
      <View style={styles.navegacao}>
        <ButtonPrevious onPress={voltar} />
        <ButtonNext onPress={avancar} />
      </View>
    </View>
  );
}
