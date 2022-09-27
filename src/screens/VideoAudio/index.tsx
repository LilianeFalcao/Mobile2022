import * as React from 'react';
import { View } from 'react-native';
import { Video, AVPlaybackStatus, Audio } from 'expo-av';
import styles from './styles';
import Button from "../../components/Button"
import { useRef, useEffect, useState } from "react"

export default function App() {

  const video = useRef(null);
  const [status, setStatus] = useState({} as AVPlaybackStatus);

  const [recording, setRecording] = useState<AVPlaybackStatus>();
  const [sound, setSound] = useState();
  const [soundUri, setSoundUri] = useState(null);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: soundUri });
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setSoundUri(uri)
    console.log('Recording stopped and stored at', uri);
  }


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          type='cinza'
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ?
              video.current.pauseAsync() :
              video.current.playAsync()
          }
        />
      </View>
      <View style={styles.buttons}>
        <Button
          type='orange'
          title={recording ? 'Stop Recording' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}
        />
      </View>
      <View style={styles.buttons}>
        {soundUri && (
          <Button
            type='orange'
            title={'Play Sound'}
            onPress={playSound}
          />
        )}
      </View>
    </View>
  );
}
