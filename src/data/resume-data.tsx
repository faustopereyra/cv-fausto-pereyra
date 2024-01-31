import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fausto Pereyra",
  initials: "FP",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aire",
  about: "Sr Frontend Engineer & Professional Nerd",
  summary: `Hello! I'm a tech enthusiast and seasoned Frontend Developer. My passion lies in solving complex challenges and refining processes to be effective and efficient.

    Starting out at 16, I founded a media agency, diving into data-driven advertising and building comprehensive online business solutions. This early venture set the stage for my career in tech, where I now specialize in React development and streamlining web applications.
    
    My expertise spans React.js, Node.js, Python, and focusing on user-friendly UI/UX. I enjoy mentoring, sharing knowledge, and continuously learning.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/60635606?v=4",
  personalWebsiteUrl: "https://www.faustopereyra.com/",
  contact: {
    email: "fausto.pereyra@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/faustopereyra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fausto-pereyra/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Tecnológica Nacional",
      degree: "Engineer's degree in Industrial Engineering",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Faraday",
      link: "", // Insert the URL of Faraday's website here
      badges: [],
      title: "Sr. Frontend Developer (React)",
      logo: "", // Insert the variable name containing Faraday's company logo here
      start: "2021",
      end: "Present",
      description:
        "Key responsibilities and achievements in the role included leading the transition from Angular to React for the SaaS platform, enhancing user experience and frontend robustness. Worked on frontend development with a focus on cybersecurity, created user-friendly features aligned with UI/UX design goals, and transformed detailed wireframes into functional web interfaces. Mentored frontend developers on best practices and efficient coding. Technologies used: React.js, Cybersecurity, User Experience (UX), UI.",
    },
    {
      company: "Acámica",
      link: "", // Insert the URL of Acámica's website here
      badges: [],
      title: "React Mentor",
      logo: "", // Insert the variable name containing Acámica's company logo here
      start: "2021",
      end: "2022",
      description:
        "Key responsibilities and achievements in the role included teaching advanced React concepts in a major Latin American bootcamp. Simplified complex topics such as Asynchronism, Promises/async await, and React Hooks. Employed a hands-on teaching approach with practical exercises and projects. Skills: React.js, Education, JavaScript, Communication.",
    },
    {
      company: "Aliwan",
      link: "", // Insert the URL of Aliwan's website here
      badges: [],
      title: "Lead Software Engineer",
      logo: "", // Insert the variable name containing Aliwan's company logo here
      start: "2020",
      end: "2021",
      description:
        "Key responsibilities and achievements in the role included developing automation tools using Node.js and Python, enhancing team efficiency. Improved web performance by 50% using Node.JS caching and ReactJS. Designed and implemented a mail delivery system, increasing customer conversion. Managed the main server and coordinated with teams in Argentina and China. Skills: Automation, Web Performance, Email Marketing, Cross-Cultural Communication, E-Commerce.",
    },
    {
      company: "Freelance",
      link: "", // Insert your professional website or portfolio URL here if applicable
      badges: [],
      title: "Freelance Web Developer",
      logo: "", // Insert the variable name for your professional logo or personal branding here, if applicable
      start: "2018",
      end: "2021",
      description:
        "Key responsibilities and achievements in the role included developing full-stack web applications using the MERN stack, creating static websites with CSS/SASS and HTML, developing comprehensive and user-friendly Design Systems, and focusing on Shopify development for business performance optimization. Skills: Full-Stack Development, Front-end Development, Web Design, Shopify.",
    },
    {
      company: "Estudip",
      link: "", // Insert the URL of Estudip's website here
      badges: [],
      title: "Software Engineer, Founder, Project Manager",
      logo: "", // Insert the variable name containing Estudip's company logo here
      start: "2016",
      end: "2020",
      description:
        "Key responsibilities and achievements in the role included founding and leading a web development and digital marketing agency. Transitioned from hands-on roles to managerial responsibilities. Implemented technical standards and ensured quality deliverables. Orchestrated marketing and management of a major event with 50,000 attendees. Managed website development, social media, and Facebook advertising campaigns. Skills: Entrepreneurship, Team Leadership, Web Development, Facebook Ads.",
    },
  ],
  skills: [
    "React.js",
    "Cybersecurity",
    "UI UX",
    "JavaScript",
    "Automation",
    "Email Marketing",
    "E-Commerce",
    "Facebook Ads",
  ],
  projects: [
    {
      title: "Siliconmind.ai",
      techStack: ["Side Business", "Langchain", "Next.js"],
      description: "An AI consultany agency",
      logo: "",
      link: {
        label: "siliconmind.com",
        href: "https://siliconmind.ai/",
      },
    },
    {
      title: "TutorIA",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Langchain",
        "Vector Database",
      ],
      description:
        "Your personal AI Tutor, Upload your notes let the AI teach you",
      logo: "",
      link: {
        label: "tutoria.siliconmind.ai",
        href: "https://tutoria.siliconmind.ai/",
      },
    },
    {
      title: "Faustopereyra.com",
      techStack: ["Side Project", "Next.js"],
      description: "My personal website and newsletter. Built with Next.js",
      logo: "",
      link: {
        label: "faustopereyra.com",
        href: "https://www.faustopereyra.com/",
      },
    },
    {
      title: "AI Youtube Podcast",
      techStack: ["Side Project", "Podcast", "Youtube"],
      description:
        "Youtube channel where I talk abot the latest AI tools and consepts",
      logo: "",
      link: {
        label: "youtube.com",
        href: "https://www.youtube.com/channel/UClOEKlL-SKvMWGLGbOAFsWQ",
      },
    },
    {
      title: "AI QR Generator",
      techStack: ["Side Project", "Next.js", "AI", "Stable Diffusion"],
      description: "Generates beautiful QR codes using AI",
      logo: "",
      link: {
        label: "qr.siliconmind.ai",
        href: "https://qr.siliconmind.ai/",
      },
    },
    {
      title: "Pipe Write",
      techStack: ["WIP"],
      description: "Create custom content creation pipelines with AI",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
