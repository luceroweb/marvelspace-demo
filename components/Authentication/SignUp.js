import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../Layout";

export default function SignUpPage() {
	return (
		<Layout>

      <View>
        <Text style={styles.text}>
          Sign Up
        </Text>
      </View>

		</Layout>
	);
}

const styles = StyleSheet.create({
	text: {
		margin: 5,
		fontSize: 14,
	},
});