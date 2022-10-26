import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { store} from "../utils/storage";

import styles from "../styles/style.js";

import ButtonPrevious from "../components/buttonPrevious/index";
import ButtonNext from "../components/buttonNext/index";

export default function Quest4({ navigation }) {
  const [checked4, setChecked] = React.useState("primeiro");
  
  const avancar = (() => {
    store('q4', checked4)
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
            status={checked4 === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>A milanesa</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="second"
            status={checked4 === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Salteado na manteiga</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="third"
            status={checked4 === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>Na moranga</Text>
        </View>
        <View style={styles.alternativas}>
          <RadioButton
            value="forth"
            status={checked4 === "forth" ? "checked" : "unchecked"}
            onPress={() => setChecked("forth")}
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
