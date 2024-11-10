import { Text, View, Image } from "react-native";

import sent from "../../assets/sent.png";
import delivered from "../../assets/delivered.png";
import seen from "../../assets/seen.png";

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
    <View className="flex flex-row justify-between items-center">
      <View>
        <Image
          source={{ uri: profilePic }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View>
        <Text>{phoneNumber}</Text>
        {sender === "self" && (
          <Image
            source={statusChecks[sentStatus]}
            style={{ width: 10, height: 10 }}
          />
        )}
        <Text>{lastMessage}</Text>
      </View>
      <View>
        <Text>{lastMessageTime}</Text>
        {sender !== "self" && unreadCount > 0 && <Text>{unreadCount}</Text>}
      </View>
    </View>
  );
}
