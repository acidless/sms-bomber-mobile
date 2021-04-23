import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Bomber from "r-sms-bomber";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function onEnterNumber(text: string) {
    if (/^\d{0,11}$/.test(text)) {
      setPhoneNumber(text);
    }
  }

  function startSpam() {
    new Bomber(phoneNumber).spam();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter a phone number for spam!</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={onEnterNumber}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button color="#fa5757" title="Start" onPress={startSpam} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 200,
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: "#fa5757",
    borderRadius: 5,
    marginBottom: 10,
  },
});
