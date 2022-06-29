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
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);

  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.name && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos! ");
        setIsLoading(false);
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
      setIsLoading(false);
    }
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}> Faça Login</Text>
          <View style={styles.formRow}>
            <TextInput style={styles.input} placeholder="Nome" 
            placeholderTextColor="#FFF"/>
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
          <Button title="Login" type="purple" onPress={handleSignIn} />
          <Button title="Cadastre-se" type="cinza" onPress={handleCadastrar} />
          <Text style={styles.text}> Esqueceu sua senha?  </Text>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}