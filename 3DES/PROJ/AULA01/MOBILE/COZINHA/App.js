import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./src/styles/style";

import ButtonReloadScreen from "./src/components/ButtonReloadScreen";
import ButtonFinishOrder from "./src/components/ButtonFinishOrder";

export default function App() {

  // Renderiza a tela quando é carregada e atualiza a cada 3 minutos(180000ms)
  const [order, setOrder] = useState([]);
  useEffect(() => {
    listOrder();
    setInterval(() => {
      console.log("Atualizar Lista")
      listOrder();
    }, 180000);

  }, [])

  // Atualiza tela manualmente
  const reloadScreen = () => {
    location.reload()
  }

  // Consumo da API para importação dos pedidos a serem preparados
  const listOrder = () => {
    fetch("http://localhost:3000/pedidosapreparar")
      .then((response) => { return response.json() })
      .then((data) => {
        setOrder(data);
      })
  }

  // Função para finalizar pedido
  const closeOrder = (clientOrder) => {
    // console.log(clientOrder);
    const data = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Cliente: clientOrder }),
    }

    fetch("http://localhost:3000/atualizarpedidopronto", data)
      .then((response) => response.status)
      .then((resp) => {
        if (resp === 200) {
          console.log("Pedido Enviado");
          listOrder();
        } else {
          console.log(resp.status);
        }
      })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos a Preparar</Text>
        <ButtonReloadScreen onPress={() => { reloadScreen() }} ></ButtonReloadScreen>
      </View>

      {order.map((pedido, index) => {
        // Formatação da data
        var formatedDate = pedido.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]

        return (
          <View style={styles.boxOrder} key={index}>
            <Text style={styles.orderData}>Pedido nº: {pedido.ID_Pedido}</Text>
            <Text style={styles.orderData}>Cliente: {pedido.Cliente}</Text>
            <Text style={styles.orderData}>Produto: {pedido.Produto}</Text>
            <Text style={styles.orderData}>Data: {formatedDate}</Text>
            <Text style={styles.orderData}>Hora do Pedido: {pedido.Hora_pedido}</Text>
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
    </ScrollView>
  );
}