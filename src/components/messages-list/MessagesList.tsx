import { MessagesListItem } from "@components";

const MessagesList = () => {
  return (
    <div className="overflow-scroll">
      <MessagesListItem
        message="Hello, how are you? and how is your day going? Hope you are doing well!"
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
      /><MessagesListItem
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
      /><MessagesListItem
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
      /><MessagesListItem
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
      /><MessagesListItem
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
