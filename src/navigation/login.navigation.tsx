import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStackParamList } from "../types/Screen.types";
import { LoginScreen, CadastrarScreen } from "../screens";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
    </Stack.Navigator>
  );
}