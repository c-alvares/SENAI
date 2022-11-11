import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastrarPessoa from './src/cadastrarPessoa.screen/cadastrarPessoa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Cadastrar Pessoa" component={CadastrarPessoa} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}