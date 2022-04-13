import React from "react"
import{View ,Text, TextInput, KeyboardAvoidingView,ImageBackground} from 'react-native'
import { Zocial } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Button from "../../components/Button";
import styles from "./styles";
import {LoginTypes} from "../../types/Screen.types";

export default function Login({navigation}: LoginTypes){
    async function handleSignIn() {
        console.log("Login");
      }

    function handleCadastrar (){
        navigation.navigate("cadastrar");
    }

    return(
        <View style={styles.container}>
    <ImageBackground
          source={require("../../assets/fundo.png")}
          style={styles.container}
        >
          <KeyboardAvoidingView>
            <Text style={styles.title}>Login</Text>
            <View style={styles.formRow}>
              <Ionicons name="person" style={styles.icon} />
              <TextInput style={styles.input} placeholder="Nome" />
            </View>
            <View style={styles.formRow}>
              <Zocial name="email" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.formRow}>
              <Ionicons name="key" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            <Button title="Login" type="cinza" onPress={handleSignIn} />
            <Button title="Cadastre-se" type="cinza" onPress={handleCadastrar} />
          </KeyboardAvoidingView>
        </ImageBackground>
        </View>
    );
}