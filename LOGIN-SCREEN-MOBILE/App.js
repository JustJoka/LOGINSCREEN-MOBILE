import React, { useState } from 'react';
import { Text, View, Button, TextInput, Image } from 'react-native';
import styles from "./styles";

export default function App() {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha] = useState('');
  const [ logado, setLogado ] = useState(false)

  function login(){
    if ( usuario === 'Admin' && senha === '123'){
      setLogado(true)
    } else {
      alert('Usuario ou senha incorretos!')
    }
  }

  if ( !logado ) {

  
  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
       source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s'
      }}
      />

      <TextInput
        style={styles.input} 
        placeholder='Usuário'
        value={usuario}
        onChangeText={setUsuario}
        />

      <TextInput
        style={styles.input} 
        placeholder='Senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry //Censura na senha!!
        />

      <Button 
      title='Fazer Login' 
      onPress={login}
      style={styles.botao}
      />
    </View>
  );
  }
return (
  <View style={styles.container}>
    <Text>Seja bem-vindo (a), {usuario}</Text>


  </View>
)
}
