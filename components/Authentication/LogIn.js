import React from "react";
import { Text, View } from "react-native";
import globalStyles from "../utils/globalStyles";
import Layout from "../Layout";

export default function LogIn({ navigation }) {
	
	return (
		<Layout>

				<View>
					<Text style={globalStyles.text}>
						Login
					</Text>

          <View style={globalStyles.menu}>
            <Text style={globalStyles.menuText} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
            <Text style={globalStyles.menuText}>|</Text>
            <Text style={globalStyles.menuText} onPress={() => navigation.navigate('ResetPassword')}>Reset Password</Text>
          </View>

				</View>
        
		</Layout>
	);
}