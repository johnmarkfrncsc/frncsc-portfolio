export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  status: 'completed' | 'in-progress'
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools'
}