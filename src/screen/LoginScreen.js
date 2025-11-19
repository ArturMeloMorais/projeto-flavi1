import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import NavbarLogin from '../components/NavbarLogin.js';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {}
      <NavbarLogin />

      <Text style={styles.titulo}>Entrar</Text>
      <Text style={styles.subtitulo}>Digite seu e-mail e senha para continuar</Text>

      <View style={styles.caixa}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>
        Ainda não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    width: 80,
    height: 40,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
  },
  caixa: {
    width: '85%',
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 6,
    height: 45,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 25,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rodape: {
    color: '#999',
    marginTop: 20,
  },
  link: {
    color: '#0af',
  },
});
