import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaReact } from "react-icons/fa";
import aegis from "@/public/aegis.png";
import timeEasy from "@/public/timeeasy.png";
import realtimeNotes from "@/public/realtimenotes.png";
import unbody from "@/public/unbody.png";
import spotify from "@/public/spotify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Xperspot, Pakistan",
    description:
      "I started a job as a front-end developer at Xpertspot after graduating from high school. I also started my bachelor's degree in Software Engineering and continued both at the same time ",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Full stack Developer",
    location: "Mercury Sols, Pakistan",
    description:
      "I upskilled to the full stack developer role and started working on a company main project ( Refocusai ). I worked on this project for 1 years and learned a lot about Nest-js, Next-js and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Mercury Sols, Pakistan",
    description:
      "I'm now a Team Lead Full Stack developer. I'm working on a multiple projects and leading a team of 5 developers. Imporving my skills and learning new technologies.",
    icon: React.createElement(FaCode),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    link: "https://api-allo-doc.azurewebsites.net/api-docs/",
    title: "Allo Doc",
    description:
      "I worked as a Backend developer on this project. It is a platform for doctors and patients. It's features include video call, chat, appointment booking, etc.",
    tags: [
      "Express.js",
      "Postgres",
      "Sequalize",
      "OpenAi",
      "Twilio",
      "Socket.io",
    ],
    imageUrl: aegis,
  },
  {
    link: "https://unbody.io",
    title: "Unbody.io",
    description:
      "I contributed to this project as a Full Stack developer. My work was to integrate payment system based on the usage of the api's and monthly subscription.",
    tags: ["Nextjs", "TypeScript", "Nestjs", "Supabase", "Stripe", "MUI"],
    imageUrl: unbody,
  },
  {
    link: "https://timeeasy.vercel.app/",
    title: "Time Easy",
    description:
      "I worked as a Full Stack developer on this project. It is a time tracking app for teams. It has features like time tracking, project management, team management, etc.",
    tags: ["React", "TypeScript", "Fie", "Tailwind", "Redux"],
    imageUrl: timeEasy,
  },
  {
    link: "https://tls-spotify-clone.vercel.app",
    title: "Spotify Clone",
    description:
      "This is a practice project. It is a clone of spotify. It has features like spotify authentication, song uploading, song playing, stripe etc.",
    tags: ["Next.js", "Tailwind", "Supabase", "Stripe"],
    imageUrl: spotify,
  },
  {
    link: "https://realtime-notes-app.vercel.app/",
    title: "Realtime Notes App",
    description:
      "This is a practice project. It is a realtime notes app. It has features like realtime collaboration, notes sharing, etc.",
    tags: ["Next.js", "Tailwind", "Express.js", "Socket.io"],
    imageUrl: realtimeNotes,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Electron.js",
  "Node.js",
  "Bun",
  "Git",
  "Tailwind",
  "Chakra UI",
  "Material UI",
  "Gsap",

  "Framer Motion",
  "Prisma",
  "Drizzle ORM",
  "TypeORM",
  "Sequlize ORM",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "React Query",
  "GraphQL",
  "Apollo",
  "Express",
  "Nest.js",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "CI / CD",
  "Jest",
  "Cypress",
] as const;
