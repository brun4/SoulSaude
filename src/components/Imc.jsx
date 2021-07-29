import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles/stylecontent";

export default function Imc() {
  const [nums, setNums] = useState({ peso: 0, altura: 0 });

  const [resultado, setResultado] = useState(0);

  const [responde, setResponde] = useState("");

  const handleInputChange = (nome, valor) => {
    setNums({
      ...nums,
      [nome]: valor,
    });
  };

  const calcula = () => {
    var imc = (nums.peso / (nums.altura * nums.altura)).toFixed(2);

    setResultado(imc);

    if (imc >= 17 && imc < 18.4) {
      setResponde(`Abaixo do peso. Fadiga stress ansiedade Peso normal.`);
    } else if (imc >= 18.5 && imc <= 24.9) {
      setResponde(`Peso normal. Menor risco de doenças cardíacas e vasculares`);
    } else if (imc >= 25) {
      setResponde(
        `Acima do peso. Pode apresentar sintomas de fadiga, má circulação, varizes`
      );
    }
  };

  return (
    <View>
      <Text style={styles.Titulo}>Calcule seu IMC</Text>
      <Text> </Text>

      <View style={styles.ContainerInput}>
        <Text style={styles.Text}>{`Peso ${nums.peso} Kg`}</Text>
        <TextInput
          style={styles.Input}
          placeholder="Peso"
          keyboardType="numeric"
          onChangeText={(valor) => handleInputChange("peso", valor)}
        />

        <Text style={styles.Text}>{`Altura: ${nums.altura} m`}</Text>
        <TextInput
          style={styles.Input}
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={(valor) => handleInputChange("altura", valor)}
        />
      </View>

      <View style={styles.ContainerInput2}>
        <TouchableOpacity style={styles.botao1} onPress={calcula}>
          <Text style={styles.botao1}>Resultado</Text>{" "}
        </TouchableOpacity>{" "}
        <Text> </Text>
        <Text style={styles.Resultado}>
          {resultado === 0 ? "" : `O resultado é ${resultado}`}
        </Text>
        <Text> </Text>
        <Text style={styles.Resultado}>{responde}</Text>
      </View>
    </View>
  );
}
