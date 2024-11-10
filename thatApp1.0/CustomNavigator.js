import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function CustomNavigator() {
  const navigation = useNavigation();
  const currentRoute =
    useNavigationState((state) => state?.routes[state?.index]?.name) ??
    "allChats";

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={currentRoute === "allChats" ? styles.currentTab : styles.tab}
        onPress={() => navigation.navigate("allChats", { replace: true })}
      >
        <Text style={styles.tabText}>Chats</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={currentRoute === "settings" ? styles.currentTab : styles.tab}
        onPress={() => navigation.navigate("settings", { replace: true })}
      >
        <Text style={styles.tabText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#a83a03",
    height: 30,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  currentTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "white",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
