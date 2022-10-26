import * as React from "react";
import { View, Text } from "react-native";
import { read } from "../utils/storage";

import styles from "../styles/style.js";

export default function Result({ navigation }) {
  const [pontuacao, setPontuacao] = React.useState(0);
  let temp = 0;
  let respostas = ["second", "first", "fifth", "forth", "forth"];
  const receber = async () => {
    for (let i = 1; i < 6; i++) {
      let stored = await read("q" + i);
      console.log(respostas[i-1], stored)
      if (respostas[i - 1] == stored) {
        temp += 2;
      }
    } 
    setPontuacao(temp)
  };
  if (pontuacao == 0 ) receber();



  return (
    <View style={styles.container}>
      <Text>{pontuacao}</Text>
    </View>
  );
}
