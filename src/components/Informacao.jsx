import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/stylecontent";
export default class mostraInformacao extends Component {
  state = {
    Titulo: this.props.Titulo,
    Autor: this.props.Autor,
    Conteudo: this.props.Conteudo,
  };
  render() {
    console.log(this.state);
    return (
      <View>
        <Text style={styles.Titulo}>{this.state.Titulo}</Text>
        <Text style={styles.Text}>Por: {this.state.Autor}</Text>
        <Text style={styles.Text}>{this.state.Conteudo}</Text>
        <Text>{"\n"}</Text>
      </View>
    );
  }
}
