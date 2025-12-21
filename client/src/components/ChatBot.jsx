import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from 'lucide-react';



// 🧠 System prompt – Personal + ZSCircle Agency Assistant (short answers + call option)
const ASSISTANT_SYSTEM_PROMPT = `
You are "ZSO", a personal AI assistant for Raju and the official AI helper of ZSCircle Agency.

About ZSCircle:
- A creative & tech freelancing agency.
- Works on website development (React, Next.js, landing pages, business sites, portfolio).
- Mobile & web apps.
- UI/UX design (web, mobile, dashboards).
- Branding (logo, colors, social media creatives).xww
- Client projects, proposals, and project planning.

Your role:
- Act as a friendly, smart personal assistant for ZSCircle and Raju.
- Help with:
  - Planning and structuring new projects for ZSCircle.
  - Generating ideas for client work, websites, apps, and designs.
  - Creating outlines, checklists, and simple strategies for freelancing and agency work.
  - Helping with productivity, task breakdown, time management, and learning plans.

Style:
- Keep answers SHORT and focused.
- Do NOT write long essays.
- Only give the information the user clearly needs.
- Use simple English, can mix light Hinglish.

If the user is asking for:
- very deep details,
- full project plan,
- in-depth strategy,
- or wants to go "deep" on project/data,
then at the END of your message add this line on a new line:



Scope:
- Focus your answers on projects, freelancing, business, design, development, productivity, planning, skills, study, or career.
- If the user asks unrelated general knowledge (like politics, random GK, who is PM of India, etc.),
  reply with:
  "I’m your ZSCircle personal assistant, so I mainly help with projects, freelancing, development, design, business and productivity. Ask me something in that direction 🙂"
`;

// 🔎 Keywords jinke base par hum decide karenge ki answer dena hai ya politely redirect
const ALLOWED_KEYWORDS = [
  // Agency / work
  "website",
  "web development",
  "web developer",
  "app",
  "mobile app",
  "development",
  "design",
  "ui",
  "ux",
  "ui/ux",
  "branding",
  "logo",
  "brand",
  "business",
  "startup",
  "project",
  "portfolio",
  "landing page",
  "landing",
  "react",
  "next",
  "next.js",
  "figma",
  "dashboard",
  "ecommerce",
  "e-commerce",
  "shop",
  "online store",
  "agency",
  "freelance",
  "freelancer",
  "service",
  "services",
  "social media",
  "instagram post",
  "poster",
  "brochure",
  "proposal",
  "client",
  "pricing",
  "package",
  "plan",
  "wireframe",
  "mockup",
  // Personal assistant / productivity / learning
  "task",
  "tasks",
  "todo",
  "to-do",
  "schedule",
  "time table",
  "timetable",
  "routine",
  "study",
  "learning",
  "learn",
  "roadmap",
  "career",
  "goals",
  "goal",
  "productivity",
  "focus",
  "plan",
  "planning",
  "skills",
  "skill",
  "bca",
  "college",
  "exam",
  "project idea",
  "idea",
];

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi — I’m ZSO, \nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Save chat to localStorage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  // Load chat from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
    if (saved.length > 0) setMessages(saved);
  }, []);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  console.log("Gemini key loaded:", !!GEMINI_API_KEY);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMessage = { role: "user", content: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 🔎 Check allowed / not allowed
    const lower = userText.toLowerCase();
    const isAllowed = ALLOWED_KEYWORDS.some((word) => lower.includes(word));

    if (!isAllowed) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I’m your ZSCircle personal assistant, so I mainly help with projects, freelancing, development, design, business and productivity. Ask me something in that direction 🙂",
        },
      ]);
      return;
    }

    // ✅ Allowed topic → call Gemini
    const loadingMsg = { role: "bot", content: "Thinking on this for you..." };
    setMessages((prev) => [...prev, loadingMsg]);

    const contextMessages = [...messages, userMessage];

    const prompt = `
${ASSISTANT_SYSTEM_PROMPT}

Conversation so far:
${contextMessages
  .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
  .join("\n")}

New user message:
User: "${userText}"

Now reply as ZSO. Keep it short and focused.
`;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await res.json();

      let reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I didn’t understand that.";

      setMessages((prev) => [
        ...prev.slice(0, -1), // remove "Thinking..."
        { role: "bot", content: reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", content: `Error: ${error.message}` },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        content:
          "Hi — I’m ZSO, your personal assistant for ZSCircle and projects. How can I help you today?",
      },
    ]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="flex flex-col h-[500px] bg-white/20 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-special-red text-white">
        <h1 className="text-lg font-semibold">ZSO - ChatBot</h1>
        <button
          onClick={clearChat}
          className="text-sm bg-white text-special-red px-3 py-1 rounded-lg hover:bg-gray-50"
        >
          Clear Chat
        </button>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-4 space-y-3"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-md whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-special-red text-white"
                  : "bg-white/80 backdrop-blur-xl text-gray-900"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 flex items-center gap-3 bg-white/80 backdrop-blur-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about projects, freelancing, design, dev, or planning..."
          className="flex-1 border border-gray-400 rounded-xl px-4 py-2 outline-none focus:border-special-red"
        />
        <button
          onClick={sendMessage}
          className="cursor-pointer bg-special-red/90 text-white px-3 py-3 rounded-full hover:bg-special-red"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};

export default ChatBot;