import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/fundo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Navbar />

        {/* Conteúdo principal */}
        <View style={styles.container}>
          <Image source={require("../../assets/logoHBO.avif")} style={styles.logo} />

          <Text style={styles.text}>Planos a partir de R$22,90/mês</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ASSINE AGORA</Text>
          </TouchableOpacity>

          <Text style={styles.text2}>ESCOLHA O MELHOR PLANO PARA VOCÊ</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  container: {
    paddingVertical: 60,
    paddingHorizontal: 30,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  logo: {
    width: 220,
    height: 110,
    resizeMode: "contain",
    marginBottom: 25,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  text2: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 35,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
