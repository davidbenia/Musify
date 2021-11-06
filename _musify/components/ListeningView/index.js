import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "./styles";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import testByFile from "../AuddAPI";

let recording = new Audio.Recording();
const ListeningView = ({ navigation }) => {
  const startRecord = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    let aud_file = await getFile(uri);
    let data = await getMusicData(aud_file);
    navigation.navigate("Result", { result: data });
  };

  async function getFile(uri) {
    try {
      const aud_file = await FileSystem.readAsStringAsync(uri, {
        encoding: "base64",
      });

      return aud_file;
    } catch (error) {
      console.error(error);
    }
  }

  async function getMusicData(file) {
    let result = await testByFile(file);
    return result;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/ResultBackground.png")}
      />
      <Button title={"start"} onPress={startRecord} />
      <Button title={"stop"} onPress={stopRecording} />
      <Text style={styles.text}>Listening...</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ListeningView;
