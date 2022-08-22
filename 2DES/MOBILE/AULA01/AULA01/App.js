import {View, Text, StyleSheet} from 'react-native'; //div = View(é uma classe)

export default function App() { //
  return(
    <View style={style.container}>
      <View style={style.primeira}>
        <Text>Hello, World!</Text>
      </View>
      <View style={style.segunda}>
        <Text>Minha segunda View</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primeira:{
    flex: 1,
    backgroundColor: '#F1D2E7'
  },
  segunda: {
    flex: 8,
    backgroundColor: '#E2F5C8'
  }
});