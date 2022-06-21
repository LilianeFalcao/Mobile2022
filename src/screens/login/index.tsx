import React from "react"
import { View, Text, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native'
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Login({ navigation }: LoginTypes) {

  async function handleSignIn() {
    navigation.navigate("Tab");
  }

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
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#FFF" />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.input}
              placeholder="E-mail" placeholderTextColor="#FFF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.input}
              placeholder="Senha" placeholderTextColor="#FFF"
              secureTextEntry={true}
              autoCapitalize="none"
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