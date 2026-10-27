import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Kumusta! I am GroundWatch Bot, your AI environmental assistant. Ask me anything about land subsidence, water wells, or tidal flooding in Hagonoy, Bulacan!"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const knowledgeBase = [
    {
      keywords: ['cause', 'why', 'sinking', 'reason'],
      response: "Land subsidence in Hagonoy is primarily caused by excessive groundwater extraction from deep wells for fishponds and domestic use, combined with natural compaction of soft deltaic silt."
    },
    {
      keywords: ['rate', 'fast', 'cm', 'centimeter', 'how much'],
      response: "Satellite InSAR studies show that coastal areas in Hagonoy are sinking at an alarming rate of 3.5 to 5.0 centimeters per year."
    },
    {
      keywords: ['barangay', 'location', 'place', 'where', 'san jose', 'tibaguin'],
      response: "Barangays San Jose, Tibaguin, Mercado, and San Pascual are among the most vulnerable hotspots due to low elevation and proximity to coastal waters."
    },
    {
      keywords: ['solution', 'prevent', 'mitigate', 'stop'],
      response: "Solutions include shifting to surface water (Bulacan Bulk Water Project), rainwater harvesting, planting protective mangrove buffers, and enforcing NWRB groundwater extraction bans."
    },
    {
      keywords: ['flood', 'tide', 'sunshine', 'water'],
      response: "High-tide 'sunshine flooding' occurs when ocean high tides backflow through river channels and drains because ground elevation has dropped below sea level."
    }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matched = knowledgeBase.find((kb) =>
        kb.keywords.some((kw) => lower.includes(kw))
      );

      let botReply = matched
        ? matched.response
        : "Land subsidence is a critical challenge in Hagonoy. Reducing groundwater pumping and protecting coastal ecosystems are essential steps to safeguard our community.";

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen ? (
        <button className="chat-trigger-btn" onClick={() => setIsOpen(true)}>
          <Bot size={24} />
          <span>Ask GroundWatch AI</span>
        </button>
      ) : (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <Bot size={22} />
              <div>
                <h4>GroundWatch Assistant</h4>
                <span className="online-status">Online • Environmental AI</span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <div className="msg-avatar">
                  {msg.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className="msg-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
