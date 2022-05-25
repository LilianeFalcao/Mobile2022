import React, {useState, useEffect} from "react";
import MapView, {Region, Marker} from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";
import {Text, View} from "react-native";


export default function App(){
    const [location, setLocation] = useState<null | Location.LocationObject>(
        null
    );
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);

    useEffect (() => {
        const handleLocation = async () =>{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted"){
                setErrorMsg("Permission to acess location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync();
            if (location){
                setLocation(location);
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                 ]);

                setMarker([
                    {
                        latitude: -21.551902,
                        longitude:-45.434683,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                ]);
            }
        }
        handleLocation();
    }, []);

    let text= "waiting..";
    if(errorMsg){
        text = errorMsg;
    }else if (location){
        text = JSON.stringify(location);
    }
    return(
        <View style={styles.container}>
            {!region && <Text style={styles.paragraph}>{text}</Text>}
            {region && (
                <MapView style={styles.map} region={region}>
                    { marker && marker.map((item, key) => (
                        <Marker key={key} coordinate={item}/>
                    ))
                    }</MapView>
            )}
        </View>
    )

}