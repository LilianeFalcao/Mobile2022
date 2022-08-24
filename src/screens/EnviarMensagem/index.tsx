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
import { apiMensagem , apiTopico } from "../../services/data";
import { ITopico , ITopicoServer } from "../../interfaces/Topico.interface";
import * as MediaLibrary from "expo-media-library";

export default function App() {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    }, []);
    const __closeCamera = () => {
        setStartOver(true);
    };
    const __takePicture = async () => {
        if (!camera) return;
        const photo = await camera.takePictureAsync();
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
    };
    const __savePhoto = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync()
        if (permission.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri)
                MediaLibrary.createAlbumAsync("Images", asset, false)
                    .then(() => {
                        Alert.alert("Imagem salva com sucesso!")
                    })
                    .catch(() => {
                        Alert.alert("Erro ao salvar a imagem!")
                    })
            } catch (error) {
                Alert.alert(String(error))
            }
        } else {
            Alert.alert("Sem permissão para acessar os arquivos")
        }
    };
    return (

    );
}