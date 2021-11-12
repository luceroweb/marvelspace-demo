import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function Images() {
	return (
		<View style={styles.container}>
			<ScrollView>
        <Header />

				<View style={styles.body}>
					<Text style={styles.text}>
						Open up App.js to start working on your app!
					</Text>
				</View>

        <Footer />
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 14,
	},
});

export default Images;
