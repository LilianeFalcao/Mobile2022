import React from "react";
import {View ,Text, Image } from "react-native";
import styles from "./styles";
import cardAnime from "../../components/Button";
import Button from "../../components/Button"

export default function Perfil(){
    return(
        <View style={styles.container}>
            <View >
            <View>
            <Image  style={styles.imagem} source={require("../../assets/Linn.png")} />
            </View>
            <Text> Linn </Text>
            <Text style={styles.textoPerfil}> descrição </Text>
            <Button  title="+" type="cinza"  onPress={() => console.log("postar")} />
            </View>
        </View>
    );
}