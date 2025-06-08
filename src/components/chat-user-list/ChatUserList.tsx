import React from "react";

import { ChatUser } from "@components";

const users = [
  {id: 1, name: "Alice", status: "active"},
  {id: 2, name: "Bob", status: "away"},
  {id: 3, name: "Charlie", status: "inactive"},
  {id: 4, name: "David", status: "active"},
  {id: 5, name: "Eve", status: "away"}
];

const ChatUserList = () => {
  return (
    <>
      <h2 className="text-sm font-semibold mb-2">Active chaters</h2>
      <ul
        className="h-[calc(100vh-210px)] overflow-scroll border border-gray-300 rounded-lg p-1 flex flex-col gap-2"
      >
        {
          users?.length ? users.map(user =>
            <ChatUser key={user.id} user={user}/>
          ) : <li className="flex justify-center items-center h-full text-gray-400">No active users</li>
        }
      </ul>
    </>
  );
};

export default ChatUserList;
export { ChatUserList };
