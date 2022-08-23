import React from "react";
import { Text, View } from "react-native";
//import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import { format } from "date-fns";

export default function Card({ data }: IMensagem) {
  return (
    <View style={styles.card}>
      <Text>
          {data.user.name} - {" "}
          {format(new Date(data.created_at), "dd/MM/yyyy  HH:mm:ss")}
      </Text>
      <View style={styles.msg}>
        <Text><>Avaliação: {data.avaliacao}</></Text>
        <Text><>Considerações: {data.consideracoes}</></Text>
        <Image source={{ uri: data.imagem}} style={styles.img}> </Image>
        <View style={styles.topicos}>
          {data.topicos.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.topicos}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}