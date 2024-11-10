import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import MyStack from "./Navigator";
import { NavigationContainer } from "@react-navigation/native";
import CustomNavigator from "./CustomNavigator";
import "./global.css";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>ThatApp</Text>
        </View>
        <CustomNavigator />
        <MyStack />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a83a03",
    flex: 1,
    paddingTop: 22,
  },
  headingText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  innerContainer: {
    padding: 10,
  },
});
