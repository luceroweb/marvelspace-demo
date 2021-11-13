import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
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

      <View style={globalStyles.narrowForm}>

        <Text style={[globalStyles.text, globalStyles.bold]}>Password Reset</Text>

        <TextInput
          style={globalStyles.textInput}
          className="textInput"
          placeholder="Username"
          value={username}
          onChangeText={onChangeUsername}
        ></TextInput>

        <TextInput
          style={globalStyles.textInput}
          className="textInput"
          placeholder="New Password"
          value={newPassword}
          onChangeText={onChangeNewPassword}
        ></TextInput>

        <TextInput
          style={globalStyles.textInput}
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