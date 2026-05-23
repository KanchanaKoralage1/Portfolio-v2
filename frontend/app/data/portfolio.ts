import {
  FaDocker,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
  FaGitAlt,
  FaJava,
  FaPython,
  FaLinux,
  FaAws,
  FaWindows,
  FaTerminal,
  FaBitbucket,
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
  SiGrafana,
  SiPrometheus,
  SiMysql,
  SiNginx,
  SiJavascript,
  SiAnsible,
  SiGooglecloud,
  SiGo,
  SiSqlite,
  SiPowers,
  SiPostman,
  SiSelenium,
  SiCypress,
  SiTrello,
  SiExpress,
} from "react-icons/si";

import {
  MdSecurity,
  MdDns,
  MdHttp,
} from "react-icons/md";

import {
  TbBrandAzure,
  TbTopologyStar3,
} from "react-icons/tb";

import {
  BsShieldLockFill,
} from "react-icons/bs";

export const skillCategories = [
  {
    title: "Containerization & Orchestration",

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
        name: "Minikube",
        image: "/skills/minikube.svg",
      }
    ],
  },
  {
    title: "GitOps & CI/CD Pipelines",

    skills: [
      {
        name: "Jenkins",
        icon: SiJenkins,
      },

      {
        name: "ArgoCD",
        icon: SiArgo,
      },

      {
        name: "GitHub",
        icon: FaGithub,
      },

      {
        name: "GitLab",
        icon: FaGitlab,
      },

    ],
  },
  {
    title: "Infrastructure as Code (IaC)",

    skills: [
      {
        name: "Terraform",
        icon: SiTerraform,
      },

      {
        name: "Ansible",
        icon: SiAnsible,
      },
       
    ],
  },
  {
    title: "Monitoring & Observability",

    skills: [
      {
        name: "Prometheus",
        icon: SiPrometheus,
      },

      {
        name: "Grafana",
        icon: SiGrafana,
      },
       
    ],
  },
  {
    title: "Web Server & Networking",

    skills: [
      {
        name: "Nginx",
        icon: SiNginx,
      },

      {
        name: "SSH",
        icon: FaTerminal,
      },
      {
        name: "NSG (Network Security Groups)",
        icon: MdSecurity,
      },
      {
        name: "Load Balancing",
        icon: TbTopologyStar3,
      },
      {
        name: "HTTP/HTTPS",
        icon: MdHttp,
      },
      {
        name: "DNS",
        icon: MdDns,
      },
      {
        name: "SSL/TLS",
        icon: BsShieldLockFill,
      },
       
    ],
  },
  {
    title: "Operating Systems",

    skills: [
      {
        name: "Linux",
        icon: FaLinux,
      },

      {
        name: "Windows",
        icon: FaWindows,
      },
       
    ],
  },
  {
    title: "Cloud Platforms",

    skills: [
      {
        name: "Microsoft Azure",
        icon: TbBrandAzure,
      },

      {
        name: "AWS",
        icon: FaAws,
      },
      {
        name: "Oracle Cloud Infrastructure (OCI)",
        image: "/skills/oracle.svg",
      },

      {
        name: "Google Cloud Platform (GCP)",
        icon: SiGooglecloud,
      }, 
    ],
  },
  {
    title: "Frontend",

    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "React Native",
        image: "/skills/reactnative.svg",
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
        name: "JavaScript",
        icon: SiJavascript,
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
        name: "Express.js",
        icon: SiExpress,
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
      {
        name: "Go",
        icon: SiGo,
      },
    ],
  },

  {
    title: "Databases",

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
        name: "SQLite",
        icon: SiSqlite,
      },

      {
        name: "Git",
        icon: FaGitAlt,
      },

      {
        name: "GitHub",
        icon: FaGithub,
      },

    ],
  },
  {
    title: "Scripting & Automation",

    skills: [
      {
        name: "Bash",
        icon: FaTerminal,
      },

      {
        name: "Shell Scripting",
        icon: FaTerminal,
      },

      {
        name: "PowerShell",
        icon: SiPowers,
      },

    ],
  },
  {
    title: "Testing",

    skills: [
      {
        name: "Postman",
        icon: SiPostman,
      },

      {
        name: "Selenium",
        icon: SiSelenium,
      },

      {
        name: "Cypress",
        icon: SiCypress,
      }

    ],
  },
  {
    title: "Tools",

    skills: [
      
      {
        name: "Git",
        icon: FaGitAlt,
      },

      {
        name: "GitHub",
        icon: FaGithub,
      },
       {
        name: "Bitbucket",
        icon: FaBitbucket,
      },

      {
        name: "SonarQube",
        image: "/skills/sonarqube.svg",
      },
       {
        name: "Trello",
        icon: SiTrello,
      },

    ],
  },
];

