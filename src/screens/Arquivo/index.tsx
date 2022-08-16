import React, { useState, useEffect } from "react";
import {
    View,
    Platform,
    Text,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export default function ImagePickerExample() {
    const [image, setImage] = useState<null | string>(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    Alert.alert("Você precisa dar permissão para acessar as imagens")
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleCloseFile = () => {
        setImage(null);
    };

    return (
        <View style={styles.container} >
            {image ? (
                <ImageBackground source={{ uri: image }} style={styles.container}>
                    <View style={styles.buttonTopPosition}>
                        <TouchableOpacity onPress={handleCloseFile}>
                            <Text style={styles.textClose}> X </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.collumnPreviewVisible}>
                        <View>
                            <TouchableOpacity
                                onPress={() => pickImage()}
                                style={styles.buttonPreviewVisible}
                            >
                                <Text style={styles.textPreviewVisible}> Novo Arquivo </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            ) : (
                    <View style={styles.startOver}>
                        <TouchableOpacity
                            onPress={() => pickImage()}
                            style={styles.buttonStartOver}
                        >
                            <Text style={styles.textStartOver}> Abrir Arquivo </Text>
                        </TouchableOpacity>
                    </View>
                )}
        </View>
    );
}
