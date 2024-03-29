import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../styles/style";

// import ButtonReloadScreen from "../src/components/ButtonReloadScreen";
import ButtonFinishOrder from "../components/ButtonFinishOrder";

export default function DeliveryScreen({ navigation }) {

    // Renderiza a tela quando é carregada e atualiza a cada 3 minutos(180000ms)
    const [order, setOrder] = useState([]);

    useEffect(() => {
        listOrder();
        setInterval(() => {
            console.log("Atualizar Lista")
            listOrder();
        }, 180000);

    }, [])

    const listOrder = () => {
        fetch("http://localhost:3000/pedidosaentregar")
            .then((response) => { return response.json() })
            .then((data) => {
                setOrder(data);
            })
    }

    // Atualiza tela manualmente
    const reloadScreen = () => {
        location.reload()
    }


    // Função para finalizar pedido
    const closeOrder = (clientOrder) => {
        // console.log(clientOrder);
        const data = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Cliente: clientOrder }),
        }

        fetch("http://localhost:3000/atualizarpedidoentregue", data)
            .then((response) => response.status)
            .then((resp) => {
                if (resp === 200) {
                    console.log("Pedido Entregue");
                    listOrder();
                } else {
                    console.log(resp.status);
                }
            })
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerText}>Pedidos a Preparar</Text>
                <ButtonReloadScreen onPress={() => { reloadScreen() }} ></ButtonReloadScreen>
            </View> */}

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
                        <Text style={styles.orderData}>Pedido finalizado: {pedido.Hora_entrega}</Text>
                        <Text style={styles.orderData}>Entregador: {pedido.nome}</Text>

                        <ButtonFinishOrder
                            value="FINALIZAR ENTREGA"
                            onPress={() => {
                                closeOrder(pedido.Cliente);
                            }}>
                        </ButtonFinishOrder>
                    </View>
                );
            })}
        </View>
    );
}