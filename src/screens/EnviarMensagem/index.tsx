import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Alert,
    Image,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { PostTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { apiMensagem, apiTopico } from "../../services/data";
import { ITopico, ITopicoServer, ITopicoState } from "../../interfaces/Topico.interface";
import * as MediaLibrary from "expo-media-library";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import * as ImagePicker from "expo-image-picker";
import Loading from "../../components/Loading";

export default function EnviarMensagem({ navigation }: PostTypes) {
    const [data, setData] = useState<IMensagem>();
    const [isLoading, setIsLoading] = useState(true);
    const [topico, setTopico] = useState<ITopicoState[]>([]);
    const [selectedTopico, setSelectedTopico] = useState([]);
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;

    const takePicture = async () => {
        if (!camera) return;
        const options = { quality: 0.5, base64: true };
        const photo = await camera.takePictureAsync(options);
        setData({ ...data, imagem: photo });
        setStartOver(true);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [3, 3],
            quality: 0.5,
        });
        if (!result.cancelled) {
            setData({ ...data, imagem: result });
        }
    };

    function handleVoltar() {
        navigation.navigate("Post");
    }
    function handleChange(item: IMensagem) {
        setData({ ...data, ...item });
    }

    async function handleSubmit() {
        try {
            setIsLoading(true);
            if (data?.titulo && data.message && selectedTopico && data.imagem) {
                const imageName = data.imagem.uri?.split("/").pop();
                const formData = new FormData();
                formData.append("imagem", data.imagem.base64);
                if (imageName) {
                    formData.append("file", imageName);
                }
                formData.append("titulo", data.titulo);
                formData.append("mensagem", data.message);
                selectedTopico.forEach((e) => {
                    formData.append("topico[]", e);
                });
                await apiMensagem.store(formData as IMensagem);
                navigation.navigate("Post");
            } else {
                Alert.alert("Preencha todos os campos!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IResponse;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        async function loadTopico() {
            const response = await apiTopico.index();
            const topicoServer = response.data.data.map((item: ITopicoServer) => ({
                id: item.id,
                name: item.topico,
            }));
            setTopico(topicoServer);
        }
        loadTopico();
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (<ImageBackground
                source={require("../../assets/fundo.png")}
                style={styles.container}
            >
                {startOver ? (
                    <KeyboardAvoidingView style={styles.containerForm}>
                        <TextInput
                            style={styles.input}
                            placeholder="Titulo"
                            onChangeText={(i) => handleChange({ titulo: i })}
                        />
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Mensagem"
                            onChangeText={(i) => handleChange({ message: i })}
                        />
                        <View style={styles.select}>
                            
                        </View>
                    </KeyboardAvoidingView>
                )}
                )}
        )
}