import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonFinish from "../components/buttonFinish/index";

export default function Quest5({ navigation }) {
  const [chhecked5, setChhecked5] = React.useState("primeiro");
  const store5 = async (checked5) => {
    try {
      await AsyncStorage.setItem('@token5', checked5);
    } catch (e) {
        console.log(e);
    }
  }


  return (
    <View style={styles.container}>
      <Text>Pergunta 5</Text>
      <Text>
        Em qual refeição familiar comemorativa se deve colocar passas no arroz?
      </Text>
      <RadioButton
        value="first"
        status={chhecked5 === "first" ? "chhecked5" : "unchhecked5"}
        onPress={() => setChhecked5("first")}
      />
      <Text>Natal</Text>
      <RadioButton
        value="second"
        status={chhecked5 === "second" ? "chhecked5" : "unchhecked5"}
        onPress={() => setChhecked5("second")}
      />
      <Text>Ano Novo</Text>
      <RadioButton
        value="third"
        status={chhecked5 === "third" ? "chhecked5" : "unchhecked5"}
        onPress={() => setChhecked5("third")}
      />
      <Text>Páscoa</Text>
      <RadioButton
        value="forth"
        status={chhecked5 === "forth" ? "chhecked5" : "unchhecked5"}
        onPress={() => setChhecked5("forth")}
      />
      <Text>Você é maluco é ?</Text>
    </View>
  );
}
