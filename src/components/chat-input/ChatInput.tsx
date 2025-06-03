const ChatInput = () => {
    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="Type your message here..."
                className="input-field"
            />
            <button className="send-button">Send</button>
        </div>
    );
}

export { ChatInput }