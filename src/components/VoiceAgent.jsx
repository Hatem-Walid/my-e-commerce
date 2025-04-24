// components/VoiceAgent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './VoiceAgent.css'; // لو عامل استايل خارجي

const VoiceAgent = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const askGPT = async (userText) => {
    console.log("Asking GPT with text:", userText);
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userText }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // 👈 الآمن
          },
        }
      );

      const botReply = res.data.choices[0].message.content;
      setResponse(botReply);
      speak(botReply);
    } catch (error) {
      console.error('Error while calling GPT:', error);
      speak('Sorry, something went wrong.');
    }
  };

  const startListening = () => {
    console.log("Starting voice recognition...");
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      console.log("Recognized speech:", speechText);
      setTranscript(speechText);
      askGPT(speechText);
    };

    recognition.onend = () => {
      console.log("Voice recognition ended.");
      setListening(false);
    };
  };

  return (
    <div className="voice-agent-container">
      <span className="voice-agent-btn" onClick={startListening}>
        <span className="btnInner">
          🎙️ {listening ? "Listening..." : "Talk to AI"}
        </span>
      </span>

      {transcript && (
        <div className="mt-4 text-white text-center">
          <p><strong>You:</strong> {transcript}</p>
          <p><strong>AI:</strong> {response}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAgent;
