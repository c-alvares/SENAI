import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from './style';

export default function App() {

  const [ nome, setNome ] = useState("")
  const [ cpf , setCpf ] = useState("")
  const [ telefone , setTelefone ] = useState("")
  const [ tipo , setTipo ] = useState("")
  const [ logradouro , setLogradouro ] = useState("")
  const [ rua , setRua ] = useState("")
  const [ bairro , setBairro ] = useState("")
  const [ numero , setNumero ] = useState("")
  const [ cidade , setCidade ] = useState("")
  const [ estado , setEstado ] = useState("")


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.titulo}>Cadastro de Pessoas</Text>
        <View style={styles.container2}>
          <TextInput onChangeText={(text) => setNome({ nome: text })} style={styles.inputs} placeholder="Nome" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setCpf({ cpf: text })} style={styles.inputs} placeholder="CPF" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setTelefone({ telefone: text })} style={styles.inputs} placeholder="DDD + Telefone" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setTipo({ tipo: text })} style={styles.inputs} placeholder="Tipo" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setLogradouro({ logradouro: text })} style={styles.inputs} placeholder="Logradouro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setRua({ rua: text })} style={styles.inputs} placeholder="Rua" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setBairro({ bairro: text })} style={styles.inputs} placeholder="Bairro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setNumero({ numero: text })} style={styles.inputs} placeholder="Número da Casa" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setCidade({ cidade: text })} style={styles.inputs} placeholder="Cidade" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setEstado({ estado: text })} style={styles.inputs} placeholder="Estado" placeholderTextColor="lightgray"></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}