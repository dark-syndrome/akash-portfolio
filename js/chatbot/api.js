// Chatbot API handler
// This file can be used for future API integrations

export async function sendChatMessage(message) {
  // Placeholder for future API integration
  // For now, return a simulated response
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'm currently in development mode.",
        "I can help you learn more about Akash's work in robotics and AI systems.",
        "Feel free to explore the portfolio and reach out via the contact page!",
        "Interested in SLAM, ROS2, or simulation projects? I'd be happy to discuss!",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      resolve({ message: randomResponse });
    }, 500);
  });
}

export function initChatAPI() {
  console.log('Chat API initialized');
  // Add any initialization logic here
}