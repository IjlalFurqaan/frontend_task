import React from "react";

function ChatSessionItem({ session }) {
  return (
    <div className="chat-session-item">
      <h3>Session ID: {session.id}</h3>
      <p>Created: {new Date(session.created_at).toLocaleString()}</p>
      <p>Updated: {new Date(session.updated_at).toLocaleString()}</p>
      <p>User ID: {session.user_id}</p>
      <p>Messages: {session.chat_messages.length}</p>
    </div>
  );
}

export default ChatSessionItem;
