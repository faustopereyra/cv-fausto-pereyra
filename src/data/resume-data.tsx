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
      company: "Silicon Mind",
      link: "https://siliconmind.ai/",
      badges: [],
      title: "Founder & Lead AI Developer",
      logo: "",
      start: "2023",
      end: "Present",
      description: `I lead the creation of custom RAG AI applications, focusing on chatbots, appointment setters, and AI-driven content creation for businesses. I manage a team dedicated to leveraging the ChatGPT API and LangChain for developing creative solutions.`,
    },
    {
      company: "Faraday",
      link: "https://faradaysec.com/",
      badges: [],
      title: "Sr. Frontend Developer (React)",
      logo: "", // Insert the variable name containing Faraday's company logo here
      start: "2021",
      end: "Present",
      description: `Led the switch from Angular to React for our SaaS platform at Faraday, focusing on a smoother user experience and more robust frontend.
        Worked on front-end and kept an eye on cybersecurity aspects.
        Focused on creating features that users love, keeping in line with our UI/UX design goals.
        Turned detailed wireframes into functional and user-friendly web interfaces.
        Enjoyed mentoring frontend developers, sharing knowledge on writing clean and efficient code, and exchanging ideas on best practices.`,
    },
    {
      company: "Acámica",
      link: "", // Insert the URL of Acámica's website here
      badges: [],
      title: "React Mentor",
      logo: "", // Insert the variable name containing Acámica's company logo here
      start: "2021",
      end: "2022",
      description: `Teach advanced React at a major bootcamp in Latin America, concepts like Asynchronism, Promises/async await, and React Hooks (useEffect, useContext).
      Proud of seeing many of my students go on to do great things with the skills they’ve gained.`,
    },
    {
      company: "Aliwan",
      link: "", // Insert the URL of Aliwan's website here
      badges: [],
      title: "Lead Software Engineer",
      logo: "", // Insert the variable name containing Aliwan's company logo here
      start: "2020",
      end: "2021",
      description: `Developed automation tools using Node.js and Python, boosting the communications team’s efficiency significantly.Enhanced web performance by 57% with Node.JS caching and ReactJS, focusing on efficient and responsive web solutions.Designed and implemented a mail delivery system, contributing to a 24% increase in customer conversion.Managed the main server and coordinated development efforts between the Argentina and China teams, ensuring smooth operations and effective communication.`,
    },
    {
      company: "Freelance",
      link: "", // Insert your professional website or portfolio URL here if applicable
      badges: [],
      title: "Freelance Web Developer",
      logo: "", // Insert the variable name for your professional logo or personal branding here, if applicable
      start: "2018",
      end: "2021",
      description: `Experienced in developing full-stack web applications using the MERN stack. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        Skilled in creating static websites with CSS/SASS and HTML, focusing on clean, efficient, and responsive designs.
        Passionate about web design, I take ideas and turn them into comprehensive and user-friendly Design Systems.
        In my Shopify development projects, I prioritize optimizing for higher conversions, always aiming to boost business performance.`,
    },
    {
      company: "Estudip",
      link: "", // Insert the URL of Estudip's website here
      badges: [],
      title: "Software Engineer, Founder, Project Manager",
      logo: "", // Insert the variable name containing Estudip's company logo here
      start: "2016",
      end: "2020",
      description: `Founded a web development and digital marketing agency at 16, demonstrating exceptional entrepreneurial skills and a passion for technology and marketing.
        Led and managed a small, dynamic team of developers and designers, transitioning from a hands-on role to a managerial position, effectively balancing leadership and technical responsibilities.
        Spearheaded the creation and implementation of technical standards within the company, ensuring high-quality deliverables and efficient processes.
        Successfully publicized a major event, attracting over 50,000 attendees, showcasing outstanding marketing and event management skills.
        Directly involved in website development, social media setup, and Facebook advertising campaigns, significantly enhancing the digital presence of local real estate businesses.`,
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
