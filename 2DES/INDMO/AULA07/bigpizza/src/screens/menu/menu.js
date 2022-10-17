// import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import PizzaCard from '../../components/pizzaCard/index';
import BtnCarrinho from '../../components/btnCarrinho/index'
import styles from '../../styles/style.js';

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const menu = [
    {
      "img": "https://static.baratocoletivo.com.br/2018/0817/oferta_15345349963183_OFERTA.jpg",
      "nome": "Pepperoni",
      "descricao": "Molho caseiro, Mussarela"
    },
    {
      "img": "https://www.pizzaprime.com.br/wp-content/uploads/2021/04/pizza-de-camarao.jpg",
      "nome": "Frango",
      "descricao": "Molho caseiro, Mussarela"
    },
    {
      "img": "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/04/La-Braciera_Pizza-Italiana_Neuton-Araujo.jpg",
      "nome": "Napolitana",
      "descricao": "Molho caseiro, Mussarela"
    },
    {
      "img": "https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg",
      "nome": "New York",
      "descricao": "Molho caseiro, Mussarela"
    },
  ]

  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.roll}> */}
        <PizzaCard/>
      {/* </ScrollView> */}
      <BtnCarrinho value={carrinho} />
    </View>
  )
}