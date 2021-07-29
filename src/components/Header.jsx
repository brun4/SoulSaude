import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../styles/styleheader";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Image style={styles.Img} source={require("../img/heartbeat.png")} />
      <Text style={styles.Text}> SoulSaúde </Text>
    </View>
  );
}
