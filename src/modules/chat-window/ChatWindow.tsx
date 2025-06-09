"use client";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

import {
  ChatInput, MessagesList
} from "@components";

// Define message type
type ChatMessage = {
  sender: string;
  content: string;
  timestamp?: string;
};

const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<never>(null);
  const username = "User"; // This should come from your auth context or state
  
  useEffect(() => {
    const socket = new SockJS("http://192.168.3.167:8080/ws");
    const client = Stomp.over(socket);
    
    client.connect({}, () => {
      client.subscribe("/topic/public", (message) => {
        const newMessage = JSON.parse(message.body);
        
        setMessages(prev => [...prev, newMessage]);
      });
    });
    
    setStompClient(client);
    
    return () => {
      if (client && client.connected) {
        client.disconnect();
      }
    };
  }, []);
  
  const sendMessage = (content: string) => {
    if (stompClient && content.trim() !== "") {
      const chatMessage = {
        sender: username,
        content: content,
        timestamp: new Date().toISOString()
      };
      
      // @ts-ignore: Property send does not exist on type never
      stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
    }
  };
  
  return (
    <div className="flex flex-col h-full p-4 gap-4">
      <div className="flex-1 overflow-y-auto">
        <MessagesList messages={messages}/>
      </div>
      <ChatInput onSendMessage={sendMessage}/>
    </div>
  );
}

export { ChatWindow };
