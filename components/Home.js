import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeLoggedIn from './ThemeLoggedIn';

function Home({ navigation }) {
	return (
		<ThemeLoggedIn navigation={navigation}>

      <View style={styles.body}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>

    </ThemeLoggedIn>
	);
}

const styles = StyleSheet.create({
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

export default Home;
