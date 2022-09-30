import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Compromissos from './src/pages/Compromissos/compromissos';
// import Descricao from './src/pages/Descricao/descricao.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromissos" componente={Compromissos} />
        {/* <Stack.Screen name="Descricao" component={Descricao} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}