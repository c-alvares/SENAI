import { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import ButtonLogin from '../../components/buttonLogin/ButtonLogin';

import styles from './style';

export default function Login({ navigation }) {

    const [ email, setEmail ] = useState();
    const [ senha, setSenha ] = useState();

    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]

    const logar = () => {
        users.forEach(user => {
            if(email == user.email && senha == user.senha) {
                navigation.navigate('Home', {'info': user.id})
            }else {
                console.log('Login ou senha incorreto')
            }
        })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            <View>
                <TextInput style={styles.box} placeholder="E-Mail" value={email} placeholderTextColor="grey" onchangeText={(val1) => {setEmail(val1)}}/>

                <TextInput style={styles.box} placeholder="Senha" value={senha} placeholderTextColor="grey" onChangeText={(val2) => {setSenha(val2)}}/>
                <ButtonLogin value="Login" onPress={logar}/>
            </View>
        </View>
    );
}