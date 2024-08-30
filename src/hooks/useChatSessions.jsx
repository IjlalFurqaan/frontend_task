import { useState, useEffect } from 'react';
import { fetchChatSessions } from '../services/api';

function useChatSessions(dateRange) {
  const [chatSessions, setChatSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadChatSessions() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchChatSessions(dateRange.startDate, dateRange.endDate);
        setChatSessions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadChatSessions();
  }, [dateRange]);

  return { chatSessions, loading, error };
}

export default useChatSessions;