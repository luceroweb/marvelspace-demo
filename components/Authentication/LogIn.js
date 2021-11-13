import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../Layout";

export default function LogIn() {
	
	return (
		<Layout>

				<View>
					<Text name="SignUpPage">Sign Up</Text>
					<Text style={styles.text}>
						Login
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