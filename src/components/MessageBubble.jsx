function MessageBubble({ message, sender, time }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg shadow-md relative ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
        <p className="text-sm">{message}</p>
        <span className="text-[10px] text-gray-500 absolute bottom-[-16px] right-2">{time}</span>
      </div>
    </div>
  );
}

export default MessageBubble;
