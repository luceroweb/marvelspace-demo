import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
	return (
    <View style={styles.footer}>

      <View>
        <Text style={styles.footerText}>
          Brought to you by Team Black Panther.
        </Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.footerText}>About</Text>

        <Text style={styles.footerText}>Rule</Text>

        <Text style={styles.footerText}>Contact</Text>

        <Text style={styles.footerText}>Terms</Text>
      </View>

      <View>
        <Text style={styles.footerText}>
          ©2021 MarvelSpace.All Rights Reserved.
        </Text>
      </View>

    </View>
	);
}

const styles = StyleSheet.create({
	footer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#151515",
	},
	menu: {
    flex: 1,
    flexDirection: "row",
	},
  footerText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
    paddingRight: 10,
  }
});