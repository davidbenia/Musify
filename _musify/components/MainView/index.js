import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import styles from "./styles";
import testByFile from "../AuddAPI";

const MainView = ({ navigation }) => {
  async function getFile() {
    try {
      const pickerData = await DocumentPicker.getDocumentAsync();
      const aud_uri = await pickerData.uri;
      const aud_file = await FileSystem.readAsStringAsync(aud_uri, {
        encoding: "base64",
      });

      return aud_file;
    } catch (error) {
      console.error(error);
    }
  }

  const listenHandler = () => {
    navigation.navigate("Listen");
  };

  const resultHandler = async () => {
    let aud_file = await getFile();
    let data = await testByFile(aud_file);
    navigation.navigate("Result", { result: data });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/MainBackground.png")}
      />

      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />

      <View style={styles.micContainer}>
        <Text style={styles.micTxt}>Use Microphone Input</Text>
        <TouchableOpacity style={styles.micButton} onPress={listenHandler}>
          <Image
            style={styles.micImage}
            source={require("../../assets/images/Microphone.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fileContainer}>
        <Text style={styles.fileTxt}>Or Upload An .MP3 Audio File</Text>
        <TouchableOpacity style={styles.fileButton} onPress={resultHandler}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Choose A File
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default MainView;
