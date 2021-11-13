import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../utils/globalStyles";

export default function Footer({ navigation }) {

  const menuText = [
    globalStyles.text,
    globalStyles.menuText,
    globalStyles.bold,
    globalStyles.whiteText,
  ]

	return (
    <View style={[globalStyles.darkGreyBG, styles.footer]}>

      <View style={globalStyles.menu}>
        <Text style={menuText} onPress={() => navigation.navigate('About')}>About</Text>

        <Text style={menuText} onPress={() => navigation.navigate('Rules')}>Rules</Text>

        <Text style={menuText} onPress={() => navigation.navigate('Contact')}>Contact</Text>

        <Text style={menuText} onPress={() => navigation.navigate('Terms')}>Terms</Text>
      </View>

      <View>
        <Text style={[globalStyles.bold, globalStyles.menuText, globalStyles.darkGreyText]}>
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
	},
});