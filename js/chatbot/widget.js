// Create chatbot widget
const chatbotRoot = document.getElementById('chatbot-root');

if (chatbotRoot) {
  // Create widget HTML
  chatbotRoot.innerHTML = `
    <div id="chatbot-widget">
      <button id="chatbot-toggle">💬</button>
      <div id="chatbot-panel">
        <div class="chat-header">Ask me anything</div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-input-area">
          <input type="text" id="chat-input" placeholder="Type a message...">
          <button id="chat-send">Send</button>
        </div>
      </div>
    </div>
  `;

  // Get elements
  const toggle = document.getElementById('chatbot-toggle');
  const panel = document.getElementById('chatbot-panel');
  const messagesContainer = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  // Toggle panel
  toggle.addEventListener('click', () => {
    panel.classList.toggle('active');
    if (panel.classList.contains('active')) {
      input.focus();
    }
  });

  // Add message function
  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Send message
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, true);
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! I'm Akash's portfolio assistant.",
        "I can help you learn more about Akash's robotics and AI experience.",
        "Feel free to explore the portfolio and reach out via the contact page!",
        "Interested in robotics or ROS2 projects? Let me know!",
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      addMessage(response, false);
    }, 500);
  }

  // Event listeners
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Welcome message
  setTimeout(() => {
    if (messagesContainer.children.length === 0) {
      addMessage("Hi! I'm here to help. Ask me about Akash's work in robotics and AI!", false);
    }
  }, 1000);
}