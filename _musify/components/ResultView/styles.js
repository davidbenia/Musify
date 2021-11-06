import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ffdd",
    alignItems: "center",
    justifyContent: "center",
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  songname: {
    position: "absolute",
    bottom: -50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 30,
  },
  nametxt: { fontSize: 40, fontWeight: "bold", color: "white" },
  linktxt: { fontSize: 24, fontWeight: "bold", color: "#6070ff" },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 750,
    height: 700,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default styles;
