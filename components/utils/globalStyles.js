import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	text: {
		marginBottom: 5,
		fontSize: 14,
	},
  bold: {
		fontWeight: "bold",
  },
	menu: {
    display: "flex",
		flexDirection: "row",
	},
	menuText: {
		fontSize: 14,
    paddingRight: 10,
	},
  narrowForm: {
    width: "100%",
    maxWidth: 300,
  },
  textInput: {
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
    borderRadius: 2,
  },
});

export default styles;