import React from "react";
import { Text, View } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function Card({ data }: CardProps) {
  return (
    <View style={styles.card}>
      <Text>
        <>{data.nome} - {data.data}</>
      </Text>
      <View>
        <Text><>Avaliação: {data.avaliacao}</></Text>
        <Text><>Considerações: {data.consideracoes}</></Text>
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}