"use client";

import { useEffect, useRef, useState } from "react";
import { MessagesListItem } from "@components";

type ChatMessage = {
  sender: string;
  content: string;
  timestamp?: string;
};

type MessagesListProps = {
  messages: ChatMessage[];
};

const MessagesList = ({messages = []}: MessagesListProps) => {
  const currentUser = "User";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [newMessageAlert, setNewMessageAlert] = useState(false);
  const prevMessagesLengthRef = useRef(messages.length);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    setNewMessageAlert(false);
  };
  
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    
    // Check if scrolled to bottom (with small threshold)
    const atBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 20;
    setIsAtBottom(atBottom);
    
    // If scrolled to bottom, clear any new message alerts
    if (atBottom && newMessageAlert) {
      setNewMessageAlert(false);
    }
  };
  
  // Monitor for new messages
  useEffect(() => {
    if (messages.length > prevMessagesLengthRef.current && !isAtBottom) {
      // New message arrived and user is not at bottom - show alert
      setNewMessageAlert(true);
    } else if (messages.length > prevMessagesLengthRef.current && isAtBottom) {
      // New message arrived and user is at bottom - auto scroll
      scrollToBottom();
    }
    
    prevMessagesLengthRef.current = messages.length;
  }, [messages, isAtBottom]);
  
  return (
    <div className="relative h-[calc(100vh-148px)]">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll scroll-m-0"
      >
        {messages.length > 0 ? (
          <>
            {messages.map((message, index) => (
              <MessagesListItem
                key={index}
                message={message.content}
                sender={message.sender}
                timestamp={message.timestamp || new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                isUserMessage={message.sender === currentUser}
              />
            ))}
            <div ref={messagesEndRef}/>
          </>
        ) : (
          <div className="flex justify-center items-center h-full text-gray-400">
            No messages yet
          </div>
        )}
      </div>
      
      {newMessageAlert && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-colors flex items-center"
        >
          Show New Messages
        </button>
      )}
    </div>
  );
};

export { MessagesList };
