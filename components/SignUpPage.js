import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ThemeLoggedOut from './ThemeLoggedOut';

function SignUpPage({ navigation }) {
	return (
		<ThemeLoggedOut navigation={navigation}>

      <View style={styles.body}>
        <Text style={styles.text}>
          Signup page
        </Text>
      </View>

    </ThemeLoggedOut>
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
		fontSize: "1.5em",
		fontWeight: 100,
		fontFamily: "Serif",
	},
});

export default SignUpPage;
