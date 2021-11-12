import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function PasswordReset() {
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
    <View styles={styles.container}>

      <Text>Password Reset</Text>

      <Text>Create Your New Password:</Text>
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

      <View style={styles.buttonWrapper}>
        <Button title="Submit" onPress={checkValidity} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 24,
    justifyContent: "flex-start",
    textAlign: "center",
    color: "cadetblue",
    backgroundColor: "aliceblue",
  },
  textInput: {
    textAlign: "center",
    margin: ".5rem",
    borderColor: "cadetblue",
    borderWidth: 2,
    borderStyle: "solid",
    padding: ".3rem",
    backgroundColor: "aliceblue",
    borderRadius: 5,
  },
  buttonWrapper: {
    padding: "0",
    margin: "0",
    borderRadius: 5,
    width: "6rem",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: "2rem",
    padding: "4rem",
    alignSelf: "center",
  },
});