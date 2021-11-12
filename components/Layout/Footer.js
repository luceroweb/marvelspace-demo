import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
	return (
    <View style={styles.footer}>

      <View style={styles.menu}>
        <Text style={styles.footerText}>About</Text>

        <Text style={styles.footerText}>Rules</Text>

        <Text style={styles.footerText}>Contact</Text>

        <Text style={styles.footerText}>Terms</Text>
      </View>

      <View>
        <Text style={styles.copyright}>
          ©2021 MarvelSpace.All Rights Reserved.
        </Text>
      </View>

    </View>
	);
}

const styles = StyleSheet.create({
	footer: {
    display: "flex",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    padding: 10,
    backgroundColor: "#151515",
	},
	menu: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    flexDirection: "row",
	},
  footerText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
    paddingRight: 10,
    paddingBottom: 5,
  },
  copyright: {
		color: "#444",
		fontWeight: "bold",
		fontSize: 14,
    paddingRight: 10,
  },
});