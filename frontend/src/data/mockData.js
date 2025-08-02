import { Github, Linkedin, Mail, Brain, Code, Database, BarChart3 } from 'lucide-react';

export const mockData = {
  name: "Priyansh Srivastava",
  taglines: [
    "Freelance Data Scientist",
    "AI Engineer", 
    "Full-stack Developer",
    "Machine Learning Expert"
  ],
  
  skills: [
    "python",
    "data pre processing", 
    "javascript",
    "machine learning",
    "generative ai",
    "gemini",
    "agentic ai",
    "interactive dashboard making",
    "data story telling",
    "mysql",
    "prompt engineering",
    "vertex ai",
    "cursor ai"
  ],

  highlights: [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Expertise",
      description: "Specialized in Generative AI, Gemini AI, and Agentic Systems"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development", 
      description: "Python, JavaScript, and modern web technologies"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Processing",
      description: "Expert in data preprocessing, MySQL, and data pipeline creation"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Storytelling",
      description: "Interactive dashboards and compelling data visualizations"
    }
  ],

  certificates: [
    {
      title: "Machine Learning Specialist",
      issuer: "Google Cloud Platform",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&auto=format",
      description: "Advanced certification in machine learning and AI model development"
    },
    {
      title: "Data Science Professional",
      issuer: "IBM",
      date: "2024", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      description: "Comprehensive data science and analytics certification"
    },
    {
      title: "AI Engineer Certification",
      issuer: "Microsoft Azure",
      date: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      description: "Expert-level AI and machine learning services certification"
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2023",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop&auto=format", 
      description: "Advanced Python programming for data analysis and visualization"
    }
  ],

  projects: [
    {
      title: "Resume Analyzer AI",
      description: "An intelligent resume analysis system powered by Gemini AI that provides comprehensive feedback, skill gap analysis, and improvement recommendations. Features include ATS score calculation, keyword optimization, and personalized career suggestions.",
      tags: ["Gemini AI", "Python", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/Priyansh-rath18/AI-based-projects",
      demoUrl: "https://github.com/Priyansh-rath18/AI-based-projects"
    },
    {
      title: "AI Projects Collection", 
      description: "A comprehensive collection of cutting-edge AI projects showcasing expertise in machine learning, generative AI, and data science. Includes projects on natural language processing, computer vision, and intelligent automation systems.",
      tags: ["AI", "Machine Learning", "Python", "Data Science"],
      githubUrl: "https://github.com/Priyansh-rath18/AI-based-projects",
      demoUrl: "https://github.com/Priyansh-rath18/AI-based-projects"
    }
  ],

  githubProfile: "https://github.com/Priyansh-rath18",

  social: [
    {
      platform: "LinkedIn",
      handle: "@priyansh-srivastava",
      url: "https://www.linkedin.com/in/priyansh-srivastava-1b47292aa/",
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      platform: "GitHub", 
      handle: "@Priyansh-rath18",
      url: "https://github.com/Priyansh-rath18",
      icon: <Github className="w-6 h-6" />
    },
    {
      platform: "Email",
      handle: "rathtweets10@gmail.com", 
      url: "mailto:rathtweets10@gmail.com",
      icon: <Mail className="w-6 h-6" />
    }
  ]
};