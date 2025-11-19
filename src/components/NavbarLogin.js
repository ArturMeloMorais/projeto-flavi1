import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function NavbarLogin() {
  return (
    <View style={styles.navbar}>
      {/* Lado esquerdo - logo */}
      <View style={styles.navLeft}>
        <Image
          source={require("../../assets/logoHBO.avif")}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      {/* Lado direito - botão Cadastrar */}
      <View style={styles.navRight}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 15,
    paddingVertical: 12,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  navRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 40,
  },
  navButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  navButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
});
