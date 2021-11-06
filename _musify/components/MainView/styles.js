import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ffdd",
    alignItems: "center",
    justifyContent: "center",
  },
  micContainer: {
    position: "relative",
    top: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  fileContainer: {
    position: "relative",
    bottom: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "relative",
    top: "auto",
    width: 200,
    height: 200,
  },
  micTxt: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff8787",
    marginBottom: 20,
  },
  micButton: {
    width: 200,
    height: 200,
  },
  micImage: {
    width: "100%",
    height: "100%",
  },
  fileTxt: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  fileButton: {
    padding: 20,
    width: "60%",
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  backgroundImage: {
    position: "absolute",
    top: "auto",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default styles;
