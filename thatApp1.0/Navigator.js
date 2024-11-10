import { createStackNavigator } from "@react-navigation/stack";
import AllChats from "./screens/all-chats";
import Settings from "./screens/settings";


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="allChats"
        component={AllChats}
        options={() => ({
          title: "Chats",
        })}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}
