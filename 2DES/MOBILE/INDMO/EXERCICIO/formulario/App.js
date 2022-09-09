import {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  var funcionario = [
    {
      "nome":"Cyro",
      "cargo":"usuário"
    },
    {
      "nome":"Beatriz",
      "cargo":"Cliente"
    }
  ];

  return (
    <View style={style.container}>
      <View style={style.border}>
        <TextInput style={style.inp} placeholder="Nome do Func." value={nome} onChangeText={(val) => {setNome(val); }} />
        <TextInput style={style.inp} placeholder="Cargo" value={cargo} onChangeText={(val) => {setCargo(val); }} />

        <TouchableOpacity style={style.cadastrar}>
          <Text style={{color:'white', fontWeight: 'bold'}}>Cadastrar</Text> 
        </TouchableOpacity>
        {/* <ScrollView style={style.scrollview}> */}
          <View style={style.card}>
            <Text>{`${funcionario[0]}`}</Text>
            <Text>{`${funcionario[1]}`}</Text>
          </View>
        {/* </ScrollView> */}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#dee2ff',
    alignItems: 'center'
  },
  border: {
    border: '3px solid',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '60vw',
    height: '80vh',
    alignItems: 'center'
  },
  inp: {
    border: '3px solid',
    margin: '5px',
    width: '55vw',
    height: '4vh'
  },
  cadastrar: {
    backgroundColor: 'rgb(51, 153, 255)',
    width: '55vw',
    height: '5vh',
    alignItems: 'center',
    padding: '1vh'
  },
});