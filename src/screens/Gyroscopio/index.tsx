import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Subscription } from "expo-media-library";
import { Gyroscope} from 'expo-sensors'

export default function Gyroscopio(){
    const [data, setData] = useState({
        x:0,
        y:0,
        z:0,
    });
    const [ subscription, setSubscription ]= useState<Subscription | null>(null);

    const _slow = () => {
        Gyroscope.setUpdateInterval(1000);
    };

    const _fast = () => {
        Gyroscope.setUpdateInterval(16);
    };

    const _subscribe  = () => {
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
                setData(gyroscopeData);
            })
        );
    };

    const _unsuscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        _subscribe();
        return () => _unsuscribe();
    }, []);

    const { x, y, z } = data;

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.text}> Gyroscope: </Text>
                <Text style={styles.text}>
                    x: {round(x)} y: {round(y)} z: {round(z)}
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

function round (n:number){
    if (!n) {
        return 0;
    }
    return Math.floor(n * 100) /100;
}