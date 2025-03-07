import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { TextField, CircularProgress } from "@mui/material";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      try {
        const res = await axios.post(
          "https://steam-server.onrender.com/api/text",
          { question: input },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const botMessage = { text: res.data.answer, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          { text: "An error occurred while fetching the response.", sender: "bot" },
        ]);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end z-50 text-sm">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-2xl w-80 h-96 flex flex-col justify-between border">
          {/* Chatbot Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-2xl">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h2 className="text-lg font-semibold">Chatbot 👾</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 m-1 space-y-2 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] w-fit ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input Box */}
          <div className="border-t p-3 flex gap-2 bg-white rounded-b-2xl">
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Write a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} style={{ color: "white" }} /> : <Send size={20} />}
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
