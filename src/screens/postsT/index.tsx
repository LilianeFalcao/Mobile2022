import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import data from "../../services/data_antigo";
import Card from "../../components/cardTw";

export default function Post() {
  const renderItem = ({ item }: any) => <Card data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowSearch} >
        <FontAwesome5 name="search" size={24} color="black" />
        <TextInput placeholder="postar" style={styles.input} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
}