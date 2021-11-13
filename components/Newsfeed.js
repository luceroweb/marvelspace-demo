import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";

export default function Newsfeed({ navigation }) {
	return (
		<Layout navigation={navigation}>

      <View>
        <Text style={styles.text}>
          Newsfeed
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