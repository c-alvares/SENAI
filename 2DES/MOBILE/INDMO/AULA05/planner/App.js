import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Compromissos from './pages/Compromissos/compromissos.js';
import Descricao from './pages/Descricao/descricao.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromissos" componente={Compromissos}></Stack.Screen>
        <Stack.Screen name="Descricao" component={Descricao}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}