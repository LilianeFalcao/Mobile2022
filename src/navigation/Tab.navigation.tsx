import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PerfilScreen, VideoAudioScreen, PostsTScreen, MapScreen, SairScreen, QrCodeScreen, CameraScreen, ArquivoScreen} from "../screens";
import colors from "../styles/colors";
import PostNavigation from "./post.navigation";

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
      options={{
        tabBarIcon: () => (
          <Ionicons name="person" size={24} color={colors.white} />
        ),
      }}
    />
    <Tab.Screen
        name="Posts"
        component={PostNavigation}
        options={{
          title: "Post",
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="qr-code-outline" 
            size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="camera" 
            size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="Arquivo"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="file-tray-outline" 
            size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="video"
        component={VideoAudioScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="play" 
            size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}
