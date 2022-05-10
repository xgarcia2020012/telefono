import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {},
  container1: {
    backgroundColor: "red",
    height: 50,
    marginBottom:10,
  },
  hContainer: {
    flexDirection: "row",
    marginBottom:10,
  },
  containerGrow3: {
    height: 100,
    flexGrow: 3,
    backgroundColor: "green",
    marginRight: 10,
  },
  containerGrow1: {
    height: 100,
    flexGrow: 2,
    backgroundColor: "black",
  },
});

export default styles;
