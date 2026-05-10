import type { Project } from "../types/projectType.ts";
import rentara from "../components/assets/img/rentara.png"
import emailProject from "../components/assets/img/emailProject.png"
import tsika from "../components/assets/img/tsika.png"

const projects : Project[] = [
    {
    id: 1,
    title: 'Tsika',
    description: 'Tsika is a full-stack real-time chat application inspired by Discord, featuring instant messaging, online presence, user profiles, and customizable themes.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', "Socket.io"],
    githubUrl: 'https://github.com/johnmarkfrncsc/mern-chat-app',
    liveUrl: 'https://tsika.skwtr.com/',
    status: 'completed',
    image: tsika,
},
  {
    id: 2,
    title: 'Rentara',
    description: 'A full-stack property management web application built with React, Node.js, Express, and MongoDB.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/johnmarkfrncsc/Renting-App',
    liveUrl: 'https://rentara.skwtr.com',
    status: 'in-progress',
    image: rentara,
  },
    {
    id: 3,
    title: 'Email Sender',
    description: 'Write and send emails directly to Gmail using SendGrid. A fullstack TypeScript practice project.',
    techStack: ['TypeScript', 'Node.js', 'SendGrid'],
    githubUrl: 'https://github.com/johnmarkfrncsc/emailProject',
    liveUrl: 'https://email-project-ivory.vercel.app',
    status: 'completed',
    image: emailProject,
  },
]

export default projects;