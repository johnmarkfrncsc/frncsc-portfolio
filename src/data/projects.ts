import type { Project } from "../types/ProjectType";

const projects : Project[] = [
    {
    id: 1,
    title: 'Rentara',
    description: 'A full-stack property management web application built with React, Node.js, Express, and MongoDB.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/johnmarkfrncsc/Renting-App',
    liveUrl: 'https://rentara.skwtr.com',
    status: 'in-progress',
},
  {
    id: 2,
    title: 'Email Sender',
    description: 'Write and send emails directly to Gmail using Nodemailer. A fullstack TypeScript practice project.',
    techStack: ['TypeScript', 'Node.js', 'Nodemailer'],
    githubUrl: 'https://github.com/johnmarkfrncsc',
    status: 'completed',
  }
]

export default projects;