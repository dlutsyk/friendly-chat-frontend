import { MessagesListItem } from "@components";

const MessagesList = () => {
  return (
    <div className="h-[calc(100vh-148px)] overflow-y-scroll scroll-m-0">
      <MessagesListItem
        message="Hello, how are you? and how is your day going? Hope you are doing well!"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <MessagesListItem
        message="I'm good, thanks! How about you? And how is your day going? Hope you are doing well! Sure, I can help you with that. What do you need assistance with?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Doing well, just working on some code."
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Hello, how are you?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="I'm good, thanks! How about you?"
        sender="Alice"
        timestamp="10:02 AM"
      />
      <MessagesListItem
        message="Hello, how are you?"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <MessagesListItem
        message="I'm good, thanks! How about you?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Doing well, just working on some code."
        sender="Alice"
        timestamp="10:02 AM"
      />
      <MessagesListItem
        message="Hello, how are you?"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <MessagesListItem
        message="I'm good, thanks! How about you?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Doing well, just working on some code."
        sender="Alice"
        timestamp="10:02 AM"
      />
      <MessagesListItem
        message="Hello, how are you?"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <MessagesListItem
        message="I'm good, thanks! How about you?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Doing well, just working on some code."
        sender="Alice"
        timestamp="10:02 AM"
      />
      <MessagesListItem
        message="Hello, how are you?"
        sender="Alice"
        timestamp="10:00 AM"
      />
      <MessagesListItem
        message="I'm good, thanks! How about you?"
        sender="Bob"
        timestamp="10:01 AM"
        isUserMessage={true}
      />
      <MessagesListItem
        message="Doing well, just working on some code."
        sender="Alice"
        timestamp="10:02 AM"
      />
    </div>
  );
}

export { MessagesList };
