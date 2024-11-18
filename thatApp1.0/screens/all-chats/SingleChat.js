import { Text, View, Image } from "react-native";

import sent from "../../assets/sent.png";
import delivered from "../../assets/delivered.png";
import seen from "../../assets/seen.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const statusChecks = {
  sent: sent,
  delivered: delivered,
  seen: seen,
};

export default function SingleChat({
  phoneNumber,
  lastMessage,
  lastMessageTime,
  profilePic,
  sender,
  sentStatus,
  unreadCount,
}) {
  return (
    <TouchableOpacity onPress={() => console.log("CHAT PRESSED")}>
      <View className="flex flex-row items-center h-[90px] border-b border-gray-200 gap-6 px-3">
        <Image
          source={{ uri: profilePic }}
          className="rounded-full w-[65px] h-[65px]"
        />
        <View className="flex flex-row justify-between items-center flex-1">
          <View className="flex flex-col gap-1.5">
            <Text className="text-xl font-bold">{phoneNumber}</Text>
            <View className="flex flex-row items-center gap-1.5">
              {sender === "self" && (
                <Image
                  source={statusChecks[sentStatus]}
                  style={{ width: 10, height: 10 }}
                />
              )}
              <Text className="text-lg">{lastMessage}</Text>
            </View>
          </View>
          <View className="flex flex-col items-end gap-2">
            <Text className="text-lg">{lastMessageTime}</Text>
            {sender !== "self" && unreadCount > 0 && (
              <UnreadCount count={unreadCount} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function UnreadCount({ count }) {
  return (
    <View className="rounded-full bg-[#a83a03] w-6 h-6 flex items-center justify-center">
      <Text className="text-white text-md">{count}</Text>
    </View>
  );
}
