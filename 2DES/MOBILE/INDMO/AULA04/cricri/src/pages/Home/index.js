import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function Home({route}) {
    const [lista, setLista] = useState([
        {
            "nome":"barzin",
            "nota":"*****",
            "contato":{
                "imagem":"https://fastly.4sqi.net/img/general/600x600/70826730_vB67rWinGR4OPj68Ywry8l1tFSobhCX8myxHf6O9Iv0.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"buteco",
            "note":"****",
            "contato":{
                "imagem":"https://fastly.4sqi.net/img/general/600x600/70826730_vB67rWinGR4OPj68Ywry8l1tFSobhCX8myxHf6O9Iv0.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"podrão",
            "note":"***",
            "contato":{
                "imagem":"https://fastly.4sqi.net/img/general/600x600/70826730_vB67rWinGR4OPj68Ywry8l1tFSobhCX8myxHf6O9Iv0.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"alanchonete",
            "note":"****",
            "contato":{
                "imagem":"https://fastly.4sqi.net/img/general/600x600/70826730_vB67rWinGR4OPj68Ywry8l1tFSobhCX8myxHf6O9Iv0.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        }
    ])


    return (
        <View>
            {
                lista.map((list, indice) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("Contato", { "contato":list.contato} )}}>
                            <Text>{list.nome}</Text>
                            <Text>R$ {list.nota}</Text>
                        </TouchableOpacity>
                    )
                })
            }
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
  });