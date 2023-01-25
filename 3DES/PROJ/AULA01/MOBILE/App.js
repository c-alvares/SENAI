import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";

import styles from "./styles/style";

import ButtonPedidoPronto from './components/buttonPedidoPronto';

export default function App() {

  const [order, setOrder] = useState([]);

  fetch("http://localhost:3000/pedidosapreparar")
    .then((resp) => {
      return resp.json();
    })
    .then((dados) => {
      setOrder(dados);
    });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cabecalho}>Pedidos a Preparar</Text>
      </View>

      {order.map((pedido, index) => {
        return (
          <View style={styles.pedidoBox} key={index}>
            <Text style={styles.dados}>Pedido nº: {pedido.ID_Pedido}</Text>
            <Text style={styles.dados}>Cliente: {pedido.Cliente}</Text>
            <Text style={styles.dados}>Endereço: {pedido.Endereco}</Text>
            <Text style={styles.dados}>Produto: {pedido.Produto}</Text>
            <Text style={styles.dados}>Data: {pedido.data}</Text>
            <Text style={styles.dados}>Hora do Pedido: {pedido.Hora_pedido}</Text>
            {/* <Text style={styles.dados}>{pedido.Hora_entrega}</Text>
            <Text style={styles.dados}>{pedido.Hora_fim}</Text> */}
            <Text style={styles.dados}>Entregador: {pedido.nome}</Text>
            <ButtonPedidoPronto value="PEDIDO PRONTO PARA ENTREGA"></ButtonPedidoPronto>
          </View>
        );
      })}

    </View>
  );
}
