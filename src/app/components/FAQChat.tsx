"use client";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { CheckCheck, Maximize2, Minimize2 } from "lucide-react";
import { getGeminiReply } from "@/utils/gemini";
import { faqs } from "@/constants/faqs";
import { motion, Variants } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
  isFAQ?: boolean;
}

const greetingMessages: Message[] = [
  {
    text: "👋 Hi! I'm CodeArena AI assistant.",
    isUser: false,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    text: "I'm here to help answer your questions about our services. Feel free to ask me anything!",
    isUser: false,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

const FAQChat = () => {
  const [messages, setMessages] = useState<Message[]>([...greetingMessages]);
  const [inputText, setInputText] = useState("");
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const fallBackAnswer = "Could not answer you right now.";

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Add FAQs as messages when the component mounts
  useEffect(() => {
    const faqMessages: Message[] = faqs.flatMap((faq) => [
      {
        text: faq.question,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isFAQ: true,
      },
      {
        text: faq.answer as string,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isFAQ: true,
      },
    ]);

    setMessages((prev) => [...prev, ...faqMessages]);
  }, []);

  // Format the conversation history and user input for Gemini
  const formatGeminiInput = (userInput: string) => {
    let prompt = "";

    if (conversationHistory.length > 0) {
      prompt += ` //Conversation History: ${conversationHistory.join(" ")}`;
    }

    prompt += ` //user input starts now// ${userInput} /////`;

    return prompt;
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message
    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: currentTime,
    };

    // Add the user's message to the chat
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input field
    setInputText("");

    // Format the input for Gemini
    const formattedInput = formatGeminiInput(inputText);

    // Set isTyping to true
    setIsTyping(true);

    // Get the bot's response from Gemini
    try {
      const botResponseText = await getGeminiReply(formattedInput);
      const botResponse: Message = {
        text:
          botResponseText && botResponseText.trim() !== ""
            ? botResponseText
            : fallBackAnswer,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Add the bot's response to the chat
      setMessages((prev) => [...prev, botResponse]);

      // Update conversation history
      setConversationHistory((prev) => [
        ...prev,
        `//User: ${inputText}// //you: ${botResponseText}//`,
      ]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);

      // Add an error message if the API call fails
      const errorMessage: Message = {
        text: fallBackAnswer,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Set isTyping to false after the response is received or if there's an error
      setIsTyping(false);
    }
  };

  // Toggle full-screen mode
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  useEffect(() => {
    const faqMessages: Message[] = faqs.flatMap((faq) => [
      {
        text: faq.question,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isFAQ: true,
      },
      {
        text: faq.answer as string,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isFAQ: true,
      },
    ]);

    setMessages((prev) => [...prev, ...faqMessages]);
  }, []);

  const messageVariants: Variants = {
    offscreen: (isUser: boolean) => ({
      opacity: 0,
      x: isUser ? 50 : -50,
    }),
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Typing Animation Component
  const TypingAnimation = () => {
    return (
      <div className="flex justify-start">
        <div className="max-w-[75%] space-y-1">
          <div className="p-2 rounded-lg bg-[#202c33] text-white">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-[#8696a0] rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Head>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
              Chat with CodeArena
            </span>
          </h2>
          <div
            role="dialog"
            aria-label="Chat with CodeArena AI assistant"
            className={`max-w-md mx-auto bg-[#111b21] rounded-lg shadow-xl overflow-hidden ${
              isFullScreen
                ? "fixed inset-0 h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom))] w-full rounded-none max-w-none z-50"
                : "relative"
            }`}
            style={{
              paddingTop: isFullScreen ? "env(safe-area-inset-top)" : "0",
              paddingBottom: isFullScreen ? "env(safe-area-inset-bottom)" : "0",
            }}
          >
            {/* Chat Header */}
            <div
              className={`p-3 ${
                isFullScreen ? "py-1" : ""
              } bg-[#202c33] flex items-center space-x-3 border-b border-gray-700`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-purple-800 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  width={40}
                  height={40}
                  alt="CodeArena"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">CodeArena</h3>
                <p className="text-xs text-[#8696a0]">online</p>
              </div>
              {/* Expand/Collapse Button (Mobile Only) */}
              <button
                onClick={toggleFullScreen}
                className="md:hidden p-2 rounded-full text-white hover:bg-[#2a3942] transition-colors duration-300"
                aria-label={isFullScreen ? "Minimize chat" : "Maximize chat"}
              >
                {isFullScreen ? (
                  <Minimize2 size={20} />
                ) : (
                  <Maximize2 size={20} />
                )}
              </button>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className={`h-[500px] overflow-y-auto p-4 space-y-4 custom-scrollbar ${
                isFullScreen ? "h-[calc(100vh-160px)]" : ""
              }`}
              style={{
                background:
                  "linear-gradient(135deg, #001122 0%, #001A2F 50%, #00253D 100%)",
              }}
            >
              <div className="overflow-clip">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex overflow-x-hidden  ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                    variants={messageVariants} // Apply animation variants
                    initial="offscreen" // Initial animation state
                    whileInView="onscreen" // Animation when in view
                    viewport={{ once: true, amount: 0.5 }} // Trigger animation once
                    custom={message.isUser} // Pass custom prop for direction
                  >
                    <div className="max-w-[75%] space-y-1">
                      <div
                        className={`p-2 rounded-lg ${
                          message.isUser
                            ? "bg-purple-800 text-white"
                            : "bg-[#202c33] text-white"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <div
                        className={`flex items-center text-xs ${
                          message.isUser ? "justify-end" : "justify-start"
                        } text-[#8696a0] space-x-1`}
                      >
                        <span>{message.timestamp}</span>
                        {message.isUser && (
                          <CheckCheck size={14} className="text-[#53bdeb]" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && <TypingAnimation />}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-[#202c33] flex items-center space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message"
                className="flex-1 p-2 rounded-lg bg-[#2a3942] text-white placeholder-[#8696a0] focus:outline-none text-sm"
                aria-label="Type a message"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQChat;
