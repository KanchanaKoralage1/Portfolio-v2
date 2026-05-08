import {
  FaDocker,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaJava,
  FaPython,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiArgo,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDotnet,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiGrafana,
  SiPrometheus,
  SiMysql,
  SiNginx,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",

    skills: [
      {
        name: "React",
        icon: FaReact,
      },

      {
        name: "Next.js",
        icon: SiNextdotjs,
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend",

    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },

      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },

      {
        name: ".NET",
        icon: SiDotnet,
      },

      {
        name: "Python",
        icon: FaPython,
      },

      {
        name: "Java",
        icon: FaJava,
      },
    ],
  },

  {
    title: "DevOps & Cloud",

    skills: [
      {
        name: "Docker",
        icon: FaDocker,
      },

      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },

      {
        name: "Terraform",
        icon: SiTerraform,
      },

      {
        name: "Jenkins",
        icon: SiJenkins,
      },

      {
        name: "ArgoCD",
        icon: SiArgo,
      },

      {
        name: "AWS",
        icon: FaAws,
      },
    ],
  },

  {
    title: "Databases & Tools",

    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },

      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },

      {
        name: "MySQL",
        icon: SiMysql,
      },

      {
        name: "Prometheus",
        icon: SiPrometheus,
      },

      {
        name: "Grafana",
        icon: SiGrafana,
      },

      {
        name: "Nginx",
        icon: SiNginx,
      },

      {
        name: "Git",
        icon: FaGitAlt,
      },

      {
        name: "GitHub",
        icon: FaGithub,
      },

      {
        name: "Linux",
        icon: FaLinux,
      },
    ],
  },
];



export const projects = [
  {
    title: "Cloud-Native CI/CD Pipeline",
    description:
      "Built and deployed a containerized MERN application using Kubernetes, Docker, ArgoCD, Helm, Prometheus, and Grafana with full GitOps workflow.",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],

    github: "https://github.com/YOUR_USERNAME/project-1",

    live: "#",

    image: "/projects/devops.jpg",
  },

  {
    title: "ATS System with Machine Learning",
    description:
      "Full-stack ATS platform that analyzes resumes against job descriptions using TF-IDF and machine learning role classification.",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Python",
      "Machine Learning",
      "Tailwind CSS",
    ],

    github: "https://github.com/YOUR_USERNAME/project-2",

    live: "#",

    image: "/projects/ats.jpg",
  },

  {
    title: "Social Media Platform",
    description:
      "Responsive social media application with JWT authentication, Google OAuth, WebSockets, comments, likes, shares, and notifications.",

    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "OAuth2",
      "WebSocket",
    ],

    github: "https://github.com/YOUR_USERNAME/project-3",

    live: "#",

    image: "/projects/social.jpg",
  },

  {
    title: "Movie Ticket Booking System",
    description:
      "Cloud-hosted full-stack booking platform deployed on Azure with Docker, Nginx reverse proxy, GitHub Actions CI/CD, and Azure SQL.",

    tech: [
      "React",
      ".NET",
      "Azure",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],

    github: "https://github.com/YOUR_USERNAME/project-4",

    live: "#",

    image: "/projects/movie.jpg",
  },
];


export const experiences = [
  {
    role: "Software Engineering Intern",

    company: "Gamage Recruiters",

    period: "July 2025 - December 2025",

    description:
      "Worked on modern web and mobile applications using React, React Native, TypeScript, Node.js, and Express.js while collaborating with development teams using Agile workflows.",

    responsibilities: [
      "Developed frontend and mobile application features using React.js and React Native.",
      "Contributed to backend API development using Node.js and Express.js.",
      "Performed API testing and automation using Postman and Selenium.",
      "Collaborated with teams using GitHub, Jira, and Trello.",
      "Followed CI/CD workflows and version control best practices.",
    ],

    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Postman",
      "Selenium",
      "GitHub",
    ],
  },
];


