import MessageBubble from './MessageBubble';

const dummyMessages = [
  { id: 1, sender: 'bot', message: 'Hello! 👋', time: '10:00 AM' },
  { id: 2, sender: 'user', message: 'Hi! I need help.', time: '10:01 AM' },
  { id: 3, sender: 'bot', message: 'Sure! How can I assist you?', time: '10:02 AM' },
  { id: 4, sender: 'user', message: 'I’m trying to build a chat app in React.', time: '10:03 AM' },
  { id: 5, sender: 'bot', message: 'Great! You can use WebSockets or libraries like Socket.IO.', time: '10:04 AM' },
  { id: 6, sender: 'user', message: 'Do you have a front-end sample?', time: '10:05 AM' },
  { id: 7, sender: 'bot', message: 'Yes, I can help you with that. Do you want a minimal UI or something styled?', time: '10:06 AM' },
  { id: 8, sender: 'user', message: 'Styled with Tailwind would be perfect.', time: '10:07 AM' },
  { id: 9, sender: 'bot', message: 'Got it. I’ll show you a layout with a chat box, input area, and message bubbles.', time: '10:08 AM' },
  { id: 10, sender: 'user', message: 'Awesome, thank you! 🎉', time: '10:09 AM' },
];

function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-gradient-to-br from-white to-blue-100 rounded-md shadow-inner">
      {dummyMessages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
          time={msg.time}
        />
      ))}
    </div>
  );
}

export default MessageList;
