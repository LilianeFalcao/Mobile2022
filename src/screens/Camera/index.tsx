import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import styles from "./styles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function App(){
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [captured, setCapturedImage] = useState<any>(null)
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async ()=> {
            const{ status } = await Camera.requestCameraPermissionsAsync();
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
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted){
            try{
                const asset = await MediaLibrary.createAssetAsync(capturedImage.uri);
                MediaLibrary.deleteAlbumsAsync("Images", asset, false)
                    .then(() => {
                        Alert.alert("imagem salva com sucesso");
                    })
                    .catch(() => {
                        Alert.alert("Erro ao salvar");
                    })
            }catch(error){
                Alert.alert("sem permissões para acessar os arquivos");
            }
        }
    };
    return(
        <View style={styles.container}>
            {startOver ? (
                <View style={styles.startOver}>
                <TouchableOpacity
                    onPress={() => setStartOver(false)}
                    style={styles.buttonStartOver}
                >
                    <Text style={styles.textStartOver}> Tirar uma foto </Text>
                </TouchableOpacity>
                </View>
            ):(
                <View style={styles.container}>
                    {previewVisible ? (
                        <ImageBackground 
                            source={{uri: capturedImage && setCapturedImage.uri}}
                            style={styles.container}
                        >
                        <View style={styles.collumnPreviewVisible}>
                            <View style={styles.rowPreviewVisible}>
                                <TouchableOpacity
                                    onPress={() => setPreviewVisible(false)}
                                    style={styles.buttonPreviewVisible}
                                >
                                    <Text style={styles.textPreviewVisible}> salva a foto  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </ImageBackground>
                    ):(
                       <Camera 
                        style={styles.container}
                        type={type}
                        ref={(r) => {
                            if (r) camera = r;
                        }}
                       >
                            <View style={styles.buttonTop}>
                                <View style={styles.buttonTopPosition}>
                                    <TouchableOpacity onṔress={__closeCamera}>
                                        <Text style={styles.textClose}>X</Text>
                                    </TouchableOpacity>
                                </View> 
                                <TouchableOpacity 
                                style={styles.textFlip}>
                                        <Text style={styles.textClose}>X</Text>
                                    </TouchableOpacity>
                            </View>
                    )}
            )}
        </View>
    )
};