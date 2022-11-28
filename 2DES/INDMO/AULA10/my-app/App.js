import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [pkm, setPkm] = useState(null);
  const [pikachu, setPikachu] = useState();

  const [pokemon, setPokemon] = useState();
  // const [pub, setPub] = useState([]);
  // const [posts, setPosts] = useState([]);


  const buscarPokemon = (pkm) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
    .then(resp => { return resp.json() })
    .then(pokeball => {
      setPikachu(pokeball);
      // console.log(pokeball.sprites.front_default)
    })
  };


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/150")
    .then(resp => { return resp.json()})
    .then(pocket => {
      setPokemon(pocket);
    })
    
    // fetch("https://jsonplaceholder.typicode.com/photos")
    // .then(resp =>  { return resp.json()})
    // .then(dados => {
    //   setPub(dados);
    // })

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(res => { return res.json()})
    // .then(data => {
    //   setPosts(data);
    // })
  });

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(v)=> { setPkm(v) }} style={styles.busca}></TextInput>
      <Button onPress={ () => { buscarPokemon(pkm) }} title="Buscar" style={styles.btn}/>
      {
        (pikachu !== undefined) ?
          <View>
            <Image style={styles.img}   source={{uri: pikachu.sprites.front_default}} />
            <Text style={styles.nome}>{pikachu.name}</Text>
          </View>
          :
          <View><Image style={styles.img} source={{uri: "https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"}} /></View>
      }

      {
        (pokemon !== undefined)
        ?
        <View>
          <Text style={styles.nome}>{pokemon.name}</Text>
          <Image style={styles.img} source={{uri: pokemon.sprites.front_default}} />
        </View>
        :
        <View style={styles.img}>
          <Image style={styles.img} source={{uri: "https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"}} />
        </View>
      }
      {/* {
        pub.map((publi, index) => {
          return(
            <View key={index}>
              <Text>{publi.id}</Text>
              <Text>{publi.title}</Text>
              <Image style={styles.img} source={{uri: publi.thumbnailUrl }} />
            </View>
          )
        })
      } */}
      {/* {
        posts.map((post, index) => {
          return(
            <View key={index}>
              <Text>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          )
        })
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  busca:{
    border: '1px solid',
  },
  btn: {
    margin: "0.5em",
  },
  nome: {
    alignItems: 'center',
    margin: '0.5em',
  },
  img: {
    width: "25vw",
    height: "25vw",
  },


});
