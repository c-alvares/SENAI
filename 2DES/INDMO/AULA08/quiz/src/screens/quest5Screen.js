import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { store } from "../utils/storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonFinish from "../components/buttonFinish/index";

export default function Quest5({ navigation }) {
  const [checked5, setChecked] = React.useState("primeiro");
  

  const finalizar = (() => {
    store('q5', checked5)
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
            status={checked5 === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Natal</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={checked5 === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Ano Novo</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked5 === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>Páscoa</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked5 === "forth" ? "checked" : "unchecked"}
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
