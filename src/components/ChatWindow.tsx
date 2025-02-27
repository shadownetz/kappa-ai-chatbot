// @ts-ignore
'use client'
import { useState, useRef, useEffect, FormEvent } from 'react';

interface Message {
    sender: 'user' | 'ai';
    content: string;
}

export default function ChatWindow() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [recording, setRecording] = useState(false);
    const recognitionRef = useRef<any>(null);
    console.log(input);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition =
                (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = false;
                recognitionRef.current.interimResults = false;
                recognitionRef.current.lang = 'en-US';

                recognitionRef.current.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInput(transcript);
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error('Speech recognition error:', event);
                    setRecording(false);
                };

                recognitionRef.current.onend = () => {
                    setRecording(false);
                };
            }
        }
    }, []);

    const handleVoiceInput = () => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.start();
                setRecording(true);
            } catch (error) {
                console.error('Error starting voice recognition:', error);
            }
        } else {
            alert("Voice recognition is not supported in your browser.");
        }
    };

    const handleSend = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', content: input };
        setMessages([...messages, userMessage]);

        // Call backend API (stub) to get the AI's reply
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();
            const aiMessage: Message = { sender: 'ai', content: data.reply };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }

        setInput('');
    };

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-neu">
            <div className="h-96 overflow-y-auto mb-4 p-2 bg-gray-100 rounded">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                    >
            <span
                className={`inline-block px-4 py-2 rounded ${
                    msg.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-800'
                }`}
            >
              {msg.content}
            </span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="flex">
                <input
                    type="text"
                    className="flex-grow p-2 rounded-l-lg outline-none"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 px-4 rounded-r-lg text-white">
                    Send
                </button>
                <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`p-2 bg-green-500 text-white rounded-2xl ms-1 ${recording ? 'animate-pulse' : ''}`}
                    title="Send voice input"
                >
                    🎤
                </button>
            </form>
        </div>
    );
}
