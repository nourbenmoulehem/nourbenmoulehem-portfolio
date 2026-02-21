'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { getResponse } from '@/lib/chatbot/matcher'

type Message = {
  role: 'user' | 'bot'
  text: string
}

const INITIAL_MESSAGE: Message = {
  role: 'bot',
  text: "Hey! I'm Nour's portfolio assistant. Ask me anything — his projects, skills, education, or how to reach him.",
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to latest message whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMessage: Message = { role: 'user', text: trimmed }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate a short "typing" delay so the response doesn't feel instant
    setTimeout(() => {
      const reply = getResponse(trimmed)
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
      setLoading(false)
    }, 400)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(5, 0, 34, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(100, 80, 200, 0.3)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid rgba(100, 80, 200, 0.2)' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--secondary)' }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text)' }}
                >
                  Ask about Nour
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-white/10"
                aria-label="Close chat"
              >
                <X size={16} style={{ color: 'var(--text)' }} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 h-72 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <span
                    className="max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? {
                            background: 'var(--primary)',
                            color: '#fff',
                            borderBottomRightRadius: '4px',
                          }
                        : {
                            background: 'rgba(255,255,255,0.07)',
                            color: 'var(--text)',
                            borderBottomLeftRadius: '4px',
                          }
                    }
                  >
                    {msg.text}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <span
                    className="flex items-center gap-1 rounded-2xl px-3 py-2"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      borderBottomLeftRadius: '4px',
                    }}
                  >
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                        }}
                      />
                    ))}
                  </span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderTop: '1px solid rgba(100, 80, 200, 0.2)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
                style={{ color: 'var(--text)' }}
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="rounded-lg p-2 transition-all disabled:opacity-30 hover:scale-110 active:scale-95"
                style={{ color: 'var(--secondary)' }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(prev => !prev)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all"
        style={{ background: 'var(--primary)' }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} color="#fff" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} color="#fff" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
