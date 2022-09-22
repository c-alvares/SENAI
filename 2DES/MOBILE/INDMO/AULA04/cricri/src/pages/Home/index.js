import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
    const lista = [
        {
            "nome":"Tequila",
            "nota":"https://cdn-icons-png.flaticon.com/512/3214/3214993.png",
            "contato":{
                "imagem":"https://media-cdn.tripadvisor.com/media/photo-s/0a/d0/4f/f8/tequila.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"Dogão de Osasco",
            "nota":"https://cdn-icons-png.flaticon.com/512/3214/3214993.png",
            "contato":{
                "imagem":"https://i.ytimg.com/vi/L0RQKy2nhpA/maxresdefault.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"Showrasco Grego",
            "nota":"https://cdn-icons-png.flaticon.com/512/3214/3214993.png",
            "contato":{
                "imagem":"https://i.pinimg.com/originals/eb/a2/b9/eba2b9311b0b4e582a9bbbc9d7036baa.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        },
        {
            "nome":"food truck",
            "nota":"https://cdn-icons-png.flaticon.com/512/3214/3214993.png",
            "contato":{
                "imagem":"https://img.archiexpo.com/pt/images_ae/photo-mg/167318-16413478.jpg",
                "endereco":"Rua Delfos nº 148",
                "telefone":"(19) 98241-9874"
            }
        }
    ];


    return (
        <View style={styles.container}>
            {
                lista.map((list, indice) => {
                    return(
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Contato", { "contato":list.contato} )}}>
                                <Text style={styles.nomes}>{list.nome}</Text>                            
                            </TouchableOpacity>
                            <Image source={{ uri: list.nota }} style={styles.nota} />
                        </View>
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
    },
    button: {
        margin: '10px'
    },
    nomes:{
        fontWeight: 'bold',
        fontFamily: 'Comic'
    },
    nota: { 
        width: 50, 
        height: 25, 
        backgroundColor: 'yellow', 
        borderRadius: 10 
    },
  });
//   https://medium.com/tableless/fontes-customizadas-no-react-native-baa64f1fda6f