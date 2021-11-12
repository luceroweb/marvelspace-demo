import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { posts, users } from "./components/WPAPI";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";

export default function App() {
	posts();
	users();
	return (
    <SafeAreaView>
      <View style={styles.container}>
        
        <Home />
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
	},
});
