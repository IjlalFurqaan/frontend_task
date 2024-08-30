
import React from 'react';
import ChatSessionItem from './ChatSessionItem';

function ChatSessionList({ sessions }) {
  if (sessions.length === 0) {
    return <p>No chat sessions found.</p>;
  }

  return (
    <div className="chat-session-list">
      {sessions.map(session => (
        <ChatSessionItem key={session.id} session={session} />
      ))}
    </div>
  );
}

export default ChatSessionList;