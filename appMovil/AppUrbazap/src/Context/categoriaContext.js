import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeCategoria = async(value) =>{
    try{
        await AsyncStorage.setItem("categoria", value)
    }
    catch(e){
        console.log(e)
    }
}

export const getCategoria = async() =>{
    try{
        const value= await AsyncStorage.getItem("categoria")
        return value
    }
    catch(e){
        console.log(e)
    }
}
