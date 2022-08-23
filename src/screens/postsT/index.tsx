import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card, Loading } from "../../components";
import data from "../../services/data_antigo";
import { PostTypes } from "../../types/Screen.types";
import { apiMensagem } from "../../services/data";
import { IMensagemState } from "../../interfaces/Mensagem.interface";

export default function Post({ navigation }: PostTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [mensagem, setMensagem] = useState<IMensagemState[]>([]);
  function handlePost() {
    navigation.navigate("EnviarMensagem");
  }

  useEffect(() => {
    async function loadMensagem() {
      const response = await apiMensagem.index();
      setMensagem(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadMensagem());
  }, []);

  const renderItem = ({ item }) => <Card data={item} />;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
          <ImageBackground source={require("../../assets/fundo.png")}
            style={styles.container}
          >
            <SafeAreaView style={styles.container}>
              <View style={styles.rowSearch}>
                <FontAwesome5 name="search" styles={styles.icon} />
                <TextInput placeholder="Pesquisar Post" />
              </View>
              {mensagem.length > 0 && (
                <FlatList
                  data={mensagem}
                  renderItem={renderItem}
                  keyExtractor={(item) => String(item.id)}
                />
              )}
              <TouchableOpacity style={styles.button} onPress={handlePost}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </ImageBackground>
        )}
    </>
  );
}