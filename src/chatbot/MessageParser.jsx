// src/chatbot/MessageParser.js

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("education") || lowerCaseMessage.includes("school") || lowerCaseMessage.includes("degree")) {
      this.actionProvider.handleEducationQuery();
    }
    else if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work") || lowerCaseMessage.includes("job")) {
      this.actionProvider.handleExperienceQuery();
    }
    else if (lowerCaseMessage.includes("project") || lowerCaseMessage.includes("portfolio")) {
      this.actionProvider.handleProjectsQuery();
    }
    else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;