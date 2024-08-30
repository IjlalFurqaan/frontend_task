const API_BASE_URL = 'https://dev.brain-backend.dainstudios.com/challenge';

export async function fetchChatSessions(startDate, endDate) {
  let url = `${API_BASE_URL}/chat_sessions`;
  
  if (startDate && endDate) {
    url += `?start_date=${startDate}&end_date=${endDate}`;
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch chat sessions');
  }

  return response.json();
}