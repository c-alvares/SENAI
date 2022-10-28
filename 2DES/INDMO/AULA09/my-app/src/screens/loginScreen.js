import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/style';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = [
        {
            "email":"fulano@gmail.com",
            "senha":"umdoistresquatro",
        },
        {
            "email":"beltrano@ig.com.br",
            "senha":"s3nh4",
        }
    ]

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/dog.png')}  style={styles.dog}/>
            <TextInput style={styles.textInput} onChangeText={(value) => {setEmail(value)}} placeholder="Informe o email" placeholderTextColor={'#00000077'}/>
            <TextInput style={styles.textInput} onChangeText={(value) => {setPassword(value)}} placeholder="Informe sua senha" placeholderTextColor={"#00000077"}
    secureTextEntry={true} />
                <TouchableOpacity style={styles.conectar} onPress={() => { data.forEach( user => { if(user.email === email && user.senha === password) navigation.navigate("Home") }) } }>
                    <Text style={styles.text}>Conectar</Text>
                </TouchableOpacity>
        </View>
    )
}

