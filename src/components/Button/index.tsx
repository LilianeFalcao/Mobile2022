import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import styles from "./styles";

export default function Button({onPress, title, type, ...rest}:ButtonProps){
    return(
        <TouchableOpacity
      style={
        type == "cinza"
          ? styles.butttonCinza
          : type == "orange"
          ? styles.butttonOrange
          : styles.butttonPurple
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}