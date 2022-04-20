import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.purple,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveBackgroundColor: colors.perfil,
        tabBarInactiveTintColor: colors.black,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
      />
      <Tab.Screen
        name="Mensagem"
        component={PerfilScreen}
      />
    </Tab.Navigator>
  );
}