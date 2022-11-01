import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PerfilScreen,PedometroScreen, VideoAudioScreen, GyroscopioScreen, MagnetoScreen, AcelerometroScreen, MapScreen, SairScreen, QrCodeScreen, CameraScreen, ArquivoScreen} from "../screens";
import colors from "../styles/colors";
import PostNavigation from "./post.navigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.purple,
        tabBarActiveTintColor: colors.white,
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
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="camera" 
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
       <Tab.Screen
        name="acelerometro"
        component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="car" 
            size={24} color={colors.white} />
          ),
        }}
      />
        <Tab.Screen
        name="Magnetometro"
        component={MagnetoScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="magnet" 
            size={24} color={colors.white} />
          ),
        }}
      />
       <Tab.Screen
        name="Gyroscopio"
        component={GyroscopioScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="nuclear" 
            size={24} color={colors.white} />
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
    </Tab.Navigator>
    
  );
}
