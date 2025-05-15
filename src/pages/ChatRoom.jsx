import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import ChatHeader from '../components/ChatHeader';

function ChatRoom() {
  return (
    <div className="max-w-2xl mx-auto h-[90vh] flex flex-col bg-white border rounded-lg shadow-lg mt-6">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatRoom;
