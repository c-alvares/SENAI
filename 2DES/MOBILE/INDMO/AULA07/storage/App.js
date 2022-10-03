import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ info, setInfo ] = useState("");
  const [ lida, setLida ] = useState(""); 
  const [ nome, setNome ] = useState("");
  const [ cargo, setCargo ] = useState("");
  const [ salario, setSalario ] = useState("");

  const salvar = async () => {
    try {
      let dataJson = { nome, cargo, salario };

      await AsyncStorage.setItem("data", info);
      await AsyncStorage.setItem("form", JSON.stringify(dataJson))

      setInfo("");
      setNome("");
      setCargo("");
      setSalario("");

    }catch (err) {
      console.log(err);
    }
  }

  const ler = async () => {
    try {
      let data = await AsyncStorage.getItem("data");
      let dataJson = await AsyncStorage.getItem("form")
      let ds = dataJson != null ? JSON.parse(dataJson) : "Não Encontrado";
      setLida(data);

      console.log(ds);

    }catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={info} onChangeText={(val) => { setInfo(val) }}/>
      <TextInput style={styles.input} value={nome} onChangeText={(nome) => { setNome(nome) }}/>
      <TextInput style={styles.input} value={cargo} onChangeText={(cargo) => { setCargo(cargo) }}/>
      <TextInput style={styles.input} value={salario} onChangeText={(salario) => { setSalario(salario) }}/>
      <Button title="Salvar" onPress={() => { salvar() }} />
      <Button title="Ler" onPress={() => { ler() }} />
      <Text>{lida}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    border: '1px solid',
    margin: '2px',
  },
});
