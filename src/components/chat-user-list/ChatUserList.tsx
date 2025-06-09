'use client';

import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client, Stomp } from "@stomp/stompjs";

import { ChatUser } from "@components";

type UserStatus = "active" | "away" | "inactive";

type User = {
  id: number;
  name: string;
  status?: UserStatus;
}

const ChatUserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  
  useEffect(() => {
    // Connect to WebSocket
    const socket = new SockJS("http://localhost:8080/ws");
    const client = Stomp.over(socket);
    
    client.connect({}, () => {
      // Subscribe to user status updates
      client.subscribe("/topic/users", (message) => {
        const updatedUsers = JSON.parse(message.body);
        setUsers(updatedUsers);
      });
      
      // Get initial users list
      client.send("/app/users.get", {}, "");
    });
    
    setStompClient(client);
    
    return () => {
      if (client && client.connected) {
        client.disconnect();
      }
    };
  }, []);
  
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-sm font-semibold mb-2">Active chatters</h2>
      <ul
        className="flex-1 border border-gray-300 rounded-lg p-1 flex flex-col gap-2 bg-white shadow-sm overflow-y-scroll -webkit-overflow-scrolling-touch"
      >
        {
          users?.length ? users.map(user =>
            <ChatUser key={user.id} user={user}/>
          ) : <li className="flex justify-center items-center h-full text-gray-400">No active users</li>
        }
      </ul>
    </div>
  );
};

export default ChatUserList;
export { ChatUserList };
