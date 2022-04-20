import React from "react";
import {View ,Text, Image } from "react-native";
import styles from "./styles";

export default function Perfil(){
    return(
        <View style={styles.container}>> 
            <Image source={require("../../assets/Linn.png")} />
            <Text> Linn </Text>
            <Text> descrição </Text>
        </View>
    );
}