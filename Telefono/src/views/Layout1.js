import React from "react";
import { View, Text } from "react-native";
import styles from "./Layout1.styles";

const Layout1 = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container1}></View>
      <View style={styles.hContainer}>
        <View style={styles.containerGrow3}>
          <Text>3</Text>
        </View>
        <View style={styles.containerGrow1}>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.container1}></View>
    </View>
  );
};

export default Layout1;
