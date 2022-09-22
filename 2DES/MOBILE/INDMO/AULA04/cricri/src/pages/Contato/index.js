import { View, Text } from 'react-native';

export default function Contato({ route }) {
    var {contato} = route.params;

    return (
        <View>
            <Image
                source={{
                    uri: contato.imagem,
                }}                
                style={{ width: 200, height: 200 }}
            />
            <Text>Endereço: {contato.endereco}</Text>
            <Text>Telefone: {contato.telefone}</Text>
        </View>
    )
}