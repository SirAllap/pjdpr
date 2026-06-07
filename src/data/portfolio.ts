// ─── Asset imports ────────────────────────────────────────────────────────────
import tudietista       from '../assets/dietista_full-low.webp'
import alaveraHero      from '../assets/alavera_hero.webp'
import alaveraApp       from '../assets/alavera_app.webp'
import pawcook          from '../assets/pawcook.webp'
import photoMiranda     from '../assets/hotel_miranda.webp'
import photoTravl       from '../assets/travl_dashboard.webp'
import oxygenPics       from '../assets/oxygen_pics.webp'
import oxygenshop       from '../assets/oxygen_shop.webp'
import peekbeats        from '../assets/peekbeats.webp'
import frogger          from '../assets/frogger.webp'
import gmf              from '../assets/gmf.webp'

// Tech icons
import js          from '../assets/technologies/js.png'
import ts          from '../assets/technologies/ts.png'
import html        from '../assets/technologies/html.png'
import css         from '../assets/technologies/css.png'
import php         from '../assets/technologies/php.png'
import scss        from '../assets/technologies/scss.png'
import aws         from '../assets/technologies/aws.png'
import react       from '../assets/technologies/react.png'
import node        from '../assets/technologies/node.png'
import mongo       from '../assets/technologies/mongo-db.png'
import npm         from '../assets/technologies/npm.png'
import vscode      from '../assets/technologies/vscode.png'
import vue         from '../assets/technologies/vue.png'
import mui         from '../assets/technologies/mui.png'
import reactRouter from '../assets/technologies/react_router.png'
import tailwind    from '../assets/technologies/tailwind.png'
import calendly    from '../assets/technologies/calendly.png'
import emailjs     from '../assets/technologies/emailjs.png'

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Tech {
  name: string
  icon?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl: string | null
  githubUrl: string | null
  isPrivate: boolean
  tech: Tech[]
  featured?: boolean
  tagline?: string
  gallery?: string[]
}

export interface ExperienceEntry {
  id: string
  title: string
  company: string
  companyUrl: string
  location: string
  date: string
  description: string
  type: 'work' | 'education'
  isCurrent?: boolean
}

