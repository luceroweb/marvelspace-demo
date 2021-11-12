import React, { Children } from 'react';
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, navigation }) {
  
  return(
    <SafeAreaView style={styles.container}>

      <Header navigation={navigation} style={styles.shrink} />
      
      <ScrollView style={styles.main}>
        {children}
      </ScrollView>

      <Footer navigation={navigation} style={styles.shrink} />

      <StatusBar backgroundColor="#393939" />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    // primary: "#ec1d24",
  },
  main: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    padding: 10,
  },
  shrink: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
    padding: 10,
  },
});