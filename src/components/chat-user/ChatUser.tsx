import React from "react";

enum UserStatus {
  ACTIVE = "active",
  AWAY = "away",
  INACTIVE = "inactive"
}

type User = {
  id: number;
  name: string;
  status?: UserStatus;
}

const statusColors = {
  "active": "bg-green-500",
  "away": "bg-yellow-500",
  "inactive": "bg-red-500"
};

const ChatUser = (
  {
    user
  }: {
    user: User
  }
) => {
  const statusColor = user.status ? statusColors[user.status] : statusColors.active;
  
  return (
    <li className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center relative">
        <span className="text-sm font-semibold">{user.name.charAt(0).toUpperCase()}</span>
        <div className={`w-2 h-2 ${statusColor} rounded-full absolute right-0.5 bottom-0.5 ring-1 ring-white`}></div>
      </div>
      {user.name}
    </li>
  );
};

export default ChatUser;
export { ChatUser };
