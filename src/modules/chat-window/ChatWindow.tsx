"use client";

import {
  ChatInput, MessagesList
} from "@components";

const ChatWindow = () => {
  return (
    <div className="flex flex-col p-4 gap-4 justify-between relative">
      <MessagesList/>
      <ChatInput/>
    </div>
  );
}

export { ChatWindow };

