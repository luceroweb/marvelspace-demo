import React, { Children } from 'react';
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  
  return(
    <SafeAreaView style={styles.container}>

      <Header style={styles.shrink} />
      
      <ScrollView style={styles.main}>
        {children}
      </ScrollView>

      <Footer style={styles.shrink} />

      <StatusBar backgroundColor="#393939" />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    // primary: "#ec1d24",
  },
  main: {
    flexGrow: 1,
    padding: 10,
  },
});