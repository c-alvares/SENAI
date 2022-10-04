import { View, Text, Image} from 'react-native';

export default function Contato({ route }) {
    var {contato} = route.params;

    return (
        <View>
            <Image
                source={{
                    uri: contato.imagem
                }}                
                style={{ width: 390, height: 211 }}
            />
            <Text>Endereço: {contato.endereco}</Text>
            <Text>Telefone: {contato.telefone}</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',     
//       },
// });