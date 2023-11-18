import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import MyText from "./MyText";
function MyButton({ title, style, onPress }) {
  return (
    <View style={[style]}>
      <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
        <MyText style={styles.textStyle}>{title}</MyText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    backgroundColor: "#ff0036",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 55,
    alignSelf: "center",
    width: 100,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
export default MyButton;
