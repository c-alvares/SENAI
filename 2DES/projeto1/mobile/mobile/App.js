import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputs} placeholder="Nome" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="CPF" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="DDD + Telefone" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Tipo" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Logradouro" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Rua" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Bairro" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Número da Casa" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Cidade" placeholderTextColor="lightgray"></TextInput>
      <TextInput style={styles.inputs} placeholder="Estado" placeholderTextColor="lightgray"></TextInput>
      <StatusBar style="auto" />
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
  inputs: {
    border: '1px solid purple',
    borderRadius: '7.5px',
    margin: '3px',
  },
});
