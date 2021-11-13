import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Layout from "../Layout";
import globalStyles from "../utils/globalStyles";

export default function PasswordReset({ navigation }) {
  const [username, onChangeUsername] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [confirmNewPassword, onChangeConfirmNewPassword] = useState("");

  function checkValidity() {
    if (confirmNewPassword !== newPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("Password will be reset");
    }
  }

  return (
    <Layout navigation={navigation}>

      <View style={styles.form}>

        <Text style={[globalStyles.text, globalStyles.bold]}>Password Reset</Text>

        <TextInput
          style={styles.textInput}
          className="textInput"
          placeholder="Username"
          value={username}
          onChangeText={onChangeUsername}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          className="textInput"
          placeholder="New Password"
          value={newPassword}
          onChangeText={onChangeNewPassword}
        ></TextInput>

        <TextInput
          style={styles.textInput}
          className="textInput"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChangeText={onChangeConfirmNewPassword}
          onSubmitEditing={checkValidity}
        ></TextInput>

        <Button title="Submit" onPress={checkValidity} />

      </View>

    </Layout>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    maxWidth: 300,
  },
  textInput: {
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
  },
});