import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function PlanosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Escolha seu plano</Text>
        <Text style={styles.subtitle}>
          Assista sucessos de bilheteria, produções originais inéditas e
          favoritos da família.
        </Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleButton, styles.activeToggle]}>
            <Text style={[styles.toggleText, styles.activeText]}>Mensal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton}>
            <Text style={styles.toggleText}>Anual</Text>
          </TouchableOpacity>
          <View style={styles.saveBox}>
            <Text style={styles.saveText}>Economize até 20%</Text>
          </View>
        </View>

        <View style={styles.planBox}>
          <Text style={styles.planTitle}>Básico com anúncios</Text>
          <Text style={styles.planPrice}>
            R$ 29,90<Text style={styles.month}> /mês</Text>
          </Text>
          <Text style={styles.planItem}>• 2 dispositivos ao mesmo tempo</Text>
          <Text style={styles.planItem}>• Resolução de vídeo Full HD</Text>
        </View>

        <View style={styles.planBox}>
          <Text style={styles.planTitle}>Standard</Text>
          <Text style={styles.planPrice}>
            R$ 44,90<Text style={styles.month}> /mês</Text>
          </Text>
          <Text style={styles.planItem}>• 2 dispositivos ao mesmo tempo</Text>
          <Text style={styles.planItem}>• Resolução de vídeo Full HD</Text>
          <Text style={styles.planItem}>• 30 downloads para curtir off-line</Text>
        </View>

        <View style={styles.planBox}>
          <Text style={styles.planTitle}>Platinum</Text>
          <Text style={styles.planPrice}>
            R$ 55,90<Text style={styles.month}> /mês</Text>
          </Text>
          <Text style={styles.planItem}>• 4 dispositivos ao mesmo tempo</Text>
          <Text style={styles.planItem}>• Resolução Full HD e 4K Ultra HD</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e0e",
  },
  scroll: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 25,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeToggle: {
    borderBottomColor: "#fff",
  },
  toggleText: {
    color: "#999",
    fontSize: 16,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveBox: {
    backgroundColor: "#2b2b2b",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 8,
  },
  saveText: {
    color: "#00bfff",
    fontSize: 12,
  },
  planBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  planTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  planPrice: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  month: {
    fontSize: 14,
    color: "#ccc",
  },
  planItem: {
    color: "#ccc",
    fontSize: 14,
    marginVertical: 2,
  },
});
