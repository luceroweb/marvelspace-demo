import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	
	return (
		<View style={styles.header}>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>MARVELspace</Text>
        <Text style={styles.headerText}>a space for super friends</Text>
      </View>

      <View style={styles.headerBar}>  
        <Text style={styles.headerText}>Newsfeed</Text>
        <Text style={styles.headerText}>Friends</Text>
        <Text style={styles.headerText} onPress={() => navigation.navigate('Profile')}>Profile</Text>
        <Text style={styles.headerText}>Images</Text>
        <Text style={styles.headerText}>Messages</Text>
      </View>
				
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
		flexDirection: "column",
		backgroundColor: "#0075ff",
	},
	headerTitle: {
		backgroundColor: "#293ef1",
		padding: 10,
	},
	headerBar: {
		flexDirection: "row",
		backgroundColor: "skyblue",
		width: "100%",
		bottom: 0,
		padding: 10,
	},
	headerText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
    paddingRight: 10,
	},
});