import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,Alert } from 'react-native';


export default function App() {

  const saludo=()=>{Alert.alert("hola")};
  const [name,setName]=useState("");
  return (
    <View style={styles.container}>
      <Image source={require('./assets/descarga.jpg')}></Image>
     
          <Text>{name}</Text>

        <TextInput maxlength={10} style="styles.texInput" placeholder="usuario" onChangeText={(text)=>setName(text)}/>
        <Button title="start" onPress={saludo}></Button>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    justifyContent:'center',
    flexDirection: 'column',
    alignItems:'center'
  },

  logo:{
width:100,
height:100


  },

  TextInput:{
    borderColor: '#FF3355',
    borderWidth:1,
    borderRadius:5,
    paddingLeft:20,
    width:100



  },
  text: {
    color: '#ff1744'
  }
});
