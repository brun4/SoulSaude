import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { styles } from "../../styles/stylecontent";
import Imc from "./Imc";
import Informacao from "./Informacao";
import Informacao1 from "./Informacao1";

export default function Content() {
  return (
    <View style={styles.Informacao}>
      <Text> </Text>
      <View style={styles.Welcome}>
        <Informacao
          Titulo="Bem-vindo"
          Autor="Equipe SoulSaúde"
          Conteudo="Volte sempre!"
        />
      </View>
      <Informacao1
        Titulo="Importância das atividades físicas"
        Autor="Equipe SoulSaúde"
        Conteudo="A prática de atividade física é, sem dúvida, essencial para aumentarmos nossa qualidade de vida. Inúmeros estudos demonstram como a prática frequente de atividade física evita doenças e melhora, até mesmo, nossa disposição para a realização de nossas atividades diárias. A seguir, listaremos os principais benefícios de se praticar atividades físicas e também os riscos de se ter uma vida sedentária."
      />
      <View style={styles.Imc}>
        <Informacao
          Titulo="O que é IMC"
          Autor="Equipe SoulSaúde"
          Conteudo="O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. É um método fácil e rápido para a avaliação do nível de gordura de cada pessoa e por isso é um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS). Para adultos, um IMC entre 20 e 22 indica a quantidade ideal e saudável de gordura corporal, o que está associado com maior tempo de vida e menor incidência de doenças graves.  Entretanto, é importante ressaltar que um índice entre 22 e 25 também é considerado um intervalo bastante aceitável, pois está igualmente associado à boa saúde."
        />
        <Imc />
      </View>
      <Informacao1
        style={styles.Container}
        Titulo="Ponte"
        Autor="Equipe SoulSaúde"
        Conteudo="Deite-se de bruços no chão, numa superfície plana. Levante o corpo apoiando-se sobre as pontas dos pés e os antebraços (mantendo-os paralelos, à frente da cabeça). Todo o corpo deve permanecer suspenso, formando uma espécie de triângulo retângulo. A ponte fortalece várias musculaturas, já que mobiliza a área de trás das pernas, os glúteos, o entorno da coluna vertebral e, claro, o abdômen. Ela ajuda muito a evitar dores na lombar e na coluna. Quantas séries: você pode começar com três séries de 20 segundos por dia. A cada mês, a medida que a musculatura se fortalecer, pode aumentar 10 segundos por série. Só faça a ponte em superfícies planas, para não causar qualquer problema na coluna."
      />
      <View style={styles.Info1}>
        <Informacao1
          Titulo="Agachamento na cadeira"
          Autor="Equipe SoulSaúde"
          Conteudo="Com uma cadeira, faça movimentos de sentar e levantar em sequências de 10 a 12 vezes por série. Tente fazer com que o movimento de assentar não seja muito rápido, fortalecendo a musculatura trabalhada. O agachamento auxilia a tonificar as penas e a musculatura dos glúteos. Quantas séries: a partir do segundo dia de atividades, você pode fazer entre 3 e 4 séries, sempre respeitando os limites do seu corpo. No que prestar atenção: mantenha os pés alinhados, com as pernas abertas, sem ultrapassar a linha do quadril. Ao descer o corpo, contraia o abdômen e não permaneça sentado no banco (volte a subir logo que chegar)."
        />
      </View>
    </View>
  );
}
