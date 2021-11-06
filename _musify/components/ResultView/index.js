import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const ResultView = ({ navigation }) => {
  const result = navigation.getParam("result");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/ResultBackground.png")}
      />

      <View style={styles.dataContainer}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            width: 400,
            height: 400,
            position: "absolute",
            top: -520,
          }}
          onPress={() => alert("redirect wip")}
        >
          <Image style={styles.image} source={{ uri: result.uri }} />
        </TouchableOpacity>
        <View style={styles.songname}>
          <Text style={styles.nametxt}>
            {`${result.artistname} - ${result.songname}`}
          </Text>
          <TouchableOpacity onPress={() => alert("redirect wip")}>
            <Text style={styles.linktxt}>{result.songlink}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default ResultView;
