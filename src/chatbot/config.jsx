// src/chatbot/config.js

import { createChatBotMessage } from 'react-chatbot-kit';
import ScrollButton from './ScrollButton'; // 1. IMPORT THE WIDGET

const botName = 'ZidaneBot';

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}. How can I help you? Try asking about my "education" or "projects".`)
  ],
  // 2. REGISTER THE WIDGET
  widgets: [
    {
      widgetName: 'scrollToSectionButton',
      widgetFunc: (props) => <ScrollButton {...props} />,
    },
  ],
};

export default config;