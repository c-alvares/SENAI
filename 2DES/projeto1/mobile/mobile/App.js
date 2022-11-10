import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './style';

export default function App() {

  const [  nome, setNome ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")
  const [  ,  ] = useState("")


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.titulo}>Cadastro de Pessoas</Text>
        <View style={styles.container2}>
          <TextInput onChangeText=(text => this.setNome({ nome: text })) style={styles.inputs} placeholder="Nome" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setCpf({ cpf: text })) style={styles.inputs} placeholder="CPF" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setTelefone({ telefone: text })) style={styles.inputs} placeholder="DDD + Telefone" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setTipo({ tipo: text })) style={styles.inputs} placeholder="Tipo" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setLogradouro({ logradouro: text })) style={styles.inputs} placeholder="Logradouro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setRua({ rua: text })) style={styles.inputs} placeholder="Rua" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setBairro({ bairro: text })) style={styles.inputs} placeholder="Bairro" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setNumero({ numero: text })) style={styles.inputs} placeholder="Número da Casa" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setCidade({ cidade: text })) style={styles.inputs} placeholder="Cidade" placeholderTextColor="lightgray"></TextInput>
          <TextInput onChangeText=(text => this.setEstado({ estado: text })) style={styles.inputs} placeholder="Estado" placeholderTextColor="lightgray"></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}