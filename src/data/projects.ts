import type { Project } from "../types/ProjectType";
import rentara from "../assets/rentara.png"
import emailProject from "../assets/emailProject.png"

const projects : Project[] = [
    {
    id: 1,
    title: 'Rentara',
    description: 'A full-stack property management web application built with React, Node.js, Express, and MongoDB.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/johnmarkfrncsc/Renting-App',
    liveUrl: 'https://rentara.skwtr.com',
    status: 'in-progress',
    image: rentara,
},
  {
    id: 2,
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