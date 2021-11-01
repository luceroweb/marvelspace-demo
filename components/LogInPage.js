import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeLoggedOut from './ThemeLoggedOut';

function LogInPage({ navigation }) {
	
	return (
		<ThemeLoggedOut navigation={navigation}>

      <View style={styles.body}>
        <Text name="SignUpPage" onPress={() => navigation.navigate('SignUpPage')}>Sign Up</Text>
        <Text style={styles.text}>
          Login page content goes here
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

export default LogInPage;
