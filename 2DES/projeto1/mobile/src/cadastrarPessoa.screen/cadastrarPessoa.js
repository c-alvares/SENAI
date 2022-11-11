import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from './style';

export default function CadastrarPessoa({navigation}) {

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

  const cadastrar = () => {
    let dados = {
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
    // Alterar o localhost
    fetch('localhost', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error(error);
    });
    limparInput();
  }
  
  const limparInput = () => {
    setNome('')
    setNome('')
    setCpf('')
    setTelefone('')
    setTipo('')
    setLogradouro('')
    setRua('')
    setBairro('')
    setNumero('')
    setCidade('')
    setEstado('')
 }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.titulo}>Cadastro de Pessoas</Text>
        <View style={styles.container2}>
          <TextInput value={nome} onChangeText={(text) => setNome(text)} style={styles.inputs} placeholder="Nome" placeholderTextColor="lightgray" />
          <TextInput value={cpf} onChangeText={(text) => setCpf(text)} style={styles.inputs} placeholder="CPF" placeholderTextColor="lightgray" />
          <TextInput value={telefone} onChangeText={(text) => setTelefone(text)} style={styles.inputs} placeholder="DDD + Telefone" placeholderTextColor="lightgray" />
          <TextInput value={tipo} onChangeText={(text) => setTipo(text)} style={styles.inputs} placeholder="Tipo" placeholderTextColor="lightgray" />
          <TextInput value={logradouro} onChangeText={(text) => setLogradouro(text)} style={styles.inputs} placeholder="Logradouro" placeholderTextColor="lightgray" />
          <TextInput value={rua} onChangeText={(text) => setRua(text)} style={styles.inputs} placeholder="Rua" placeholderTextColor="lightgray" />
          <TextInput value={bairro} onChangeText={(text) => setBairro(text)} style={styles.inputs} placeholder="Bairro" placeholderTextColor="lightgray" />
          <TextInput value={numero} onChangeText={(text) => setNumero(text)} style={styles.inputs} placeholder="Número da Casa" placeholderTextColor="lightgray" />
          <TextInput value={cidade} onChangeText={(text) => setCidade(text)} style={styles.inputs} placeholder="Cidade" placeholderTextColor="lightgray" />
          <TextInput value={estado} onChangeText={(text) => setEstado(text)} style={styles.inputs} placeholder="Estado" placeholderTextColor="lightgray" />
          <TouchableOpacity onPress={() => { cadastrar() }} style={styles.button}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}