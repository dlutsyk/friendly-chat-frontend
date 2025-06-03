const MessagesListItem = ({message, sender, timestamp, isUserMessage = false}) => {
  const itemClass = isUserMessage ? "bg-blue-100" : "bg-gray-100";
  const messageClass = isUserMessage ? "text-right" : "text-left";
  
  return (
    <div className="mb-4">
      <div className={`flex justify-between mb-1 ${messageClass}`}>
        <div className="font-semibold">{sender}</div>
        <div className="text-gray-500 text-sm">{timestamp}</div>
      </div>
      <div className={`px-6 py-4 rounded-lg ${itemClass} ${messageClass}`}>
        {message}
      </div>
    </div>
  );
}

export { MessagesListItem };
