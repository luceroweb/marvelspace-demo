import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";

export default function Messages({ navigation }) {
	return (
		<Layout navigation={navigation}>

				<View >
					<Text style={styles.text}>
						Messages
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