import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

function MyTextInput({ placeholder, ...props }) {
  return (
    <View style={styles.con}>
      <TextInput
        {...props}
        style={styles.textInput}
        placeholder={placeholder}
        color="gray"
        fontSize={16}
      />
      <View style={styles.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
    height: 50,
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  textInput: {
    width: "100%",
  },
  border: {
    width: "100%",
    backgroundColor: "gray",
    height: 1,
    alignSelf: "center",
  },
});
export default MyTextInput;
