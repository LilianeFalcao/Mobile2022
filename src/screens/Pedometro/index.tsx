import React, { useState, useEffect } from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "./styles";
import { Subscription } from "expo-media-library";
import { Pedometer } from 'expo-sensors'

export default function Pedometro(){
    const [currentStepCount, setCurrentStepCount] = useState(0)
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
    const [pastStepCount, setPastStepCount] = useState(0)
    let [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        async function permission() {
            console.log(await Pedometer.requestPermissionsAsync())
            console.log(await Pedometer.getPermissionsAsync())
        }
        permission()
        _subscribe();
        return () => _unsuscribe();
    }, []);

    const _subscribe  = () => {
        subscription = Pedometer.watchStepCount(result =>{
            setCurrentStepCount(result.steps)
        });

        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
            },
            error => {
                setIsPedometerAvailable('could not get isPedometerAvailable' + error);
            }
        );

        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);

        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setPastStepCount(result.steps);
            },
            error => {
                console.log('could not get stepCount' + error);
            }
        );
    };

    const _unsuscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    return(
        <View style={styles.container}>
            <Text> Pedometer.isAvailableAsync():{isPedometerAvailable}</Text>
            <Text> steps taken in the last 24 hours :{pastStepCount}</Text>
            <Text> Walk! And Watch this go up :{currentStepCount}</Text>
        </View>
    )
}