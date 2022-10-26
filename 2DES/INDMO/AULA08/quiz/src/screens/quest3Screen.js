import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { store } from "../utils/storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest3({ navigation }) {
  const [checked3, setchecked] = React.useState("primeiro");
  
  const avancar = (() => {
    store('q3', checked3)
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
            status={checked3 === "first" ? "checked" : "unchecked"}
            onPress={() => setchecked("first")}
          />
          <Text>Biscoito</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={checked3 === "second" ? "checked" : "unchecked"}
            onPress={() => setchecked("second")}
          />
          <Text>Bolacha</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked3 === "third" ? "checked" : "unchecked"}
            onPress={() => setchecked("third")}
          />
          <Text>Cookie</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked3 === "forth" ? "checked" : "unchecked"}
            onPress={() => setchecked("forth")}
          />
          <Text>Biscuit</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="fifth"
            status={checked3 === "fifth" ? "checked" : "unchecked"}
            onPress={() => setchecked("fifth")}
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
