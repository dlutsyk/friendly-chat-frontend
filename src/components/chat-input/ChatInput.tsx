"use client";

import { useState } from "react";
import { IoSend } from "react-icons/io5";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({onSendMessage}: ChatInputProps) => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 justify-around fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-t-gray-200 shadow-md">
      <input
        className="flex-grow px-2 border rounded border-gray-300"
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        <IoSend/>
      </button>
    </form>
  );
};

export { ChatInput };
