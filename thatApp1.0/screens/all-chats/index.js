import { Text, View } from "react-native";
import chats from "../../chats.json";
import SingleChat from "./SingleChat";

export default function AllChats() {
  return (
    <View>
      {chats.recentChats.map((chat) => (
        <SingleChat
          phoneNumber={chat.phone_number}
          lastMessage={chat.last_message}
          lastMessageTime={chat.last_message_time}
          profilePic={chat.profile_pic}
          sender={chat.sender}
          sentStatus={chat.sent_status}
          unreadCount={chat.unread_count}
        />
      ))}
    </View>
  );
}
