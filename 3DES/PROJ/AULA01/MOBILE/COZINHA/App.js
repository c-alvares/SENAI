import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./styles/style";

import ButtonFinishOrder from "./components/ButtonFinishOrder";

export default function App() {

  // Consumo da API para importação dos pedidos a serem preparados
  const [order, setOrder] = useState([]);

  fetch("http://localhost:3000/pedidosapreparar")
    .then((resp) => {
      return resp.json();
    })
    .then((dados) => {
      setOrder(dados);
    });

  // Função para finalizar pedido
  const closeOrder = (clientOrder) => {
    // console.log(clientOrder);
    const data = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Cliente: clientOrder }),
    };

    fetch("http://localhost:3000/atualizarpedidopronto", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp == 200) {
          window.location.reload();
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos a Preparar</Text>
      </View>

      {order.map((pedido, index) => {
        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>Pedido nº: {pedido.ID_Pedido}</Text>
            <Text style={styles.orderData}>Cliente: {pedido.Cliente}</Text>
            <Text style={styles.orderData}>Endereço: {pedido.Endereco}</Text>
            <Text style={styles.orderData}>Produto: {pedido.Produto}</Text>
            <Text style={styles.orderData}>Data: {pedido.data}</Text>
            <Text style={styles.orderData}>
              Hora do Pedido: {pedido.Hora_pedido}
            </Text>
            {/* <Text style={styles.orderData}>{pedido.Hora_entrega}</Text>
            <Text style={styles.orderData}>{pedido.Hora_fim}</Text> */}
            <Text style={styles.orderData}>Entregador: {pedido.nome}</Text>

            <ButtonFinishOrder
              value="PEDIDO PRONTO PARA ENTREGA"
              onPress={() => {
                closeOrder(pedido.Cliente);
              }}
            ></ButtonFinishOrder>
          </View>
        );
      })}
    </View>
  );
}
