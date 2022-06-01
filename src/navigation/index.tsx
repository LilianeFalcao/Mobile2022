import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./login.navigation";
import { useAuth } from "../Hook/auth";

export default function Navigation() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
       { access_token ? <LoginNavigation/> : <LoginNavigation/>} 
    </NavigationContainer>
  );
}