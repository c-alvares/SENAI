import AsyncStorage from "@react-native-async-storage/async-storage";

const store = async (chave, valor) => {
    try{
        await AsyncStorage.setItem(chave, valor)
    } catch (e) {
        console.log(e);
    }
}

const read = async (chave) => {
    try{
        return await AsyncStorage.getItem(chave)
    } catch (e) {
        console.log(e);
    }
}

export {
    store,
    read
}