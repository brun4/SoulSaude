import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../styles/stylefooter";

export default function Footer() {
  return (
    <View style={styles.Footer}>
      <Text style={styles.Text}>
        Bruna Dias da Silva | Estudante de desenvolvimento Front Mobile |
        SoulCode Academy{" "}
      </Text>
    </View>
  );
}
