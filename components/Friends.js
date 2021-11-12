import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";

function Friends({ navigation }) {
	return (
		<Layout navigation={navigation}>

				<View >
					<Text style={styles.text}>
						Friends
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

export default Friends;