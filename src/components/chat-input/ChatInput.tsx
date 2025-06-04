const ChatInput = () => {
  return (
    <div
      className="flex gap-4 justify-around fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-t-gray-200 shadow-md">
      <input
        className="flex-grow px-2 border rounded"
        type="text" placeholder="Type your message here..."
      />
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}

export { ChatInput }
