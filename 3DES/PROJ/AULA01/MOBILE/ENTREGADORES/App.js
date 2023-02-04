import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./src/screens/LoginScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

// quando utilizar o simulador, máquina virtual, deve-se substituir o localhost da uri pelo ip da máquina (cmd - ipconfig)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entregas">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Entregas" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Recomendação de utilizar post para o login, criando um endpoint no backend utilizando uma query(Select) com where para comparar os dados enviados via body

