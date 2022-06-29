import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
} from 'react-native';
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../Hook/auth";
import { IResponse } from "../../interfaces/Response.interface";
import { AxiosError } from "axios";
import { IRegister } from "../../interfaces/User.interface";
import Loading from "../../components/Loading";

export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);

  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }

  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IResponse;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loading/>
    ):(
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}>Cadastre-se</Text>
          <View style={styles.formRow}>
            <TextInput style={styles.input} placeholder="Nome" 
            placeholderTextColor="#FFF" 
            onChangeText={(i) => handleChange({ name: i })}/>
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.input}
              placeholder="Senha" placeholderTextColor="#FFF"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(i) => handleChange({ password: i })}
            />
          </View>
          <Text style={styles.text}> Não possui cadastro? Cadastre-se  </Text>
          <Button title="cadastro" type="purple" onPress={handleSignIn} />
          <Button title="voltar" type="cinza" onPress={handleLogin} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
    )}
    </>
  );
}