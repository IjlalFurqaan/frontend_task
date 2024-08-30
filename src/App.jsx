import React, { useState } from "react";
import ChatSessionList from "./components/ChatSessionList";
import DateRangePicker from "./components/DateRangePicker";
import ErrorMessage from "./components/ErrorMessage";
import useChatSessions from "./hooks/useChatSessions";
import "./index.css";

function App() {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const { chatSessions, loading, error } = useChatSessions(dateRange);

  const handleDateRangeChange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <div className="App">
      <h1>
        Chat Sessions
        <span>Your Conversation History</span>
      </h1>
      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <div className="loading"></div>
      ) : (
        <ChatSessionList sessions={chatSessions} />
      )}
    </div>
  );
}

export default App;
