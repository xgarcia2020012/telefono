/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import Layout1 from "./src/views/Layout1";
import styles from "./src/views/Layout1.styles";

const App = () => {
  const [nombre, setNombre] = useState("Xavier Garcia");
  return (
    <SafeAreaView>
      <View style={styles.CenterV}>
        <Text style={styles.StyleT}>SnapShot</Text>
      </View>
      <Layout1 nombre={nombre} />
    </SafeAreaView>
  );
};

export default App;
