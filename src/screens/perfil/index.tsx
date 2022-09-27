import React, {useEffect, useState, useRef} from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../Hook/auth";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../../services/data/Push"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: false,
    shouldSetBadge: false,
  }),
});


export default function Perfil({ navigation }: LoginTypes) {
  const { user } = useAuth();
  const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    if(user && user.profile_photo_url){
      setIsLoading(false);
    }
  }, [user]);
  
  useEffect(() => {
    async function fetchToken(){
      const token= await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  async function handleSignIn() {
    navigation.navigate("Login");
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleArquivo() {
    navigation.navigate("Arquivo");
  }
  function handlePublicar() {
    navigation.navigate("Posts");
  }
  function handleCamera() {
    navigation.navigate("Camera");
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
        <Button title="QrCode" type= "purple" onPress={handleQrCode} />
        <Button title="Publicar" type="purple" onPress={handlePublicar} />
        <Button title="Camera" type="purple" onPress={handleCamera} />
        <Button title="Arquivos" type="purple" onPress={handleArquivo} />
        <Button title="Voltar" type="purple" onPress={handleLogin} />  
      </View>
    </View>
  );
}