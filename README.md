# Nour Ben Moulehem — Portfolio

Personal portfolio website built with Next.js 15, showcasing my projects, skills, and experience as a software engineering student at ESPRIT.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + CSS variables for theming
- **Animations** — Framer Motion (motion/react v12)
- **Icons** — Lucide React, React Icons

## Features

- **Parallax sticky stack** — project cards stack on scroll with scale + translateY animations
- **Glassmorphism UI** —  glass cards with backdrop blur 
- **Dark / Light theme** — toggle with CSS variable-based theming
- **Chatbot** — rule-based assistant that answers questions about my experience and projects
- **Smooth scroll navigation** — navbar links scroll to sections
- **Responsive** — adapted layouts for mobile and desktop

## Sections

| Section | Description |
|---|---|
| Hero | Intro with animated text |
| About | Bio, education timeline, internship history |
| Skills | Categorized tech stack cards with brand icons |
| Projects | Parallax stack of 5 projects with glassmorphism cards |
| Contact | Contact form |




## Project Structure

```
src/
├── app/
│   ├── sections/
│   │   ├── hero/
│   │   ├── about/               # Bio, education, internships
│   │   ├── skills/              # Skill category cards
│   │   ├── projects/            # ParallaxStack wrapper
│   │   └── contact/
│   ├── components/
│   │   ├── projects/
│   │   │   └── ParallaxStack.tsx   # Parallax sticky card stack
│   │   ├── navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── chatbot/
│   └── lib/
│       └── chatbot/
│           └── intents.ts          # Chatbot intent definitions
└── components/
    └── Badge.tsx
```

## License

MIT
