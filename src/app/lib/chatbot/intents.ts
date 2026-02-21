/**
 * INTENTS
 *
 * Each intent is a category of question a visitor might ask.
 *
 * - patterns: keywords the matcher looks for in preprocessed input.
 * - responses: possible answers — one is picked at random each time.
 *
 * To add a new topic: add an object to this array. That's it.
 */

export type Intent = {
  id: string
  patterns: string[]
  responses: string[]
}

export const intents: Intent[] = [
  // ─── Greeting ──────────────────────────────────────────────────────────────
  {
    id: 'greeting',
    patterns: [
      'hi', 'hello', 'hey', 'bonjour', 'salut', 'howdy', 'sup',
      'greetings', 'coucou', 'bonsoir', 'yo', 'hola',
    ],
    responses: [
      "Hey! I'm Nour's portfolio assistant. Ask me anything about her education, projects, or skills.",
      "Hello! Happy to answer questions about Nour. What would you like to know?",
      "Hi there! Ask me about Nour's work, stack, DevOps experience, or how to reach her.",
      "Bonjour ! Je peux répondre à vos questions sur Nour — ses projets, compétences, ou parcours.",
    ],
  },

  // ─── Who is Nour ───────────────────────────────────────────────────────────
  {
    id: 'name',
    patterns: [
      'name', 'nour', 'moulehem', 'who', 'yourself', 'introduce',
      'about', 'présente', 'présenter', 'elle', 'person',
    ],
    responses: [
      "Nour Ben Moulehem is a software engineering student at ESPRIT (Tunisia). She builds full-stack web and mobile apps, and is currently deepening her DevOps and cloud skills.",
      "That's Nour — a developer and engineering student based in Tunisia. She's worked on MERN dashboards, React Native apps, and has deployed Kubernetes clusters on OpenStack.",
    ],
  },

  // ─── Education ─────────────────────────────────────────────────────────────
  {
    id: 'education',
    patterns: [
      'school', 'study', 'university', 'esprit', 'istic', 'degree',
      'bachelor', 'education', 'student', 'graduate', 'cs',
      'engineering', 'academic', 'formation', 'études', 'diplôme',
      'licence', 'master', 'cursus',
    ],
    responses: [
      "Nour studied Computer Science at ISTIC (Bachelor's, 2022–2024), then moved to ESPRIT for a Software Engineering degree (2024–present).",
      "She's currently enrolled in Software Engineering at ESPRIT. Before that she completed a CS Bachelor's at ISTIC between 2022 and 2024.",
      "Two schools: ISTIC for her CS Bachelor's (2022–2024), and ESPRIT where she's currently studying Software Engineering.",
    ],
  },

  // ─── Internship ────────────────────────────────────────────────────────────
  {
    id: 'internship',
    patterns: [
      'internship', 'experience', 'attijari', 'bank', 'intern',
      'worked', 'professional', 'stage', 'entreprise', 'travail',
      'company', 'work experience',
    ],
    responses: [
      "Nour completed two internships at Attijari Bank: MERN stack developer (June–August 2023), then mobile developer with React Native and Spring Boot (February–May 2024).",
      "She interned twice at Attijari Bank — first as a MERN developer building a monitoring dashboard, then as a mobile developer working on an accessible banking app.",
      "Both internships were at Attijari Bank. First one was web-focused (MERN stack), second was mobile (React Native + Spring Boot). Different stacks, same bank.",
    ],
  },

  // ─── Projects overview ─────────────────────────────────────────────────────
  {
    id: 'projects',
    patterns: [
      'project', 'built', 'portfolio', 'made', 'created',
      'developed', 'application', 'app', 'work', 'réalisations',
      'projets', 'applications',
    ],
    responses: [
      "Nour has three main projects: WeBank Monitoring (MERN dashboard with JWT auth and real-time chat), Inclusa (e-learning for hearing-impaired users with sign language detection), and WeBank Mobile (accessible React Native banking app with a BERT-powered assistant).",
      "Three projects: (1) WeBank Monitoring — MERN stack with role-based access. (2) Inclusa — accessible e-learning with ML sign language detection. (3) WeBank Mobile — WCAG-compliant app, 20% accessibility improvement, built with the Ibsar Association.",
    ],
  },

  // ─── WeBank web ────────────────────────────────────────────────────────────
  {
    id: 'webank',
    patterns: [
      'webank', 'monitoring', 'dashboard', 'jwt', 'mern',
      'real-time', 'chat', 'role', 'access control', 'mongodb',
      'express', 'surveillance',
    ],
    responses: [
      "WeBank Monitoring is a MERN stack web app built during Nour's first internship. It has interactive dashboards, JWT authentication, role-based access control, and real-time internal chat.",
      "The WeBank dashboard (MongoDB, Express, React, Node.js) gives bank staff real-time monitoring, secure logins with role-based permissions, and an internal chat system.",
    ],
  },

  // ─── Inclusa ───────────────────────────────────────────────────────────────
  {
    id: 'inclusa',
    patterns: [
      'inclusa', 'elearning', 'learning', 'hearing', 'impaired',
      'sign', 'language', 'deaf', 'javafx', 'symfony', 'sourd',
      'malentendant', 'langue des signes', 'accessibilité', 'video',
      'conference', 'desktop',
    ],
    responses: [
      "Inclusa is an e-learning platform built for hearing-impaired users. It includes chat, video conferencing, and real-time sign language detection using ML. Tech stack: JavaFX (desktop), Symfony (web), MySQL.",
      "Inclusa was built to make online learning accessible to deaf and hearing-impaired students. It integrates ML-based sign language recognition so users can communicate naturally in real time.",
    ],
  },

  // ─── WeBank Mobile ─────────────────────────────────────────────────────────
  {
    id: 'webank_mobile',
    patterns: [
      'mobile', 'react native', 'spring boot', 'bert', 'redux',
      'wcag', 'ibsar', 'postgresql', 'virtual assistant', 'intent',
      'accessibility', 'accessible', 'bancaire', 'appli mobile',
      'nlp', 'recognition',
    ],
    responses: [
      "WeBank Mobile is a WCAG-compliant banking app built with React Native and Spring Boot, with a BERT-based virtual assistant for intent recognition. It improved the app's accessibility score by 20%, built in collaboration with the Ibsar Association.",
      "Her most technically rich project: React Native frontend, Spring Boot backend, PostgreSQL, Redux state management, and a BERT model for understanding user intents in the virtual assistant. Built with accessibility as the core requirement.",
    ],
  },

  // ─── Skills ────────────────────────────────────────────────────────────────
  {
    id: 'skills',
    patterns: [
      'skill', 'tech', 'stack', 'language', 'framework', 'tool',
      'technologies', 'familiar', 'proficient', 'expertise',
      'programming', 'code', 'compétences', 'maîtrise', 'sait',
      'connais', 'utilise', 'react', 'node', 'typescript', 'java',
    ],
    responses: [
      "Nour's stack: React, Node.js, Express, MongoDB (MERN) for web — React Native + Spring Boot for mobile — Java (JavaFX), Symfony/PHP, PostgreSQL, MySQL. On infrastructure: Docker, Kubernetes, OpenStack, Linux.",
      "Full-stack web (MERN), mobile (React Native + Spring Boot), some ML integration (BERT, sign language detection), and hands-on DevOps with Docker, k8s, and OpenStack.",
    ],
  },

  // ─── DevOps / Infra ────────────────────────────────────────────────────────
  {
    id: 'devops',
    patterns: [
      'devops', 'kubernetes', 'k8s', 'openstack', 'docker',
      'linux', 'cloud', 'deploy', 'infra', 'infrastructure',
      'container', 'cluster', 'server', 'ops', 'ci', 'cd',
      'pipeline', 'helm', 'orchestration', 'vm', 'virtualisation',
    ],
    responses: [
      "Nour has deployed a Kubernetes cluster on self-hosted OpenStack infrastructure — not just tutorial-level work. She runs Linux daily and is currently leaning more into DevOps and cloud engineering.",
      "On the DevOps side: Docker, Kubernetes on OpenStack, and Linux. She's actively building more in this space alongside her software engineering studies — it's where she's heading.",
    ],
  },

  // ─── Machine Learning ──────────────────────────────────────────────────────
  {
    id: 'ml',
    patterns: [
      'ml', 'machine learning', 'ai', 'artificial intelligence',
      'bert', 'model', 'nlp', 'detection', 'training', 'neural',
      'deep learning', 'intelligence artificielle', 'apprentissage',
    ],
    responses: [
      "Nour has used ML in two projects: real-time sign language detection in Inclusa, and a BERT-based intent recognition model for the WeBank Mobile virtual assistant.",
      "Her ML experience is applied rather than research: integrating BERT for NLP in a mobile app, and running a sign language detection model in an e-learning platform.",
    ],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  {
    id: 'contact',
    patterns: [
      'contact', 'email', 'reach', 'hire', 'linkedin', 'github',
      'touch', 'connect', 'social', 'message', 'joindre',
      'contacter', 'mail', 'profil',
    ],
    responses: [
      "You can reach Nour at benmoulehem.nour@gmail.com, or find her on GitHub and LinkedIn at @nourbenmoulehem. There's also a contact form on this page.",
      "Email: benmoulehem.nour@gmail.com — LinkedIn and GitHub: /nourbenmoulehem on both. Or just use the contact form at the bottom of the page.",
    ],
  },

  // ─── Resume ────────────────────────────────────────────────────────────────
  {
    id: 'resume',
    patterns: ['cv', 'resume', 'download', 'pdf', 'télécharger'],
    responses: [
      "Nour's CV is available directly on the site — hit the 'Get My Resume' button in the hero section or the 'Resume' link in the navbar.",
      "You can download her resume as a PDF from the navbar or the hero section button.",
    ],
  },

  // ─── Location ──────────────────────────────────────────────────────────────
  {
    id: 'location',
    patterns: [
      'where', 'location', 'country', 'live', 'based', 'tunisia',
      'city', 'from', 'tunis', 'pays', 'ville', 'habite', 'origine',
    ],
    responses: [
      "Nour is based in Tunisia, currently studying at ESPRIT.",
      "She's in Tunisia.",
    ],
  },

  // ─── Availability ──────────────────────────────────────────────────────────
  {
    id: 'availability',
    patterns: [
      'available', 'open', 'opportunity', 'freelance', 'recruit',
      'hiring', 'position', 'role', 'looking', 'seek', 'cherche',
      'disponible', 'recrutement', 'poste', 'offre',
    ],
    responses: [
      "Nour is open to internship opportunities and collaborations. Use the contact form or email her directly at benmoulehem.nour@gmail.com.",
      "She's a student and open to interesting opportunities — internships, collaborations, or freelance projects. Reach out directly.",
    ],
  },

  // ─── Languages spoken ──────────────────────────────────────────────────────
  {
    id: 'languages',
    patterns: [
      'speak', 'spoken', 'arabic', 'french', 'english', 'langue',
      'parle', 'arabe', 'anglais', 'français', 'language spoken',
    ],
    responses: [
      "Nour speaks Arabic (native), French (fluent), and English (professional level).",
      "Three languages: Arabic natively, French fluently, and English at a professional level.",
    ],
  },

  // ─── Hobbies / Interests ───────────────────────────────────────────────────
  {
    id: 'interests',
    patterns: [
      'hobby', 'hobbies', 'interest', 'passion', 'like', 'enjoy',
      'outside', 'besides', 'fun', 'loisir', 'aime', 'passions',
    ],
    responses: [
      "Outside of code, Nour is into Linux tinkering, gaming, and keeping up with DevOps and cloud tooling. The gaming setup in the contact section is hers.",
      "She enjoys Linux, cloud infrastructure, and gaming. The 3D gaming PC on this portfolio is a nod to that — and a demo of her Three.js skills.",
    ],
  },

  // ─── Fallback ──────────────────────────────────────────────────────────────
  {
    id: 'fallback',
    patterns: [],
    responses: [
      "I didn't quite catch that. Try asking about Nour's projects, skills, education, DevOps experience, or how to get in touch!",
      "Not sure I understood. You can ask things like: 'What projects did she work on?', 'What's her tech stack?', or 'How do I contact her?'",
      "Hmm, I'm not sure about that one. I know about Nour's education, internships, projects, skills, and contact info — try one of those!",
    ],
  },
]
