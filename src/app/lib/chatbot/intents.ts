/**
 * INTENTS
 *
 * Each intent has:
 *  - patterns:  keywords the matcher scores against
 *  - responses: main answers (one picked at random)
 *  - followUp:  deeper answers when the user says "tell me more" after this intent
 *
 * Voice: casual, a little sarcastic, proud but not arrogant.
 * Think of it as Nour's digital alter ego — knows everything, available 24/7,
 * doesn't need coffee (but Nour does).
 */

export type Intent = {
  id: string
  patterns: string[]
  responses: string[]
  followUp?: string[]
}

export const intents: Intent[] = [

  // ─── Greeting ────────────────────────────────────────────────────────────
  {
    id: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'bonjour', 'salut', 'howdy', 'sup', 'coucou', 'bonsoir', 'yo', 'hola', 'greetings'],
    responses: [
      "Hey! I'm basically Nour but in chatbot form — ask me anything about her work, stack, or story.",
      "Hello! Nour built me from scratch so I could answer your questions while she's busy deploying things. What do you want to know?",
      "Yoo! Ask me about Nour's projects, skills, DevOps adventures, or just say hi — I'm bored either way.",
      "Salut ! Je peux répondre en français aussi si tu veux. Qu'est-ce que tu veux savoir sur Nour ?",
    ],
    followUp: [
      "Still here! Ask me literally anything — projects, stack, education, how to hire her, whatever.",
    ],
  },

  // ─── Who is Nour ─────────────────────────────────────────────────────────
  {
    id: 'name',
    patterns: ['name', 'nour', 'moulehem', 'who', 'yourself', 'introduce', 'about', 'présente', 'elle', 'person', 'developer', 'girl'],
    responses: [
      "Nour Ben Moulehem — software engineering student at ESPRIT, Tunisia. She builds full-stack web and mobile apps, and has a soft spot for Linux and breaking things in dev so they don't break in prod.",
      "That's Nour. Developer, engineering student, Linux nerd, and apparently someone who builds chatbots for her portfolio instead of just putting her picture there.",
    ],
    followUp: [
      "She's based in Tunisia, currently at ESPRIT for Software Engineering. Before that she did a CS Bachelor's at ISTIC. Three internships (Attijari Bank twice, Enda Tamweel), five real projects including a full private cloud from scratch, one 3D gaming PC in the contact form.",
      "Beyond the resume stuff — she's into DevOps, gaming, and figuring out how things work at the infrastructure level. The kind of developer who reads release notes for fun.",
    ],
  },

  // ─── Education ───────────────────────────────────────────────────────────
  {
    id: 'education',
    patterns: ['school', 'study', 'university', 'esprit', 'istic', 'degree', 'bachelor', 'education', 'student', 'graduate', 'engineering', 'academic', 'formation', 'études', 'diplôme', 'licence', 'cursus'],
    responses: [
      "CS Bachelor's at ISTIC (2022–2024), now doing Software Engineering at ESPRIT (2024–present). Chose ESPRIT specifically for the engineering depth — and to suffer more, presumably.",
      "Two schools: ISTIC for the CS Bachelor's (2022–2024), then ESPRIT for Software Engineering (2024–now). Still very much in student mode, but the kind that ships things.",
    ],
    followUp: [
      "ESPRIT is one of the top engineering schools in Tunisia. The Software Engineering track is heavy on architecture, systems, and real project work — which is why she's also doing DevOps and infrastructure stuff on the side. Can't just study theory.",
    ],
  },

  // ─── Internship ──────────────────────────────────────────────────────────
  {
    id: 'internship',
    patterns: ['internship', 'experience', 'attijari', 'bank', 'intern', 'worked', 'professional', 'stage', 'entreprise', 'company', 'job', 'enda', 'tamweel'],
    responses: [
      "Three internships total: twice at Attijari Bank (MERN dev 2023, then mobile dev 2024), and most recently at Enda Tamweel (Jul–Aug 2025) building Prospecti — a location-based prospecting app for portfolio managers.",
      "She's interned three times: Attijari Bank twice (MERN dashboard, then a BERT-powered accessible mobile app), and Enda Tamweel where she built Prospecti with React Native + Spring Boot and set up a GitLab CI/CD pipeline.",
    ],
    followUp: [
      "At Attijari Bank: first time was a MERN monitoring dashboard with JWT auth and real-time chat. Second time: React Native + Spring Boot + BERT for intent recognition — harder project, more impact. At Enda Tamweel: she built Prospecti, which adds GPS-based prospecting to replace a paper process, and set up the whole CI/CD pipeline from scratch on a self-hosted runner.",
    ],
  },

  // ─── Projects overview ───────────────────────────────────────────────────
  {
    id: 'projects',
    patterns: ['project', 'built', 'portfolio', 'made', 'created', 'developed', 'application', 'app', 'réalisations', 'projets'],
    responses: [
      "Five projects: WeBank Monitoring (MERN dashboard), Inclusa (e-learning for deaf users with sign language detection), WeBank Mobile (accessible React Native banking app with BERT), Prospecti (location-based prospecting app for Enda Tamweel), and a full private cloud built from scratch on OpenStack + Kubernetes. Each one harder than the last.",
      "The hits: (1) WeBank Monitoring — MERN, JWT, real-time chat. (2) Inclusa — accessible e-learning with ML sign language detection. (3) WeBank Mobile — WCAG-compliant, BERT-powered, 20% accessibility improvement. (4) Prospecti — React Native + Spring Boot + GitLab CI/CD. (5) Private Cloud — 6-node OpenStack + automated k8s + Prometheus/Grafana. Not bad for a student.",
    ],
    followUp: [
      "If you want details on a specific one, just ask! WeBank (web), Inclusa, WeBank Mobile, Prospecti, or the private cloud — each has a different tech story.",
    ],
  },

  // ─── WeBank web ──────────────────────────────────────────────────────────
  {
    id: 'webank',
    patterns: ['webank', 'monitoring', 'dashboard', 'jwt', 'mern', 'real-time', 'chat', 'role', 'mongodb', 'express', 'surveillance'],
    responses: [
      "WeBank Monitoring: a MERN stack web app with interactive dashboards, JWT authentication, role-based access control, and real-time internal chat. Built during her first Attijari Bank internship — first real production project.",
      "The WeBank dashboard gives bank staff real-time data monitoring, secure role-based login, and an internal chat system. MongoDB + Express + React + Node. The real-time chat was the fun part to build.",
    ],
    followUp: [
      "The role-based access control was the most complex part — different views and permissions depending on whether you're a standard user or an admin. JWT handling on both frontend and backend. Real-time chat used WebSockets. First time she shipped something that actual bank employees used daily.",
    ],
  },

  // ─── Inclusa ─────────────────────────────────────────────────────────────
  {
    id: 'inclusa',
    patterns: ['inclusa', 'elearning', 'learning', 'hearing', 'impaired', 'sign', 'language', 'deaf', 'javafx', 'symfony', 'sourd', 'accessibilité', 'video', 'conference', 'desktop'],
    responses: [
      "Inclusa is an e-learning platform built for hearing-impaired users — chat, video conferencing, and real-time sign language detection via ML. JavaFX for desktop, Symfony for web, MySQL. Accessibility wasn't an afterthought, it was the whole point.",
      "The most socially meaningful project: making e-learning actually usable for deaf students. Sign language detection in real time, so users can communicate naturally. Built with JavaFX (desktop), Symfony (web backend), MySQL.",
    ],
    followUp: [
      "The sign language detection is the standout part technically — integrating an ML model into a real-time video feed in a desktop JavaFX app is not trivial. The Symfony backend handles course management, user accounts, and the web interface. Two frontends, one backend, real impact.",
    ],
  },

  // ─── WeBank Mobile ───────────────────────────────────────────────────────
  {
    id: 'webank_mobile',
    patterns: ['mobile', 'react native', 'spring boot', 'bert', 'redux', 'wcag', 'ibsar', 'postgresql', 'virtual assistant', 'intent', 'accessible', 'bancaire'],
    responses: [
      "WeBank Mobile: WCAG-compliant React Native banking app with a BERT-powered virtual assistant for intent recognition. Accessibility score went up 20%. Built in collaboration with the Ibsar Association. Most technically rich project she's done so far.",
      "React Native frontend, Spring Boot backend, PostgreSQL, Redux, and a BERT model doing NLP intent recognition so visually impaired users can interact naturally. 20% accessibility improvement. Real partnership with Ibsar Association.",
    ],
    followUp: [
      "The BERT model is the most interesting part — instead of rigid menus, users describe what they want and the assistant figures out the intent. That required training data, model integration, and a clean API between the ML layer and the mobile app. The WCAG compliance work was done hand-in-hand with Ibsar Association, who work with visually impaired people in Tunisia.",
    ],
  },

  // ─── Prospecti ───────────────────────────────────────────────────────────
  {
    id: 'prospecti',
    patterns: ['prospecti', 'enda', 'tamweel', 'prospecting', 'prospect', 'gps', 'location', 'fintech', 'microfinance', 'field', 'agent', 'portfolio manager', 'onboarding', 'gitlab', 'ci/cd', 'pipeline', 'runner', 'self-hosted'],
    responses: [
      "Prospecti is a mobile app built during her internship at Enda Tamweel (Jul–Aug 2025). It helps portfolio managers find and track potential clients using GPS — replacing a paper-based process with an on-the-go digital workflow. Full stack: React Native + Spring Boot + React Admin.",
      "Enda Tamweel internship, summer 2025: she built Prospecti, a location-based prospecting app for field agents, and set up a GitLab CI/CD pipeline from scratch on a self-hosted runner for both the Spring Boot backend and React Native frontend. Real DevOps, real fintech impact.",
    ],
    followUp: [
      "The interesting parts: the GPS capture lets agents log a prospect's location on the spot instead of writing it down. The CI/CD pipeline she set up automates the full build and test cycle — build and test stages for both Spring Boot and React Native, running on a self-hosted GitLab runner. That's the kind of infrastructure work most interns don't touch. The app is helping Enda Tamweel modernize their prospecting across Tunisia.",
    ],
  },

  // ─── Skills ──────────────────────────────────────────────────────────────
  {
    id: 'skills',
    patterns: ['skill', 'tech', 'stack', 'language', 'framework', 'tool', 'technologies', 'familiar', 'proficient', 'expertise', 'programming', 'code', 'compétences', 'react', 'node', 'typescript', 'java'],
    responses: [
      "Web: React, Node.js, Express, MongoDB (full MERN). Mobile: React Native + Spring Boot. Also Java/JavaFX, Symfony/PHP, PostgreSQL, MySQL. Infrastructure: Docker, Kubernetes, OpenStack, Linux. And enough TypeScript to be dangerous.",
      "Full-stack web (MERN), mobile (React Native), some Java and PHP for variety, and hands-on DevOps — Docker, k8s on OpenStack, Linux daily. She picks up whatever the project needs.",
    ],
    followUp: [
      "The DevOps side is where she's actively growing right now — she's already deployed a k8s cluster on self-hosted OpenStack, which is way beyond 'I did a Docker tutorial'. On the ML side, she's worked with BERT for NLP and run a sign language detection model. Not an ML researcher, but knows how to integrate and ship ML.",
    ],
  },

  // ─── DevOps / Infra ──────────────────────────────────────────────────────
  {
    id: 'devops',
    patterns: ['devops', 'kubernetes', 'k8s', 'openstack', 'docker', 'linux', 'cloud', 'deploy', 'infra', 'infrastructure', 'container', 'cluster', 'server', 'ops', 'pipeline', 'vm', 'orchestration', 'gitlab', 'ci/cd', 'runner', 'ansible', 'heat', 'prometheus', 'grafana', 'monitoring', 'calico', 'neutron', 'nova', 'cinder'],
    responses: [
      "She built a full private cloud from scratch: 6+ node OpenStack (Epoxy) cluster, then automated Kubernetes provisioning on top using Heat and Ansible. Also set up GitLab CI/CD on a self-hosted runner at a fintech internship. Linux daily driver. This is not 'I did a Docker tutorial'.",
      "Two layers of real DevOps: (1) Private cloud — multi-node OpenStack + k8s automated with Heat (IaC) + Ansible, Calico CNI, Prometheus + Grafana monitoring stack. (2) CI/CD pipeline for Prospecti at Enda Tamweel — build and test stages for Spring Boot and React Native on a self-hosted GitLab runner.",
    ],
    followUp: [
      "The private cloud project is the deep one: OpenStack Epoxy across 6+ nodes (Nova/Neutron/Cinder), Kubernetes fully provisioned via Heat templates and Ansible — zero manual steps after initial config. She hit a real CNI compatibility issue (Calico IPIP doesn't work over OpenStack's overlay) and fixed it by migrating to VXLAN tunneling. That's the kind of networking problem you only find by actually running it.",
    ],
  },

  // ─── Private Cloud ───────────────────────────────────────────────────────
  {
    id: 'cloud_infra',
    patterns: ['private cloud', 'openstack', 'epoxy', 'multi-node', 'nova', 'neutron', 'cinder', 'heat', 'ansible', 'calico', 'vxlan', 'ipip', 'cni', 'prometheus', 'grafana', 'monitoring', 'iac', 'orchestration', 'compute node', 'controller'],
    responses: [
      "The private cloud project: a full multi-node OpenStack (Epoxy) deployment across 6+ compute nodes + dedicated controller — Nova, Neutron, Cinder all configured from scratch. Kubernetes provisioning automated with Heat (IaC) and Ansible. Monitoring with Prometheus + Grafana. Not a lab exercise.",
      "She designed and deployed a production-grade private cloud: OpenStack Epoxy managing compute, networking, and storage across 6+ nodes. K8s cluster brought up automatically via Heat templates + Ansible playbooks. Hit a real CNI bug (Calico IPIP incompatible with OpenStack overlay) and resolved it by migrating to VXLAN. Then deployed Spring Boot + Angular + MySQL on top and wired up full observability with Prometheus and Grafana.",
    ],
    followUp: [
      "The Calico fix is the most interesting part technically: Calico's default IPIP encapsulation conflicts with OpenStack's own overlay networking, causing pod-to-pod traffic to fail across nodes. Diagnosing that, understanding why, and migrating to VXLAN tunneling mode is not something you figure out from a tutorial — you have to understand both the k8s networking model and OpenStack's Neutron layer. She did.",
    ],
  },

  // ─── ML ──────────────────────────────────────────────────────────────────
  {
    id: 'ml',
    patterns: ['ml', 'machine learning', 'ai', 'artificial intelligence', 'bert', 'model', 'nlp', 'detection', 'neural', 'deep learning', 'intelligence artificielle', 'apprentissage'],
    responses: [
      "Applied ML in two projects: sign language detection in Inclusa, and BERT for intent recognition in WeBank Mobile. She uses ML where it solves a real problem — not because it's trendy.",
      "BERT for NLP (WeBank Mobile virtual assistant) and a sign language detection model (Inclusa). Integration-level ML work — picking the right model, building the API, making it work in a real app.",
    ],
    followUp: [
      "She's not doing ML research — she's integrating it into products. That's actually harder in some ways: you have to understand the model well enough to use it correctly, build a clean API around it, and make sure it performs in a real-time environment. Both projects had strict accessibility requirements, which added another constraint.",
    ],
  },

  // ─── Contact ─────────────────────────────────────────────────────────────
  {
    id: 'contact',
    patterns: ['contact', 'email', 'reach', 'hire', 'linkedin', 'github', 'touch', 'connect', 'social', 'message', 'joindre', 'contacter', 'mail', 'profil'],
    responses: [
      "Email: benmoulehem.nour@gmail.com — GitHub and LinkedIn both at /nourbenmoulehem. Or just use the contact form at the bottom of this page. She reads her emails.",
      "Best bet: email her at benmoulehem.nour@gmail.com, or find her on GitHub/LinkedIn as nourbenmoulehem. She's responsive — unlike some developers.",
    ],
    followUp: [
      "If you're reaching out about a job or collaboration, the contact form is probably the fastest. If you want to look at her code first, GitHub is github.com/nourbenmoulehem.",
    ],
  },

  // ─── Resume ──────────────────────────────────────────────────────────────
  {
    id: 'resume',
    patterns: ['cv', 'resume', 'download', 'pdf', 'télécharger'],
    responses: [
      "Her CV is right here on the site — 'Get My Resume' button in the hero section, or 'Resume' in the navbar. No Drive link, no redirects, just a PDF.",
      "Download button is in the navbar and the hero section. It's a PDF served directly from the site.",
    ],
  },

  // ─── Location ────────────────────────────────────────────────────────────
  {
    id: 'location',
    patterns: ['where', 'location', 'country', 'live', 'based', 'tunisia', 'city', 'from', 'tunis', 'pays', 'habite', 'origine'],
    responses: [
      "Tunisia. Specifically studying at ESPRIT, which is in Tunis.",
      "Based in Tunisia. She doesn't need to be remote to work with international teams — she already does.",
    ],
  },

  // ─── Availability ────────────────────────────────────────────────────────
  {
    id: 'availability',
    patterns: ['available', 'open', 'opportunity', 'freelance', 'recruit', 'hiring', 'position', 'role', 'looking', 'seek', 'cherche', 'disponible', 'recrutement', 'offre'],
    responses: [
      "She's open to internships and collaborations. Email benmoulehem.nour@gmail.com or use the contact form — she'll get back to you.",
      "Currently a student but actively looking for opportunities. Internships, freelance, collaborations — reach out and see if it's a fit.",
    ],
  },

  // ─── Languages spoken ────────────────────────────────────────────────────
  {
    id: 'languages',
    patterns: ['speak', 'spoken', 'arabic', 'french', 'english', 'langue', 'parle', 'arabe', 'anglais', 'français'],
    responses: [
      "Arabic (native), French (fluent), English (professional). Three languages, one developer.",
      "She speaks Arabic, French, and English. So she can read your error messages, Stack Overflow answers, and LinkedIn messages without Google Translate.",
    ],
  },

  // ─── Interests / Hobbies ─────────────────────────────────────────────────
  {
    id: 'interests',
    patterns: ['hobby', 'hobbies', 'interest', 'passion', 'enjoy', 'outside', 'besides', 'fun', 'loisir', 'aime', 'gaming', 'game', 'gamer'],
    responses: [
      "Linux tinkering, gaming, and going deeper on cloud and infrastructure. The 3D gaming PC in the contact section is hers — and a flex that she knows Three.js.",
      "Coding, gaming, breaking Linux configs and fixing them, and infrastructure rabbit holes at 2am. Standard developer hobbies.",
    ],
    followUp: [
      "The gaming setup you see in 3D on this site is a rendering of her actual setup. She built the Three.js integration to showcase that she can do 3D in the browser — it's a demo disguised as decoration.",
    ],
  },

  // ─── 3D Model ────────────────────────────────────────────────────────────
  {
    id: 'threed',
    patterns: ['3d', 'three', 'model', 'setup', 'pc', 'gaming', 'threejs', 'fiber', 'webgl', 'animation'],
    responses: [
      "That 3D gaming PC is built with Three.js and React Three Fiber. It's her actual setup rendered in WebGL — a technical flex dressed as decoration.",
      "React Three Fiber + Three.js. The model is CC-BY licensed from Sketchfab, but integrating it into a Next.js app with proper TypeScript types and lighting? That part's hers.",
    ],
    followUp: [
      "Most portfolio devs either use a template or skip 3D entirely because it's complex. She loaded a GLTF model, wrapped it in React Three Fiber, set up lighting with an environment preset, and made it responsive. It's the kind of thing that's impressive to anyone who's tried it.",
    ],
  },

  // ─── Are you a bot / are you real ────────────────────────────────────────
  {
    id: 'bot_question',
    patterns: ['bot', 'robot', 'real', 'ai', 'human', 'talking', 'automated', 'chatbot', 'fake', 'gpt', 'llm', 'generated', 'work', 'works', 'function', 'coded', 'built', 'made', 'engine', 'nlp', 'scoring'],
    responses: [
      "I'm a rule-based chatbot built from scratch by Nour — no GPT, no APIs, just pure TypeScript logic. Tokenization, intent matching, scoring. Very old school, very intentional.",
      "100% handmade. No OpenAI, no Anthropic, no external API. Nour built the NLP engine herself: preprocessor → intent scoring → response selection. Ask me how I work if you're curious.",
      "Good question. I'm not an LLM. I'm a pattern-matching intent classifier Nour coded from scratch. I tokenize your input, remove stopwords, score each intent, and return the best match. Simple, transparent, and entirely hers.",
    ],
    followUp: [
      "The architecture: preprocessor strips your text down to meaningful tokens, the matcher scores each intent by counting how many tokens appear in its patterns, and the highest scorer wins. Follow-up context is tracked across turns. Took a few hours to build, runs entirely in the browser.",
    ],
  },

  // ─── Compliments ─────────────────────────────────────────────────────────
  {
    id: 'compliment',
    patterns: ['amazing', 'impressive', 'cool', 'great', 'nice', 'love', 'beautiful', 'awesome', 'incredible', 'fantastic', 'brilliant', 'talented', 'good', 'wow', 'excellent', 'perfect'],
    responses: [
      "I'll pass that along! Nour will probably pretend to be humble and then screenshot this.",
      "Aww, thanks! She worked hard on this. Now go hit that contact button — compliments don't pay rent but job offers do.",
      "Noted! Nour says thank you (she's blushing, probably). Anything specific you liked?",
    ],
  },

  // ─── Roast / rude ────────────────────────────────────────────────────────
  {
    id: 'rude',
    patterns: ['boring', 'bad', 'sucks', 'terrible', 'ugly', 'hate', 'worst', 'awful', 'mediocre', 'basic', 'overrated', 'mid'],
    responses: [
      "Brutal. Noted. Nour will cry into her mechanical keyboard and then ship a better version.",
      "Harsh! If you have actual feedback, the contact form is right there. If you're just vibing — fair enough, we all have bad days.",
      "I'll forward your feedback to Nour. She'll add it to the list of things that motivate her at 2am.",
    ],
  },

  // ─── Thanks ──────────────────────────────────────────────────────────────
  {
    id: 'thanks',
    patterns: ['thanks', 'thank', 'merci', 'thx', 'ty', 'appreciate', 'cheers'],
    responses: [
      "Anytime! If Nour's work impressed you, her contact info is right here — just saying.",
      "You're welcome! Feel free to ask more — I'm literally built for this.",
      "Happy to help. And if you're recruiting — that contact form isn't going to fill itself.",
    ],
  },

  // ─── Goodbye ─────────────────────────────────────────────────────────────
  {
    id: 'goodbye',
    patterns: ['bye', 'goodbye', 'ciao', 'see you', 'au revoir', 'later', 'peace', 'take care', 'farewell', 'bbye'],
    responses: [
      "See you! Don't forget to check the GitHub — nourbenmoulehem.",
      "Take care! If you want to hire Nour, now's a great time to use that contact form before you forget.",
      "Bye! Nour appreciates you stopping by — even if you only talked to her chatbot.",
    ],
  },

  // ─── Age ─────────────────────────────────────────────────────────────────
  {
    id: 'age',
    patterns: ['age', 'old', 'born', 'year', 'young'],
    responses: [
      "She started her CS Bachelor's in 2022, so do the math. Young enough to stay up debugging until 3am, experienced enough to not enjoy it.",
      "Young — and already has two internships, three projects, and a k8s cluster to show for it.",
    ],
  },

  // ─── Off-topic ───────────────────────────────────────────────────────────
  {
    id: 'offtopic',
    patterns: ['weather', 'food', 'movie', 'music', 'sport', 'football', 'news', 'politics', 'love', 'relationship', 'single', 'boyfriend', 'girlfriend', 'marry', 'date', 'pizza', 'coffee', 'recipe'],
    responses: [
      "Ha — I'm a portfolio chatbot, not Google. Ask me about Nour's work and I'm very useful. Ask me about anything else and... less so.",
      "That's above my pay grade. I only know Nour's professional life — projects, stack, education, contact info. Try me on one of those.",
      "Nice try. I'm a very specialised chatbot. Very. Ask me about Nour's dev work instead.",
    ],
  },

  // ─── Easter egg: PewDiePie sticker on the 3D model ───────────────────────
  {
    id: 'easter_egg',
    patterns: ['pewdiepie', 'sticker', 'nvidia', 'gigabyte', 'aorus', 'rgb', 'keyboard'],
    responses: [
      "You actually looked at the 3D model closely enough to notice that? Nour is impressed. Also yes, there's a PewDiePie sticker on the PC. Don't read too much into it.",
      "Okay you found an easter egg. The 3D model is her actual gaming setup — GLTF model loaded with React Three Fiber. Look close enough and you'll find more details.",
    ],
  },

  // ─── Why hire / what makes her special ───────────────────────────────────
  {
    id: 'hire_pitch',
    patterns: ['hire', 'special', 'unique', 'different', 'strengths', 'outstanding', 'recruit', 'stand', 'distinguishes', 'remarkable', 'impressive', 'choose', 'pick'],
    responses: [
      "A few things that actually stand out: she built a 6-node private cloud from scratch (OpenStack + automated k8s + Prometheus/Grafana), set up GitLab CI/CD at a fintech internship, built a WCAG-compliant app with an accessibility NGO, integrated BERT for NLP in a mobile app, and built this chatbot without any API. She ships real things.",
      "Honestly? Three internships, five projects, and a private cloud running on her own hardware. Attijari Bank called her back for a harder project. At Enda Tamweel she built the app AND the CI/CD pipeline. She's a student who already thinks like an engineer.",
      "She's cross-stack (MERN, React Native, Spring Boot, Java, PHP) AND she's done real infrastructure work: multi-node OpenStack, Kubernetes IaC with Heat + Ansible, CNI debugging, observability pipelines. That combination — full-stack dev + cloud architecture — is rare at her level.",
    ],
    followUp: [
      "The clearest signal: her projects get harder every time. MERN dashboard → accessible mobile app with BERT → location-based fintech app + CI/CD pipeline → full private cloud with IaC and monitoring. That's not a student padding a resume — that's someone who keeps raising the bar on purpose.",
    ],
  },

  // ─── Fallback ────────────────────────────────────────────────────────────
  {
    id: 'fallback',
    patterns: [],
    responses: [
      "Hmm, I didn't catch that. Try asking about her projects, stack, DevOps experience, education, or how to get in touch!",
      "I'm a purpose-built chatbot — smart about Nour, clueless about everything else. Try: 'what projects did she work on?' or 'what's her tech stack?'",
      "Not sure I understood. You can ask things like: 'tell me about Inclusa', 'what does she know about DevOps', or 'how do I contact her?'",
    ],
  },
]
