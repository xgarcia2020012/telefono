import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {},
  container1: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  hContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  buscar: {
    height: 25,
    width: 250,
    flexGrow: 1,
    backgroundColor: "#D7D7D7",
    margin: 25,
  },
  botones: {
    height: 15,
    width: 75,
    backgroundColor: "#00304E",
  },
  StyleT: {
    fontFamily: "serif",
    fontSize: 40,
    paddingTop: 40,
  },
  CenterV: {
    justifyContent: "center",
    alignItems: "center",
  },
  StyleS: {
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    fontFamily: "serif",
  },
  textS: {
    textAlign: "center",
    fontSize: 10,
    color: "#FFFFFF",
  },
  imagenS: {
    width: 90,
    height: 60,
    marginTop: 10,
  },
});

export default styles;