// ─── Personal info ────────────────────────────────────────────────────────────
export const personal = {
  initials: 'DPR',
  name: 'David Pallarés Robaina',
  role: 'Backend Developer · Python · Django · React',
  location: 'Seville, Spain',
  codingSince: 2021,
  summary:
    'Backend-focused full-stack developer with experience building and shipping production web apps end to end — APIs, data models, frontends and deployment. Comfortable owning the full picture, reviewing teammates’ code, and keeping quality high as products move fast.',
  skills: [
    'Python', 'Django', 'PostgreSQL', 'Docker', 'React', 'TypeScript',
    'JavaScript', 'Node.js', 'Vue.js', 'REST APIs', 'Git & CI', 'AWS', 'Linux',
  ],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Professional working' },
  ],
  bio: [
    "I build full-stack apps that are solid under the hood and genuinely nice to use. Django, React, PostgreSQL and Docker are my home turf, but I'll happily reach for Node, Vue or whatever the job actually needs — new tools have never been the scary part.",
    "What I really care about is code that still makes sense six months later, and getting the foundations right from the start. API, frontend, or shipping the thing to production — I like owning the whole picture, not just my corner of it.",
    "Most of my time is spent in the terminal, living in Neovim. Vim motions have ruined every other editor for me — and honestly, I wouldn't have it any other way.",
  ],
  contact: {
    email: 'serallapdivad@gmail.com',
    phone: '+34 638492817',
    github: 'https://github.com/SirAllap',
    githubHandle: 'SirAllap',
    linkedin: 'https://www.linkedin.com/in/davidpallaresrobaina/',
    linkedinHandle: 'davidpallaresrobaina',
  },
}

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'alavera',
    title: 'Alavera TCG',
    tagline: 'Real-time multiplayer trading card game',
    description:
      'My most ambitious project: a production-grade, real-time multiplayer trading card game. A pure-Python game engine (zero framework coupling) drives a two-phase attack/defense battle system over WebSockets via Django Channels + Daphne, with Redis-backed matchmaking and presence and pluggable AI opponents — exposed through a Django 5 / DRF API and a React 19 + TypeScript SPA. Roughly 140K LOC across 13 domain modules and 86 models, secured with JWT (HttpOnly) + TOTP 2FA, and shipped on a containerized, observable stack: Docker, nginx load-balancing 3× WebSocket workers, PostgreSQL + pgBouncer, Celery, and Prometheus / Grafana / Loki — with 226 test suites in CI.',
    image: alaveraHero,
    gallery: [alaveraHero, alaveraApp],
    liveUrl: null,
    githubUrl: null,
    isPrivate: true,
    featured: true,
    tech: [
      { name: 'Django 5' },
      { name: 'DRF' },
      { name: 'Django Channels' },
      { name: 'Python' },
      { name: 'WebSockets' },
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Celery' },
      { name: 'Docker' },
      { name: 'Tailwind' },
    ],
  },
  {
    id: 'pawcook',
    title: 'PawCook',
    description:
      'Open-source nutrition & cooking tools for home-cooked dog and cat meals. PawCook computes daily portions against AAFCO / NRC / FEDIAF veterinary standards, flags toxic foods and safe cooking temperatures, and plans weekly meal rotations across a multi-pet household — it even tells you cut form, cook time and bag counts for batch-cooking. Built as a TypeScript pnpm + Turbo monorepo: a React + Vite web app, a pure-TypeScript nutrition engine, and JSON nutrition data, with i18n across 8 locales and a "followability-first" design principle.',
    image: pawcook,
    liveUrl: 'https://sirallap.github.io/pawcook/',
    githubUrl: 'https://github.com/SirAllap/pawcook',
    isPrivate: false,
    tech: [
      { name: 'TypeScript', icon: ts },
      { name: 'React', icon: react },
      { name: 'Node', icon: node },
      { name: 'CSS', icon: css },
      { name: 'npm', icon: npm },
    ],
  },
  {
    id: 'tudietista',
    title: 'Tu Dietista Online',
    description:
      'Independently designed and developed using modern web technologies. Features smooth navigation with React Router, responsive design with Tailwind, parallax effects, Calendly scheduling, and EmailJS contact forms.',
    image: tudietista,
    liveUrl: 'https://tudietistaonline-am.com/',
    githubUrl: null,
    isPrivate: true,
    tech: [
      { name: 'React', icon: react },
      { name: 'React Router', icon: reactRouter },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Calendly', icon: calendly },
      { name: 'EmailJS', icon: emailjs },
      { name: 'VSCode', icon: vscode },
    ],
  },
  {
    id: 'miranda',
    title: 'Hotel Miranda',
    description:
      'Built with HTML, CSS (Sass/Scss), and JavaScript with Swiper.js. Later integrated with SQL and transitioned to PHP using the BladeOne Template Engine following MVC pattern. A FrontEnd project from my Oxygen Academy mentorship.',
    image: photoMiranda,
    liveUrl: 'http://ec2-13-39-83-255.eu-west-3.compute.amazonaws.com/',
    githubUrl: 'https://github.com/SirAllap/miranda-hotel-php',
    isPrivate: false,
    tech: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JS', icon: js },
      { name: 'SCSS', icon: scss },
      { name: 'PHP', icon: php },
      { name: 'VSCode', icon: vscode },
    ],
  },
  {
    id: 'travl',
    title: 'Travl Dashboard',
    description:
      'One of the most complex projects: user management, roles, CRUD with Express + MongoDB/Mongoose, React + Redux. Manage bookings, rooms, and hotel staff within a visually stunning admin dashboard.',
    image: photoTravl,
    liveUrl: 'http://davidprcloud-travldashboard.s3-website-eu-west-1.amazonaws.com/login',
    githubUrl: 'https://github.com/SirAllap/hotel_miranda_dashboard',
    isPrivate: false,
    tech: [
      { name: 'TypeScript', icon: ts },
      { name: 'React', icon: react },
      { name: 'Node', icon: node },
      { name: 'MongoDB', icon: mongo },
      { name: 'AWS', icon: aws },
      { name: 'npm', icon: npm },
    ],
  },
  {
    id: 'oxygen-pics',
    title: 'Oxygen Stock Free Photos',
    description:
      'Clean and stylish photo browsing app built with React, Redux Toolkit, and the Unsplash API. Focused on mastering React patterns and state management with Redux Toolkit.',
    image: oxygenPics,
    liveUrl: 'http://davidprcloud-unsplash-photo-app.s3-website.eu-west-3.amazonaws.com',
    githubUrl: 'https://github.com/SirAllap/app-photos',
    isPrivate: false,
    tech: [
      { name: 'JavaScript', icon: js },
      { name: 'React', icon: react },
      { name: 'MUI', icon: mui },
      { name: 'Node', icon: node },
      { name: 'AWS', icon: aws },
      { name: 'npm', icon: npm },
    ],
  },
  {
    id: 'oxygen-shop',
    title: 'Oxigen Shop',
    description:
      'Transformed a Figma design into a functional e-commerce website using HTML, CSS, and JS — demonstrating accurate translation of design specs into working code.',
    image: oxygenshop,
    liveUrl: 'http://davidprcloud-html-css-js-shop.s3-website.eu-west-3.amazonaws.com',
    githubUrl: 'https://github.com/SirAllap/OxygenShop',
    isPrivate: false,
    tech: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JS', icon: js },
      { name: 'SCSS', icon: scss },
      { name: 'AWS', icon: aws },
      { name: 'npm', icon: npm },
    ],
  },
  {
    id: 'peekbeats',
    title: 'PeekBeats',
    description:
      'Streaming platform connecting music producers with listeners, built collaboratively with two bootcamp peers. Powered by Socket.IO for real-time bidirectional communication.',
    image: peekbeats,
    liveUrl: null,
    githubUrl: 'https://github.com/JuanAntonioLeonOjeda/Project-3---Streaming-App',
    isPrivate: false,
    tech: [
      { name: 'Vue.js', icon: vue },
      { name: 'MUI', icon: mui },
      { name: 'JavaScript', icon: js },
      { name: 'Node', icon: node },
      { name: 'MongoDB', icon: mongo },
    ],
  },
  {
    id: 'frogger',
    title: 'Frogger',
    description:
      'Classic Frogger game — guide a frog to safety at the top of the screen. Built as a team project: divided tasks, worked in separate branches, and merged to GitHub.',
    image: frogger,
    liveUrl: 'https://sirallap.github.io/proyecto1-frogger/',
    githubUrl: 'https://github.com/SirAllap/proyecto1-frogger',
    isPrivate: false,
    tech: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: js },
    ],
  },
  {
    id: 'gmf',
    title: 'GMF Mediación',
    description:
      'My first real client project — a website for a professional mediation office. Built with HTML, CSS, and JS while meeting the client twice a week to discuss new features and progress.',
    image: gmf,
    liveUrl: 'https://www.gmfmediacion.com/',
    githubUrl: null,
    isPrivate: false,
    tech: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: js },
    ],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience: ExperienceEntry[] = [
  {
    id: 'reboot',
    title: 'FullStack Development Bootcamp',
    company: 'Reboot Academy',
    companyUrl: 'https://reboot.academy/',
    location: 'Las Palmas de Gran Canaria, Spain — 100% Remote',
    date: '2021 - 2022',
    description:
      'Built responsive web apps with Vue.js, Node.js, Express, and MongoDB. Collaborated in teams, managed code with Git, deployed on Heroku/Netlify. Developed APIs, tested with Postman, and practiced UX/UI with Miro/Figma.',
    type: 'education',
  },
  {
    id: 'clarity',
    title: 'Junior Sourcer → Talent Acquisition Associate',
    company: 'Clarity AI',
    companyUrl: 'https://clarity.ai/',
    location: 'Las Palmas de Gran Canaria, Spain — 100% Remote',
    date: '2022 - 2023',
    description:
      'Sourced candidates for open positions using various methods and tools. Maintained a candidate database, screened applicants and conducted initial interviews to assess fit.',
    type: 'work',
  },
  {
    id: 'oxygen',
    title: 'Full-stack Developer',
    company: 'OXYGEN Coworking',
    companyUrl: 'https://oxygenworkspace.com/',
    location: 'Las Palmas de Gran Canaria, Spain — 100% Remote',
    date: '2023 - 2024',
    description:
      'Worked with MongoDB, React + Redux, Node, PHP, MySQL, and AWS. Designed responsive layouts with mobile-first mindset, developed RESTful APIs, end-to-end testing, pair programming, and Agile methodologies.',
    type: 'work',
  },
  {
    id: 'nextpyme',
    title: 'FullStack Developer',
    company: 'Nextpyme',
    companyUrl: 'https://www.nextpyme.com/',
    location: 'Seville, Spain — On-site',
    date: '2024/03 - 2024/08',
    description:
      'Used JavaScript, Node.js, Laravel, PHP, SQL, HTML, Bootstrap, ReactJS and Vue.js. Collaborated with the CEO to translate client needs into practical web solutions.',
    type: 'work',
  },
  {
    id: 'trigo',
    title: 'FullStack Developer Python / ReactJS',
    company: 'TRIGO Aerospace Defense & Rail',
    companyUrl: 'https://www.trigo-group.com/en',
    location: 'Seville, Spain — On-site',
    date: '2024/08 - 2025/12',
    description:
      'Leveraged ReactJS, Django, PostgreSQL, Docker, and the LAPP stack. Crafted and refined user interfaces for diverse projects, troubleshot existing issues, and implemented new features.',
    type: 'work',
  },
  {
    id: 'smith',
    title: 'Backend Developer',
    company: 'Smith.ai',
    companyUrl: 'https://smith.ai/',
    location: 'Seville, Spain — Remote',
    date: '2026/01 - present',
    description:
      'Backend engineering on systems that orchestrate simultaneous AI agents. Beyond the day-to-day implementation work, I act as a de-facto lead — reviewing teammates\' code, running tests, and making sure quality stays consistent as the product moves fast.',
    type: 'work',
    isCurrent: true,
  },
]
