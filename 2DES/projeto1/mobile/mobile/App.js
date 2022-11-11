import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
// https://www.alura.com.br/artigos/react-native-fazendo-requisicoes-fetch?gclid=Cj0KCQiAgribBhDkARIsAASA5bsduZAJs5u31SweE7QSf0VLrgAFRUAh_sR6XRQ0KLWA6MyKZQqo5WoaAoyYEALw_wcB
// https://reactnative.dev/docs/network
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
  const [ lista, setLista ] = ([
    {
      "nome":"Otto",
      "cpf":"123456789-12",
      "telefone":"19-98541-2213",
      "tipo":"celular",
      "logradouro":"Avenida",
      "rua":"das Bandeiras",
      "bairro":"Elísios",
      "numero":"774",
      "cidade":"Mairiporã",
      "estado":"SP"
    }
  ]);

  const cadastrar = () => {
    let nFunc = {
      "nome":nome,
      "cpf":cpf,
      "telefone":telefone,
      "tipo":tipo,
      "logradouro":logradouro,
      "rua":rua,
      "bairro":bairro,
      "numero":numero,
      "cidade":cidade,
      "estado":estado
    }
    setLista([...lista, nFunc]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.titulo}>Cadastro de Pessoas</Text>
        <View style={styles.container2}>
          <TextInput onChangeText={(text) => setNome(text)} style={styles.inputs} placeholder="Nome" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setCpf(text)} style={styles.inputs} placeholder="CPF" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setTelefone(text)} style={styles.inputs} placeholder="DDD + Telefone" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setTipo(text)} style={styles.inputs} placeholder="Tipo" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setLogradouro(text)} style={styles.inputs} placeholder="Logradouro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setRua(text)} style={styles.inputs} placeholder="Rua" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setBairro(text)} style={styles.inputs} placeholder="Bairro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setNumero(text)} style={styles.inputs} placeholder="Número da Casa" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setCidade(text)} style={styles.inputs} placeholder="Cidade" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText={(text) => setEstado(text)} style={styles.inputs} placeholder="Estado" placeholderTextColor="lightgray"></TextInput>
          <TouchableOpacity onPress={() => { cadastrar() }} style={styles.button}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}