export const projectSections = [
  {
    category: "DevOps & Cloud Projects",

    description:
      "Projects focused on CI/CD pipelines, cloud-native architectures, Kubernetes, Docker, infrastructure automation, monitoring, and scalable deployments.",

    projects: [
      {
        title: "Python Rest API with Docker Kubernetes and CI/CD Pipeline",

        description: [
          "Developed a cloud-native Python FastAPI REST API application with separate frontend and backend services",
          "Containerized frontend and backend applications using Docker and managed image versions through DockerHub",
          "Configured Kubernetes Deployments, Services, and Helm charts for scalable multi-environment deployments",
          "Built and automated a complete CI/CD pipeline using GitLab CI/CD for image build, push, and deployment workflows",
          "Integrated GitHub with GitLab and implemented automated deployments using a self-hosted GitLab Runner.",
          "Worked with DevOps tools and technologies including Docker, Kubernetes, Helm, GitLab CI/CD, Minikube, and Nginx."
        ],

        tech: [
          "Python (FastAPI)",
          "Docker",
          "Kubernetes",
          "GitLab CI/CD",
          "Helm",
          "Minikube",
          "GitLab Runner"
        ],

        github:
          "https://gitlab.com/KanchanaKoralage1/Cloud-Native-Python-REST-API-Platform-with-CI-CD-and-Kubernetes.git",

        live: "#",

        image: "/project/gitlabcicd.png",
      },

      {
        title: "Python Task API with DevOps",

        description: [
          "Built REST API using Python (FastAPI) with CRUD operations.",
          "Containerized the application using Docker to ensure consistent build and runtime environments.",
          "Designed and implemented an end-to-end CI/CD pipeline using Jenkins, automating build, versioning, and deployment processes.",
          "Implemented Kubernetes based deployment using Minikube, then upgraded to Azure Kubernetes Service (AKS).",
          "Enabled rolling updates and rollback with versioned Docker images.",
        ],

        tech: [
          "Python (FastAPI)",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "AKS (Azure Kubernetes Service)",
          "Minikube",
        ],

        github:
          "https://github.com/KanchanaKoralage1/python-task-api-with-devops",

        live: "http://20.195.60.68:8000/",

        image: "/project/pythontaskdevops.jpg",
      },

      {
        title: "Cloud-Native CI/CD Pipeline with GitOps and Monitoring",

        description: [
          "Built and deployed a containerized MERN app on Kubernetes (Minikube) using Docker.",
          "Implemented CI pipeline using GitHub Actions for build, test, and image creation.",
          "Set up GitOps-based CD using ArgoCD for automated Kubernetes deployments.",
          "Used Helm for managing Kubernetes manifests across multiple environments (dev, staging, prod).",
          "Integrated Prometheus and Grafana for monitoring and dashboards.",
          "Fixed runtime issues like pod restarts using Kubernetes Persistent Volumes.",
          "Configured Nginx for routing between frontend and backend services.",
        ],

        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Docker",
          "Kubernetes",
          "Helm",
          "Nginx",
          "ArgoCD",
          "GitHub Actions",
          "Prometheus",
          "Grafana",
          "Bash Scripting",
        ],

        github: "https://github.com/KanchanaKoralage1/ArgoCD-Project",

        live: "#",

        image: "/project/argocd.jpg",
      },
    ],
  },

  {
    category: "Software Engineering Projects",

    description:
      "Projects related to full-stack development, scalable backend systems, frontend engineering, authentication systems, and software architecture.",

    projects: [
      {
        title: " Movie Ticket Booking Web App",

        description: [
          "Developed a full-stack movie ticket booking web application where users can browse movies, sign up/login, manage profiles, and book tickets, while admins can add and manage movie listings. ",
          "Deployed on Azure Infrastructure and implemented end to end CI/CD using GitHub Actions with automated Docker builds and zero downtime deployments to Azure VM on every code push.",
          "Configured cloud infrastructure including Azure SQL Database, Linux VM with Docker compose, Nginx reverse proxy, NSG firewall rules and SSH based authentication. ",
        ],

        tech: [
          "React",
          "TypeScript",
          "C#",
          ".NET 8",
          "Azure (VM, SQL Database)",
          "Nginx",
          "Docker",
          "GitHub Actions",
          "REST APIs",
        ],

        github: "https://github.com/KanchanaKoralage1/ASP.NET_with_React",

        live: "http://20.212.19.81/",

        image: "/project/movie.jpg",
      },

      {
        title: "E-commerce Web Application with .NET | Blazor ",

        description: [
          "A full-stack e-commerce web application developed to deliver a secure and seamless online shopping experience. ",
          "Implemented product browsing, shopping cart, order tracking, Stripe payment integration, and authentication using Google and Facebook OAuth 2.0 with role-based access control. ",
        ],

        tech: [
          "C#",
          ".NET 8",
          "Blazor",
          "Entity Framework Core",
          "Stripe API",
          "GitHub Actions",
          "Bootstrap 5.",
        ],

        github:
          "https://github.com/KanchanaKoralage1/Ecommerce_Web_App_with_.NET_and_Blazor",

        live: "#",

        image: "/project/blazor.jpg",
      },

      {
        title: "ATS System with Machine Learning",

        description: [
          "Developed a full-stack Application Tracking System (ATS) that analyses resume against job descriptions and provides ATS scores, skill matching, and role classification using machine learning.",
          "Implemented features including resume upload, CV filtering, candidate management, user authentication, profile management with image uploads, and a responsive dashboard UI.",
        ],

        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Python",
          "Machine Learning",
          "Tailwind CSS",
          "REST APIs",
        ],

        github:
          "https://github.com/KanchanaKoralage1/Application-tracking-system",

        live: "#",

        image: "/project/ats.png",
      },

      {
        title: "Social Media Platform",

        description: [
          "Developed a responsive full-stack social media platform featuring JWT-based authentication, Google OAuth 2.0 login, and real-time messaging using WebSockets.",
          "Implemented core social features including post creation and editing, comments, likes, shares, follow/unfollow functionality, and real-time notifications. ",
        ],

        tech: [
          "Java",
          "Spring Boot",
          "React",
          "MySQL",
          "JWT",
          "OAuth2.0",
          "WebSocket",
          "Tailwind CSS",
        ],

        github: "https://github.com/KanchanaKoralage1/Social-Media-App",

        live: "#",

        image: "/project/social.png",
      },

      {
        title: "Task Management WebApp",

        description: [
          "A full-stack web application built to streamline team task assignment, tracking, and management." ,
          "Designed with a responsive UI and secure role-based access for both users and admins, it enhances collaboration and productivity across all devices.",
          " Users can login and signup with their google account (OAuth 2.0) And Users can generate documents as well.",
        ],

        tech: ["JavaScript", "React", "MongoDB", "Tailwind CSS"],

        github: "https://github.com/KanchanaKoralage1/Task-Management-WebApp",

        live: "#",

        image: "/project/task.png",
      },

      {
        title: "Library management system",

        description: [
          "This is my recently created full-stack web application that allows users to manage a digital library efficiently.",
           "Features include user authentication, book search, CRUD operations for books, image uploads, and a responsive UI.",
            "Built using the MERN stack with Cloudinary for image storage.",
        ],

        tech: ["JavaScript", "React", "MongoDB", "Tailwind CSS", "Cloudinary"],

        github: "https://github.com/KanchanaKoralage1/Library-management",

        live: "#",

        image: "/project/library.png",
      },

      {
        title: "Book Store Mobile App using React Native",

        description: [
          "A mobile app where users can sign up, log in, and share book recommendations. Users can add, edit, or delete book posts with images and ratings.",
        ],

        tech: ["Typescript", "React Native", "MongoDB", "Tailwind CSS"],

        github: "https://github.com/KanchanaKoralage1/Book-store-Mobile-app",

        live: "#",

        image: "/project/book.png",
      },
    ],
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
    title: "100 Days of Cloud - Azure",

    issuer: "KodeKloud",

    year: "2026",

    image: "/certifications/azurekodekloud.jpg",

    credential: "https://engineer.kodekloud.com/certificate-verification/85b9e85a-2070-435b-9ba6-91e5f9f60e34",

    description:
      "I have successfully completed the 100 Days of Cloud (Azure) challenge by KodeKloud",
  },
  {
    title: "Linux - Level 1",

    issuer: "KodeKloud",

    year: "2026",

    image: "/certifications/linux.png",

    credential: "https://engineer.kodekloud.com/certificate-verification/11a009ff-dd8e-47b3-a079-795324e163c7",

    description:
      "This certification gave me practical, hands-on experience working in a simulated enterprise Linux environment. not just theory",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",

    issuer: "Oracle",

    year: "2025",

    image: "/certifications/oracledevops.jpg",

    credential: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=368A7098EA6DD0980960A37BB693684AF3EDACBFE1C65163D5A714F3DB6BEF7B",

    description:
      "Validated knowledge in DevOps practices, CI/CD pipelines, automation, monitoring, and cloud-native deployment strategies using Oracle Cloud Infrastructure.",
  },

  {
    title: "Oracle Cloud Infrastructure Foundations Associate",

    issuer: "Oracle",

    year: "2025",

    image: "/certifications/oracle.png",

    credential: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D5647B355DA37B44C8ACFEE2E8A44F4AA5C4FAD5F7505E07377A6866DF510555",

    description:
      "Demonstrated foundational knowledge of cloud concepts, OCI services, networking, security, and cloud architecture principles.",
  },

  {
    title: "AWS Academy Graduate - Cloud Web Application Builder",

    issuer: "AWS Academy",

    year: "2025",

    image: "/certifications/awscloud.png",

    credential: "https://www.credly.com/badges/0294eded-0e88-4f25-9262-543532190230/linked_in?t=t3i0qj",

    description:
      "Completed cloud application deployment and management training using AWS services and modern web application architectures.",
  },

  {
    title: "KodeKloud 100 Days of DevOps",

    issuer: "KodeKloud",

    year: "2025",

    image: "/certifications/kodeklouddevops.jpg",

    credential: "https://engineer.kodekloud.com/certificate-verification/df63d657-51cf-4a9a-a700-99b05be9114f",

    description:
      "I have completed the 100 Days of DevOps challenge by KodeKloud a fully hands-on program designed around real-world DevOps tasks and industry-relevant scenarios.",
  },

   {
    title: "Git with GitLab and BitBucket",

    issuer: "LearnKarts",

    year: "2025",

    image: "/certifications/bitbucket.jpg",

    credential: "https://www.coursera.org/account/accomplishments/verify/U6PJC12BVM81",

    description:
      "Hands-on DevOps learning program covering Linux, Docker, Kubernetes, Jenkins, Terraform, CI/CD, and cloud-native technologies.",
  },

  {
    title: "Learn DevOps: CI/CD with Jenkins using Pipelines and Docker",

    issuer: "Udemy",

    year: "2025",

    image: "/certifications/jenkins.jpg",

    credential: "https://www.udemy.com/certificate/UC-e10a48de-ec35-4136-bd36-b58e9be76931/",

    description:
      "I've completed the “Learn DevOps: CI/CD with Jenkins using Pipelines and Docker” course. Looking forward to applying this knowledge in real-world CI/CD pipelines and containerized environments.",
  },

  {
    title: "Back-End Development with .NET",

    issuer: "Microsoft",

    year: "2025",

    image: "/certifications/dotnet.jpg",

    credential: "https://www.coursera.org/account/accomplishments/verify/ZEAD242VMLIK",

    description:
      "I have completed my certification in .NET and Its Architecture. Gained a solid foundation in .NET, C#, and key development tools. Excited to apply these skills in real-world projects.",
  },

  {
    title: "Introduction to Programming With C#",

    issuer: "Microsoft",

    year: "2025",

    image: "/certifications/csharp.jpg",

    credential: "https://www.coursera.org/account/accomplishments/verify/DIVH4D85908A",

    description:
      "I have completed the Introduction to Programming with C# course by Microsoft on Coursera.This course helped me understand the fundamentals of the .NET environment, how to set up and work with Visual Studio Code for .NET projects, and best practices for project structure and organization.",
  },

  {
    title: "Foundations of Coding Full-Stack",

    issuer: "Microsoft",

    year: "2025",

    image: "/certifications/fullstack.jpg",

    credential: "https://www.coursera.org/account/accomplishments/verify/IWGAA1FMD6TD",

    description:
      "I have completed the Foundations of Coding Full Stack certificate on Coursera. I gained valuable insights into full-stack development, Git/GitHub, and project planning—another step forward in my journey as a Full Stack Developer.",
  },

  {
    title: "AWS Project",

    issuer: "Great Learning Academy",

    year: "2025",

    image: "/certifications/awsproject.png",

    credential: "https://www.mygreatlearning.com/certificate/FRVQRQZX",

    description:
      "I have successfully completed the AWS Project course offered by Great Learning Academy.",
  },
];

export const contactInfo = {
  Email: "itsmekanchanakoralage@gmail.com",

  Phone: "+94 70 497 5336",

  Location: "Maharagama, Sri Lanka",

  GitHub: "https://github.com/KanchanaKoralage1",

  LinkedIn: "https://www.linkedin.com/in/kanchana-koralage/",

  Facebook: "https://www.facebook.com/kanchana.koralage.58",

  Instagram: "https://www.instagram.com/kanchana_koralage/"
};
