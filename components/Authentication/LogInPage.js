import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderLogPage from "../layout/HeaderLogPage";
import Footer from "../layout/Footer";

function LogInPage() {
	
	return (
		<View style={styles.container}>
			<ScrollView>
        <HeaderLogPage />

				<View style={styles.body}>
					<Text name="SignUpPage">Sign Up</Text>
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
	},
	body: {
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

export default LogInPage;
