import {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default function App() {
  // const [value, setValue] = useState("");
  // const [value2, setValue2] = useState("");

  const [opera, setOpera] = useState("");
  const [res, setRes] = useState("");

  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  return (
    <View>
      {/* Exercício 01 */}
      {/* <View>
        <Text>Digite um número: </Text>
          <TextInput value={value} onChangeText={(val) => { setValue(val); }} />
          <Text>Digite outro número: </Text>
          <TextInput value={value2} onChangeText={(val) => { setValue2(val); }} /> 
          <TouchableOpacity onPress={() => {
            setSoma(Number(value) + Number(value2)) ;
            console.log(soma)
            }}>
            <Text>Executar</Text>
          </TouchableOpacity>
          <Text>A soma de {value} com {value2} resulta em {soma}</Text>
          <Text>{soma}</Text>
      </View> */}
      
      {/* Exercício 02 */}
      <View>
        <TextInput placeholder="Primeiro Valor" value={valor1} onChangeText={(val) => {setValor1(val); }} />
        <TextInput placeholder="Segundo Valor" value={valor2} onChangeText={(val) => {setValor2(val); }} />
        <View>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) + Number(valor2));}}>
            <Text> + </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) - Number(valor2));}}>
            <Text> - </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) * Number(valor2));}}>
            <Text> * </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) / Number(valor2));}}>
            <Text> / </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setRes(opera);}}>
            <Text> Calcular </Text>
          </TouchableOpacity>
          <Text>{res}</Text>
        </View>
      </View>
    </View>
  )
}

// função JS eval() tenta resolver a expressão dentro dos parâmetros, mesmo sendo String

