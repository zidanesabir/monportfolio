

import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import { MessageCircle, X } from 'lucide-react';
import 'react-chatbot-kit/build/main.css';

import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';

const PortfolioChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 shadow-2xl rounded-lg">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

    
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default PortfolioChatbot;