import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  const fazerLogin = () => {
    // alert('Login feito com sucesso!'); -- talvez precise desse alerta mais tarde
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💰 Finanças Simples</Text>
      <Button title="Entrar" onPress={fazerLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
