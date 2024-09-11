const API_BASE_URL = "https://dev.brain-backend.dainstudios.com/challenge/chat_sessions/";

export async function fetchChatSessions(startDate, endDate) {
  let url = `${API_BASE_URL}`;
  
  if (startDate && endDate) {
    url += `?start_date=${startDate}&end_date=${endDate}`;
  }

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch chat sessions');
  }

  return response.json();
}
