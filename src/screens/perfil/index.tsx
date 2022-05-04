import React from "react";
import {View ,Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button"

export default function Perfil(){
    return(
        <View style={styles.container}>
            <View style={styles.fundo}>
            <View>
            <Image  style={styles.imagem} source={require("../../assets/Linn.png")} />
            </View>
            <Text> Linn </Text>
            <Text style={styles.textoPerfil}> descrição </Text>
            <Button  title="+" type="postbotao"  onPress={() => console.log("postar")} />
            </View>
        </View>
    );
}