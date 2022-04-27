import React from "react";
import { View } from "react-native";
import { cardAnimeProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function cardAnime({ children }: cardAnimeProps) {
  return <View style={styles.cardAnime}>{children}</View>;
}