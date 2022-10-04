import {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

export default function App() {
  // const [value, setValue] = useState("");
  // const [value2, setValue2] = useState("");

  const [opera, setOpera] = useState(""); //utilização de get & set
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
      <View style={style.container}>
        <Text style={style.titulo}>CALCULADORA REACT NATIVE</Text>
        <TextInput style={style.inp} placeholder="Primeiro Valor" value={valor1} onChangeText={(val) => {setValor1(val); }} />
        <TextInput style={style.inp} placeholder="Segundo Valor" value={valor2} onChangeText={(val) => {setValor2(val); }} />
        <View style={style.operad}>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) + Number(valor2));}}>
            <Text style={style.oper}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) - Number(valor2));}}>
            <Text style={style.oper}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) * Number(valor2));}}>
            <Text style={style.oper}> * </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setOpera(Number(valor1) / Number(valor2));}}>
            <Text style={style.oper}> / </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {setRes(opera);}}>
            <Text style={style.calc}> Calcular </Text>
          </TouchableOpacity>
          <Text style={style.res}>{res}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee2ff',
    alignItems: 'center',
    border: '3px solid'
  },
  titulo: {
    fontWeight: 'bold',
    
  },
  inp: {
    border: '3px solid',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: '5px'
  },
  operad: {
    display: 'flex',
    flexDirection: 'row'
  },
  oper: {
    border: '3px solid',
    width: '20px',
    margin: '5px',
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  calc: {
    border: '3px solid',
    alignItems: 'center',
    margin: '5px',
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  res: {
    border: '3px solid',
    width: '17vw',
    height: '5vh',
    margin: '5px',
    backgroundColor: 'white'
  }
});
// função JS eval() tenta resolver a expressão dentro dos parâmetros, mesmo sendo String

