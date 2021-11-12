import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Layout from "./Layout";

export default function Newsfeed() {
	return (
		<Layout>

      <View>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>

		</Layout>
	);
}
const styles = StyleSheet.create({
	text: {
		marginTop: 5,
    marginBottom: 5,
		fontSize: 14,
	},
});