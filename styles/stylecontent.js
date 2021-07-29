import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Text: {
    color: "#525252",
  },
  Titulo: {
    color: "#525252",
    fontSize: 20,
  },
  Welcome: {
    backgroundColor: "#8ED1FC",
    textAlign: "center",
  },

  Imc: {
    backgroundColor: "#8ED1FC",
  },

  Info1: {
    backgroundColor: "#8ED1FC",
    textAlign: "center",
  },

  Informacao: {
    backgroundColor: "#03A9F4",
    textAlign: "center",
  },

  Input: {
    height: 30,
    width: "40%",
    margin: "auto",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 20,
    flexDirection: "collumn",
  },

  ContainerInput: {
    flexDirection: "row",
  },

  ContainerInput2: {
    flexDirection: "collumn",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },

  Resultado: {
    height: 30,
    width: "80%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 25,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  container1: {
    flexDirection: "column",
    alignItems: "space-around",
  },

  botao1: {
    backgroundColor: "#00BCD4",
    color: "white",
    width: 100,
    height: 30,
    fontSize: 20,
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
  },
});
