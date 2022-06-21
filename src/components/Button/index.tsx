import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import styles from "./styles";

export default function Button({ onPress, title, type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        type == "cinza"
          ? styles.butttonBotao
          : type == "orange"
            ? styles.butttonOrange
            : type == 'postbotao'
              ? styles.buttonpostbotao
              : styles.butttonPurple

      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}