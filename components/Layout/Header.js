import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../utils/globalStyles";

export default function Header({ navigation }) {

  const menuText = [
    globalStyles.bold,
    globalStyles.menuText,
    styles.headerText,
  ];
	
	return (
		<View style={styles.header}>

      <View style={[globalStyles.marvelRedBG, styles.headerTitle]}>
        <View>
          <Text style={[globalStyles.bold, globalStyles.whiteText]} onPress={() => navigation.navigate('Newsfeed')}>MARVELspace</Text>
          <Text style={globalStyles.whiteText} onPress={() => navigation.navigate('Newsfeed')}>a space for super friends</Text>
        </View>

        <View style={globalStyles.menu}>
          <Text style={menuText} onPress={() => navigation.navigate('LogIn')}>Login</Text>
          <Text style={menuText}>|</Text>
          <Text style={menuText} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </View>
      </View>

      <View style={[globalStyles.menu, globalStyles.darkGreyBG, styles.mainMenu]}>
        <Text style={menuText} onPress={() => navigation.navigate('Friends')}>Friends</Text>
        <Text style={menuText} onPress={() => navigation.navigate('Profile')}>Profile</Text>
        <Text style={menuText} onPress={() => navigation.navigate('Images')}>Images</Text>
        <Text style={menuText} onPress={() => navigation.navigate('Messages')}>Messages</Text>
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
	mainMenu: {
		backgroundColor: "skyblue",
		padding: 10,
	},
	headerText: {
		color: "white",
	},
});