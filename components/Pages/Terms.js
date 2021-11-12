import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../Layout";

export default function Terms({ navigation }) {
	return (
		<Layout navigation={navigation}>

				<View>
					<Text style={styles.text}>
						Terms
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