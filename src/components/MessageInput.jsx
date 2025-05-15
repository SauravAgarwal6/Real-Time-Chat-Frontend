import { useState } from 'react';

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      alert(`Message Sent: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-3 border-t bg-white shadow-md sticky bottom-0">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