export const reflectiveJournal = [
  {
    title: "Improving Technical Skills",

    period: "Year 3 - Year 4",

    description:
      "Throughout the PPW module and my personal learning journey, I significantly improved my technical skills in full-stack development, DevOps engineering, cloud computing, and software deployment practices.",

    points: [
      "Learned how to build responsive frontend applications using React, Next.js, and Tailwind CSS.",
      "Improved backend development knowledge using Node.js, Express.js, Spring Boot, and .NET.",
      "Gained practical experience with Docker, Kubernetes, Jenkins, GitHub Actions, and ArgoCD.",
      "Understood how CI/CD pipelines automate testing, building, and deployment workflows.",
      "Enhanced debugging and problem-solving abilities through project-based learning.",
    ],
  },

  {
    title: "Teamwork & Collaboration",

    period: "Internship Experience",

    description:
      "Working as a Software Engineering Intern helped me understand the importance of communication, collaboration, teamwork, and Agile development practices in real-world environments.",

    points: [
      "Collaborated with team members using GitHub, Jira, and Trello.",
      "Participated in discussions, task planning, and issue tracking.",
      "Improved communication skills while working on frontend and backend tasks.",
      "Learned the importance of version control and clean code practices.",
      "Understood how teamwork improves productivity and software quality.",
    ],
  },

  {
    title: "Personal Growth & Career Development",

    period: "Continuous Learning",

    description:
      "The PPW module encouraged me to focus on personal branding, career planning, and continuous self-improvement as a future software and DevOps engineer.",

    points: [
      "Improved confidence in presenting technical projects and ideas.",
      "Learned how to create professional CVs and portfolio websites.",
      "Developed better time management and self-learning habits.",
      "Earned industry-recognized certifications related to cloud and DevOps.",
      "Became more motivated to pursue a career in DevOps and Cloud Engineering.",
    ],
  },
];


export const careerPlans = [
  {
    phase: "Short-Term Goals",

    period: "2026 - 2027",

    description:
      "My immediate goal is to gain industry experience as a DevOps Engineer or Systems Engineer while strengthening my cloud-native and software engineering knowledge.",

    goals: [
      "Complete my undergraduate degree successfully.",
      "Secure a DevOps or Cloud Engineering role.",
      "Improve hands-on experience with Kubernetes and Terraform.",
      "Contribute to real-world CI/CD and cloud infrastructure projects.",
      "Earn advanced cloud certifications from AWS and Azure.",
    ],
  },

  {
    phase: "Mid-Term Goals",

    period: "2027 - 2030",

    description:
      "I aim to become a highly skilled cloud and DevOps engineer capable of designing scalable, secure, and automated infrastructures for enterprise systems.",

    goals: [
      "Master Kubernetes ecosystem and GitOps workflows.",
      "Gain experience with multi-cloud environments.",
      "Improve Infrastructure as Code and automation expertise.",
      "Work on large-scale distributed systems.",
      "Strengthen leadership and technical mentoring skills.",
    ],
  },

  {
    phase: "Long-Term Goals",

    period: "2030 & Beyond",

    description:
      "My long-term vision is to become a Cloud Solutions Architect or Senior DevOps Engineer leading cloud transformation and automation initiatives.",

    goals: [
      "Lead enterprise cloud migration projects.",
      "Architect scalable and resilient cloud-native systems.",
      "Mentor junior engineers and contribute to engineering communities.",
      "Build innovative SaaS and cloud products.",
      "Continuously learn emerging technologies and industry trends.",
    ],
  },
];


export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",

    issuer: "Oracle",

    year: "2025",

    image: "/certificates/oci-devops.png",

    credential:
      "https://catalog-education.oracle.com/",

    description:
      "Validated knowledge in DevOps practices, CI/CD pipelines, automation, monitoring, and cloud-native deployment strategies using Oracle Cloud Infrastructure.",
  },

  {
    title: "Oracle Cloud Infrastructure Foundations Associate",

    issuer: "Oracle",

    year: "2025",

    image: "/certificates/oci-foundations.png",

    credential:
      "https://catalog-education.oracle.com/",

    description:
      "Demonstrated foundational knowledge of cloud concepts, OCI services, networking, security, and cloud architecture principles.",
  },

  {
    title: "AWS Academy Graduate - Cloud Web Application Builder",

    issuer: "AWS Academy",

    year: "2025",

    image: "/certificates/aws-builder.png",

    credential:
      "https://aws.amazon.com/training/",

    description:
      "Completed cloud application deployment and management training using AWS services and modern web application architectures.",
  },

  {
    title: "KodeKloud 100 Days of DevOps",

    issuer: "KodeKloud",

    year: "2025",

    image: "/certificates/devops.png",

    credential:
      "https://kodekloud.com/",

    description:
      "Hands-on DevOps learning program covering Linux, Docker, Kubernetes, Jenkins, Terraform, CI/CD, and cloud-native technologies.",
  },
];


export const contactInfo = {
  email: "itsmekanchanakoralage@gmail.com",

  phone: "+94 70 497 5336",

  location: "Sri Lanka",

  github: "https://github.com/YOUR_USERNAME",

  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",

  portfolio: "https://yourportfolio.com",
};