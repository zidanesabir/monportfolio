// src/chatbot/ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // --- New Helper Function to scroll the page ---
  scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Action for Education Queries ---
  handleEducationQuery = () => {
    const message = this.createChatBotMessage(
      "Here is a summary of my educational background. You can click the button to see the full section.",
      {
        widget: 'scrollToSectionButton', // Specify the widget to use
        payload: { // Send data to the widget
          sectionId: 'education',
          label: 'Show Me Education',
        },
      }
    );
    this.updateChatbotState(message);
  };

  // --- Action for Experience Queries ---
  handleExperienceQuery = () => {
    const message = this.createChatBotMessage(
      "I have professional experience as an intern. Click the button to see the details.",
      {
        widget: 'scrollToSectionButton',
        payload: {
          sectionId: 'experience',
          label: 'Show Me Experience',
        },
      }
    );
    this.updateChatbotState(message);
  };

  // --- Action for Project Queries ---
  handleProjectsQuery = () => {
    const message = this.createChatBotMessage(
      "I've worked on several projects. Let me show you!",
      {
        widget: 'scrollToSectionButton',
        payload: {
          sectionId: 'projects',
          label: 'Show Me Projects',
        },
      }
    );
    this.updateChatbotState(message);
  };

  // --- Default handler for unknown questions ---
  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "Sorry, I don't understand. You can ask me about 'education', 'experience', 'projects', or 'skills'."
    );
    this.updateChatbotState(message);
  };

  // --- Function to add the new message to the chat state ---
  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;