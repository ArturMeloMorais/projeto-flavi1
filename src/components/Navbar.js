import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.navLeft}>
        <Image source={require("../../assets/barraNav.png")} style={styles.icon2} />
        <Image source={require("../../assets/logoHBO.avif")} style={styles.icon} />
      </View>

      <View style={styles.navRight}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Entrar</Text>
        </TouchableOpacity>

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
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 28,
    height: 20,
    tintColor: "#fff",
  },
  icon2: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },
  navButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  navButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
});
