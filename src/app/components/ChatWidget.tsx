'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'
import { getResponse } from '@/lib/chatbot/matcher'

type Message = {
  role: 'user' | 'bot'
  text: string
}

const INITIAL_MESSAGE: Message = {
  role: 'bot',
  text: "Hey! I'm basically Nour but in chatbot form. Ask me anything about her work, stack, or story.",
}

// Suggested starter questions shown before the first user message
const SUGGESTIONS = [
  'What projects did she build?',
  'What\'s her tech stack?',
  'Tell me about her DevOps work',
  'How do I contact her?',
]

// Typing status messages — rotates while the bot is "thinking"
const TYPING_STATUSES = [
  'cooking a response…',
  'thinking…',
  'hold on…',
  'processing…',
  'let me think…',
]

export default function ChatWidget() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'

  const surface   = isDark ? 'rgba(5, 0, 34, 0.82)'       : 'rgba(225, 219, 255, 0.88)'
  const border    = isDark ? 'rgba(100, 80, 200, 0.35)'   : 'rgba(79, 104, 201, 0.3)'
  const divider   = isDark ? 'rgba(100, 80, 200, 0.2)'    : 'rgba(79, 104, 201, 0.2)'
  const botBubble = isDark ? 'rgba(255, 255, 255, 0.07)'  : 'rgba(0, 0, 0, 0.06)'
  const badgeBg   = isDark ? 'rgba(100, 80, 200, 0.2)'    : 'rgba(79, 104, 201, 0.15)'
  const suggBg    = isDark ? 'rgba(100, 80, 200, 0.12)'   : 'rgba(79, 104, 201, 0.1)'
  const suggBorder= isDark ? 'rgba(100, 80, 200, 0.25)'   : 'rgba(79, 104, 201, 0.25)'

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [lastIntentId, setLastIntentId] = useState<string | undefined>()
  const [typingStatus] = useState(() =>
    TYPING_STATUSES[Math.floor(Math.random() * TYPING_STATUSES.length)]
  )
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const hasUserSpoken = messages.length > 1

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    setLoading(true)

    // Variable delay: longer responses feel more natural with a longer pause
    const { response, intentId } = getResponse(trimmed, lastIntentId)
    const delay = Math.min(400 + response.length * 5, 1400)

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: response }])
      setLastIntentId(intentId)
      setLoading(false)
    }, delay)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send(input)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Chat panel ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: surface,
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: `1px solid ${border}`,
              maxHeight: '520px',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ borderBottom: `1px solid ${divider}` }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} style={{ color: 'var(--secondary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  Ask about Nour
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: badgeBg,
                    color: 'var(--secondary)',
                  }}
                >
                  handmade bot
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-white/10"
                aria-label="Close chat"
              >
                <X size={15} style={{ color: 'var(--text)' }} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 overflow-y-auto flex-1">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <span
                    className="max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? {
                            background: 'var(--primary)',
                            color: '#fff',
                            borderBottomRightRadius: '4px',
                          }
                        : {
                            background: botBubble,
                            color: 'var(--text)',
                            borderBottomLeftRadius: '4px',
                          }
                    }
                  >
                    {msg.text}
                  </span>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-center gap-2"
                >
                  <span
                    className="flex items-center gap-1.5 rounded-2xl px-3 py-2"
                    style={{
                      background: botBubble,
                      borderBottomLeftRadius: '4px',
                    }}
                  >
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          animation: `bounce 1s ease-in-out ${i * 0.18}s infinite`,
                        }}
                      />
                    ))}
                  </span>
                  <span className="text-xs opacity-40" style={{ color: 'var(--text)' }}>
                    {typingStatus}
                  </span>
                </motion.div>
              )}

              {/* Suggested questions — shown only before user has typed anything */}
              {!hasUserSpoken && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-2 mt-1"
                >
                  <span className="text-xs opacity-40 px-1" style={{ color: 'var(--text)' }}>
                    Try asking:
                  </span>
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-left text-xs px-3 py-2 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                      style={{
                        background: suggBg,
                        border: `1px solid ${suggBorder}`,
                        color: 'var(--text)',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
              style={{ borderTop: `1px solid ${divider}` }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-30"
                style={{ color: 'var(--text)' }}
                disabled={loading}
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="rounded-lg p-2 transition-all disabled:opacity-25 hover:scale-110 active:scale-95"
                style={{ color: 'var(--secondary)' }}
                aria-label="Send"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ──────────────────────────────────────────────── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(prev => !prev)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
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
