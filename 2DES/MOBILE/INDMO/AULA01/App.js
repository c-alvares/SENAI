import {View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native'; //div = View(é uma classe)

export default function App() {
  // const nomes = ["Fulano", "Beltrano", "Ciclano", "Tobias", "Jurelson", "Josefina"];
  const usuarios = [
    {
      "img":"https://img2.gratispng.com/20180406/pve/kisspng-tom-cat-kitten-tom-and-jerry-talking-tom-and-frien-tom-and-jerry-5ac7adfeda7190.7836761415230356468948.jpg",
      "nome":"Tomas",
      "cargo":"Influencer"
    },
    {
      "img":"https://flyclipart.com/thumb2/round-glasses-black-frame-255116.png",
      "nome":"Wesley",
      "cargo":"Coach Quântico"
    },
    {
      "img":"https://static.vecteezy.com/system/resources/previews/001/201/132/original/beer-png.png",
      "nome":"Adolfo",
      "cargo":"Aspone"
    },
    {
      "img":"https://images.vexels.com/media/users/3/199424/isolated/preview/ed5ac9264f9fa7bfbbdd70571c3188fb-silhueta-de-patinete.png",
      "nome":"Olavo",
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
                <Text>{`${usuario.nome} ${usuario.cargo}`}</Text>
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
    backgroundColor: '#FFF000',
    width: '50vw',
    height: '15vh',
    margin: '25px',
  },
  cartao: {
    border: '5px solid #CCCFFF',
    //display: 'flex',
  },
  img: {
    width: '75px',
    height: '50px'
  }
});

// https://reactnative.dev/docs/components-and-apis