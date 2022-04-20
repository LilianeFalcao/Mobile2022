import React from "react"
import{View ,Text, TextInput, KeyboardAvoidingView,ImageBackground,} 
from 'react-native'
import Button from "../../components/Button";
import styles from "./styles";
import { LoginTypes } from "../../types/Screen.types";

export default function Cadastrar({navigation}: LoginTypes) {
    async function handleSignIn() {
      console.log("Cadastrar");
    }
    function handleLogin() {
        navigation.navigate("Login");
      }
    
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/fundo.png")}
          style={styles.container}
        >
          <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastre-se</Text>
            <View style={styles.formRow}>
              <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#FFF"/>
            </View>
            <View style={styles.formRow}>
              <TextInput
                style={styles.input}
                placeholder="Senha"  placeholderTextColor="#FFF"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            <Text style={styles.text}> Não possui cadastro? Cadastre-se  </Text>
            <Button title="cadastro" type="purple" onPress={handleSignIn} />
            <Button title="voltar" type="cinza" onPress={handleLogin} />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }