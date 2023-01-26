import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// quando utilizar o simulador, máquina virtual, deve-se substituir o localhost da uri pelo ip da máquina (cmd - ipconfig)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// Recomendação de utilizar post para o login, criando um endpoint no backend utilizando uma query(Select) com where para comparar os dados enviados via body

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
