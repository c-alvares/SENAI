import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native'; //div = View(é uma classe)

export default function App() {
  // const nomes = ["Fulano", "Beltrano", "Ciclano", "Tobias", "Jurelson", "Josefina"];
  const usuarios = [
    {
      "img":"https://w7.pngwing.com/pngs/77/634/png-transparent-influencer-marketing-social-media-blog-computer-icons-influencer-purple-violet-content-marketing.png",
      "nome":"Lee",
      "cargo":"Influencer"
    },
    {
      "img":"https://toppng.com/uploads/preview/march-08-transparent-aviator-glasses-11563048312aqdagovxxt.png",
      "nome":"Tom",
      "cargo":"Coach Quântico"
    },
    {
      "img":"https://w7.pngwing.com/pngs/111/801/png-transparent-whiskey-old-fashioned-glass-highball-liqueur-ice-glass-glass-distilled-beverage-barware.png",
      "nome":"Ximira",
      "cargo":"Aspone"
    },
    {
      "img":"https://www.imagensempng.com.br/wp-content/uploads/2021/05/Moto-frete-Png.png",
      "nome":"Robson", 
      "cargo":"Contínuo"
    }
  ];

  return(
    <View style={style.container}>
      <View style={style.primeira}>
        {
          usuarios.map(usuario => {
            return(
              <View style={style.cartao}>
                <Image source={usuario.img} style={style.img}/>
                <Text style={style.txt}>{`${usuario.nome}`}</Text>
                <Text style={style.txt}>{`${usuario.cargo}`}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee2ff',
    alignItems: 'center'
  },
  primeira: { 
    margin: '25px',
    display: 'flex',
    flexDirection: 'row',
  },
  cartao: {
    border: '5px solid black',
    height: '20vh',
    margin: '5px',
    backgroundColor: '#FFFCCC',
  },
  txt: {
    fontWeight: 'bold'
  },
  img: {
    height: '8vh',
  }
});

// https://reactnative.dev/docs/components-and-apis