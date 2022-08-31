import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostStackParamList } from "../types/Screen.types";
import { PostsTScreen, EnviarMensagemScreen } from "../screens";

const Stack = createStackNavigator<PostStackParamList>();

export default function PostNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Post" component={PostsTScreen} />
      <Stack.Screen name="EnviarMensagem" component={EnviarMensagemScreen}/>
    </Stack.Navigator>
  );
}