import React from "react";
import {View ,Text, Image } from "react-native";
import styles from "./styles";

export default function Perfil(){
    return(
        <View style={styles.container}>
            <Image  style={styles.imagem} source={require("../../assets/Linn.png")} />
            <View >
            <Text> Linn </Text>
            <Text style={styles.textoPerfil}> descrição </Text>
            </View>
        </View>
    );
}