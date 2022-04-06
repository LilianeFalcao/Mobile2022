import React from "react"
import{View ,Text, TextInput, KeyboardAvoidingView} from 'react-native'
import { Zocial } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Button from "../../components/Button";

export default function Login(){
    async function handleSignIn() {
        console.log("Login");
      }

    return(
        <View>
            <KeyboardAvoidingView>
                <Text> login </Text>
                <View>
                    <Zocial name="email" size={24} color="black" />
                    <TextInput placeholder="E-mail"
                     keyboardType="email-address" 
                     autoCapitalize="none">
                    </TextInput>
                </View>
                <View>
                    <Ionicons name="md-keypad" size={24} color="black" />
                    <TextInput placeholder="senha"
                     secureTextEntry ={true}
                     autoCapitalize="none" />
                </View>
                <Button title="Login" type="cinza" onPress={handleSignIn} />
                <Button title="Cadastre-se" type="orange" onPress={handleSignIn} />
            </KeyboardAvoidingView>
        </View>
    );
}