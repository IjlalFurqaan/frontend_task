# Chat Sessions Frontend Application

This project is a React-based frontend application for displaying and filtering chat sessions. It interacts with a backend API to fetch chat session data and allows users to filter sessions by date range.

## Setup and Installation

1. **Clone the repository**

   ```
   git clone <https://github.com/IjlalFurqaan/frontend_task.git>
   cd  frontend_task
   ```

2. **Install dependencies**

   Make sure you have Node.js and npm installed on your system. Then run:

   ```
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add the following:

   ```
   REACT_APP_API_URL=https://dev.brain-backend.dainstudios.com/challenge
   ```

   This sets up the base URL for the API calls.

4. **Run the application**

   Start the development server:

   ```
   npm start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000) on your device though after your run command npm run dev.

## Project Structure

```
src/
├── components/
│   ├── ChatSessionList.js
│   ├── ChatSessionItem.js
│   ├── DateRangePicker.js
│   └── ErrorMessage.js
├── hooks/
│   └── useChatSessions.js
├── services/
│   └── api.js
├── styles/
│   └── index.css
├── App.js
└── index.js
```

- `components/`: Contains React components for different parts of the UI.
- `hooks/`: Custom React hooks, including `useChatSessions` for managing chat session data.
- `services/`: API-related functions.
- `styles/`: CSS files for styling the application.

## Features

1. **Display Chat Sessions**: Fetches and displays a list of chat sessions from the API.
2. **Date Range Filtering**: Allows users to filter chat sessions by selecting a start and end date.
3. **Error Handling**: Displays user-friendly error messages if API requests fail.
4. **Responsive Design**: The UI is responsive and works well on various screen sizes.

## API Integration

The application interacts with the backend API at `https://dev.brain-backend.dainstudios.com/challenge/chat_sessions`. The `useChatSessions` hook in `src/hooks/useChatSessions.js` manages the API calls and state updates.

## Styling

The application uses a custom CSS file (`src/styles/index.css`) for styling. It features a light yellowish background and a clean, modern design.

## Error Handling

Errors from API calls are caught and displayed using the `ErrorMessage` component. This provides a user-friendly way to show issues like network errors or server problems.

## Future Improvements

- Implement pagination for large numbers of chat sessions.
- Add more detailed views for individual chat sessions.
- Implement user authentication and personal chat history.

## Troubleshooting

If you encounter any issues while setting up or running the application, please check the following:

1. Ensure all dependencies are correctly installed (`npm install`).
2. Verify that the API URL in the `.env` file is correct.
3. Check your console for any error messages that might provide more information.

If problems persist, please open an issue in the project repository.