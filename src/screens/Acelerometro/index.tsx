import React, { useState, useEffect } from "react";
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import styles from "./styles";
import { Subscription } from "expo-media-library";
import { Accelerometer, ThreeAxisMeasurement} from 'expo-sensors'

export default function Acelerometro(){
    const [data, setData] = useState<ThreeAxisMeasurement>({
        x:0,
        y:0,
        z:0,
    });
    const [ subscription, setSubscription ]= useState<Subscription | null>(null);

    const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };

    const _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    const _subscribe  = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
            })
        );
    };

    const _unsuscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        async function permission(){
            await Accelerometer.requestPermissionsAsync()
        }
        permission()
        _subscribe();
        return () => _unsuscribe();
    }, []);
    const { x, y, z } = data;
    return(
        <>
            <Image  source={require('../../assets/estrada.gif')} style={styles.fundo}/>
            <Image  source={require('../../assets/carro.png')} style={{
                width: 70,
                height: 50,
                flex: 1,
                position: 'absolute',
                top: 150,
                left:(Dimensions.get('window').width * Math.pow(data.x, 2))
            }}/>
            <View style={styles.container}>
                <Text style={styles.text}>
                x:{Math.pow(x,2).toFixed(2)}
                y:{y.toFixed(2)},
                z:{z.toFixed(2)},
                dim: {Dimensions.get('window').width.toFixed(2)}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={subscription ? _unsuscribe : _subscribe } style={styles.button}>
                        <Text>{subscription ? 'on' : 'off' }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_slow } style={[styles.button , styles.middleButton]}>
                        <Text>slow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_fast } style={styles.button}>
                        <Text>fast</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}