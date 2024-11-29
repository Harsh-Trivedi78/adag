// Chatbot.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 7.5rem; /* Space to push the chatbot down */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: #005b96;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ChatContainer = styled.div`
  width: 350px;
  max-height: 600px;
  padding: 1rem;
  border: 2px solid #005b96;
  border-radius: 10px;
  overflow-y: auto;
  background-color: #f0f8ff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Message = styled.div`
  background-color: ${props => (props.user ? '#4caf50' : '#005b96')};
  color: white;
  padding: 0.8rem;
  margin: 0.6rem 0;
  border-radius: 10px;
  font-weight: bold;
  align-self: ${props => (props.user ? 'flex-end' : 'flex-start')};
  max-width: 75%;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 2px solid #005b96;
  border-radius: 6px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: #005b96;
  color: white;
  border: none;
  border-radius: 6px;
  margin-left: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004080;
  }
`;

const chatbotResponses = {
  hello: "Hello! How can I help you today?",
  help: "I'm here to assist with any questions you have.",
  bye: "Thanks for chatting! Have a great day!",
  default: "I'm sorry, I didn’t understand that. Could you please rephrase?"
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    const userMessage = { text: input, user: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const responseText = chatbotResponses[input.toLowerCase()] || chatbotResponses.default;
    const botMessage = { text: responseText, user: false };
    setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);

    setInput('');
  };

  return (
    <Wrapper>
      <Heading>Help and Support</Heading>
      <ChatContainer>
        {messages.map((msg, index) => (
          <Message key={index} user={msg.user}>{msg.text}</Message>
        ))}
        <InputContainer>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type 'hello', 'help', or 'bye'..."
          />
          <Button onClick={handleSend}>Send</Button>
        </InputContainer>
      </ChatContainer>
    </Wrapper>
  );
};

export default Chatbot;
