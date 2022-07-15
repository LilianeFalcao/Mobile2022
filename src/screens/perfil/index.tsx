import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../Hook/auth";


export default function Perfil({ navigation }: LoginTypes) {
  const { user } = useAuth();
  async function handleSignIn() {
    navigation.navigate("Login");
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleMap() {
    navigation.navigate("Map");
  }
  function handleQrCode() {
    navigation.navigate("QrCode");
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
        <Text style={styles.title}>{user?.name}</Text>
      </View>
      <View style={styles.input}>
        <Button title="endereço" type= "purple" onPress={handleMap} />
        <Button title="QrCode" type= "purple" onPress={handleQrCode} />
        <Button title="Publicar" type="purple" onPress={handleSignIn} />
        <Button title="Voltar" type="purple" onPress={handleLogin} />  
      </View>
    </View>
  );
}