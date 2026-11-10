export const personalInfo = {
  name: "Biniyam Taye",
  role: "Senior Frontend & Full-Stack Developer",
  tagline: "Crafting hyper-polished, high-performance web applications with modern design systems and intuitive user experiences.",
  availability: "Available for new projects & full-time roles",
  location: "San Francisco, CA / Remote",
  // ── Profile & About Photos Configuration ──
  // Put your image files inside `src/assets/` (or `public/images/`) and set their filenames here:
  navbarAvatar: "navbar-avatar.png", // Navbar profile image (e.g. in src/assets/)
  aboutPhoto: "about-photo.png",     // About page hero photo (e.g. in src/assets/)
  email: "biniyamtaye04@gmail.com",
  telegram: "https://t.me/Biniyam_Taye",
  whatsapp: "https://wa.me/+251931619083",
  phone: "+251931619083",
  github: "https://github.com/Biniyam-Taye",
  linkedin: "https://www.linkedin.com/in/biniyam-taye-9aaa17376/",
  twitter: "https://twitter.com",
  roles: [
    "Senior Frontend Engineer",
    "Full-Stack Architect",
    "UI/UX Design Technologist",
    "React & Next.js Specialist"
  ],
  stats: [
    { label: "Years Experience", value: "5+", suffix: "" },
    { label: "Projects Completed", value: "30+", suffix: "" },
    { label: "Client Satisfaction", value: "99%", suffix: "" },
    { label: "Open Source Stars", value: "1.2k+", suffix: "" },
  ],
  about: `I’m Biniyam Taye, a passionate full-stack web developer specializing in React, Next.js, Node.js, MongoDB, MySQL, Express, and modern AI integrations. I love turning ideas into smooth, scalable, and user-focused applications that deliver real value.

My journey into tech started with a deep curiosity for how digital products are built. Over time, that curiosity grew into a strong commitment to mastering full-stack development and exploring the possibilities of AI-powered solutions.

My Approach:
I believe in building clean, maintainable, and efficient systems. Writing reliable code, optimizing performance, and ensuring scalability are always top priorities in my work. I enjoy learning new tools, improving workflows, and staying aligned with modern development standards.

What I Do:
I build full-stack web applications from front to back, with experience in creating dynamic interfaces, robust APIs, and secure data-driven systems. Recently, I’ve been focusing on integrating AI features into web apps such as smart automation, chat-based tools, and intelligent content generation to enhance user experiences and product capabilities.

Outside of coding, I enjoy exploring new technologies, improving my skill set, and sharing what I learn with other developers. I’m always excited about new challenges and opportunities to build meaningful digital products.`,
  bioParagraphs: [
    "I’m Biniyam Taye, a passionate full-stack web developer specializing in React, Next.js, Node.js, MongoDB, MySQL, Express, and modern AI integrations. I love turning ideas into smooth, scalable, and user-focused applications that deliver real value.",
    "My journey into tech started with a deep curiosity for how digital products are built. Over time, that curiosity grew into a strong commitment to mastering full-stack development and exploring the possibilities of AI-powered solutions.",
    "Outside of coding, I enjoy exploring new technologies, improving my skill set, and sharing what I learn with other developers. I’m always excited about new challenges and opportunities to build meaningful digital products."
  ]
};

export const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 96, category: "Frontend" },
    { name: "TypeScript", level: 92, category: "Frontend" },
    { name: "Tailwind CSS", level: 98, category: "Frontend" },
    { name: "Vue / Nuxt", level: 85, category: "Frontend" },
    { name: "HTML5 & CSS3 / Canvas", level: 95, category: "Frontend" },
    { name: "State Management (Zustand, Redux)", level: 90, category: "Frontend" },
  ],
  backend: [
    { name: "Node.js & Express", level: 88, category: "Backend" },
    { name: "PostgreSQL & Prisma", level: 86, category: "Backend" },
    { name: "GraphQL & REST APIs", level: 90, category: "Backend" },
    { name: "Python / FastAPI", level: 80, category: "Backend" },
    { name: "Redis & Caching", level: 82, category: "Backend" },
  ],
  devops: [
    { name: "Docker & Containerization", level: 84, category: "DevOps" },
    { name: "CI/CD & GitHub Actions", level: 88, category: "DevOps" },
    { name: "Vercel, AWS & Cloudflare", level: 86, category: "DevOps" },
    { name: "Vitest & Playwright", level: 85, category: "DevOps" },
  ],
  design: [
    { name: "Figma & Design Systems", level: 92, category: "Design" },
    { name: "Micro-interactions & Motion", level: 94, category: "Design" },
    { name: "Responsive & Mobile-First", level: 98, category: "Design" },
    { name: "Accessibility (a11y)", level: 90, category: "Design" },
  ]
};

export const projectsData = [
  {
    id: "DriveLux",
    title: "DriveLux - 3D Vehicle Viewer",
    category: "3D & Full-Stack",
    description: "DriveLux is a premium luxury car marketplace featuring interactive 3D vehicle visualization with Three.js and secure Stripe payment integration.",
    longDescription: "Built a premium luxury car marketplace using the MERN stack, featuring interactive 3D vehicle visualization with Three.js and secure Stripe payment integration. The platform enhances customer engagement, improves purchase confidence, and delivers a modern, high-end car-buying experience through responsive design and scalable architecture.",
    image: "src/assets/projects/DriveLux.jpg",
    tags: ["react", "threejs", "GSAP", "3D", "Web App", "MERN"],
    demoUrl: "https://www.loom.com/share/1f0098a2a7a544df8892ef31412610ab",
    githubUrl: "https://github.com/Biniyam-Taye/Car-House-Website",
    featured: true,
  },
  {
    id: "hotel",
    title: "Hotel Booking Platform with Stripe",
    category: "Full-Stack",
    description: "HotelBooking is a modern, production-ready hotel booking platform using the MERN Stack (MongoDB, Express.js, React, Node.js) with secure Stripe payment integration.",
    longDescription: "Built a modern, production-ready hotel booking platform using the MERN Stack (MongoDB, Express.js, React, Node.js) with secure Stripe payment integration. The platform enables users to browse hotels, check real-time room availability, book rooms, and pay securely online. It includes authentication, booking management, an admin dashboard, responsive design, and a seamless user experience, making it a complete end-to-end hotel reservation solution.",
    image: "src/assets/projects/hotel.jpg",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://www.loom.com/share/ff0a34614bfc4d93931de40096c5ab0e",
    githubUrl: "https://github.com/Biniyam-Taye/Villa-Alpha",
    featured: true,
  },
  {
    id: "Derara",
    title: "Derara International Coffee",
    category: "Frontend",
    description: "built modern coffee international website for high quality coffe store with modern ui ux design and animations ",
    longDescription: "We designed and developed the complete business website for Derara International Coffee, an Ethiopian coffee import and export company. I handled the full development process, from building the user interface and business pages to implementing the required functionality, optimizing the website for different devices, and deploying it to production. The website is successfully deployed and is actively being used by the business.",
    image: "src/assets/projects/derara.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Parcel", "Babel"],
    demoUrl: "https://www.loom.com/share/815691df484c4911a3ba35dc3f061b86",
    githubUrl: "https://github.com/Biniyam-Taye/derara-frontend",
    featured: true,
  },
  {
    id: "resume-builder",
    title: "AI-Powered Resume Builder",
    category: "AI & Full-Stack",
    description: "a modern and interactive AI-powered resume builder that helps users create professional resumes in minutes using AI-powered insights and suggestions.  ",
    longDescription: "Built a full-stack AI-powered Resume Builder using the MERN stack and Google's Gemini API. The platform enables users to create professional, ATS-friendly resumes with AI-generated content, real-time editing, multiple modern templates, live preview, PDF export, and secure authentication. Designed with a responsive UI, scalable REST APIs, and a seamless user experience, helping job seekers build high-quality resumes in minutes. The application is optimized for performance, usability, and maintainability.",
    image: "src/assets/projects/ai-resume-builder.png",
    tags: ["React", "Tailwind CSS", "Gemini API", "MongoDB", "Express.js", "Node.js"],
    demoUrl: "https://resume-biniyamtaye.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/AI-Powered-Resume-Builder",
    featured: true,
  },
  {
    id: "social-media-platform",
    title: "Full Stack Social Media Platform",
    category: "Full-Stack",
    description: "this is my favorite project b/c i built it when i was 2nd year student and i learned a lot from it and it made me confident that i can be a full-stack developer. ",
    longDescription: "this project build by technologies react.js, TypeScript, Tailwind CSS, and Supabase. Users can register, log in, create posts, share images, like and comment on posts, and send real-time messages to other users. The platform includes a responsive dark/light mode, real-time updates, image uploads, and secure user authentication.",
    image: "src/assets/projects/social-media-platform.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoUrl: "https://binup.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/Full-stack-social-media-website",
    featured: true,
  },
  {
    id: "full-stack-food-delivery-mern",
    title: "Full Stack Food Delivery Platform",
    category: "Full-Stack",
    description: "a full stack food delivery app with all the features of a modern food delivery platform.",
    longDescription: "This is a full-stack food delivery application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes features such as user authentication, restaurant listings, menu browsing, order placement, order tracking, and payment integration. The platform is designed to provide a seamless food delivery experience for both customers and restaurants.",
    image: "src/assets/projects/full-stack-food-delivery-mern.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://bini-food-delivery.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/Full-Stack-Food-Delivery-MERN-",
    featured: true,
    highlights: [
      "Sub-50ms real-time telemetry streaming via WebSockets",
      "Interactive multi-layer data visualization charts with custom tooltips",
      "Comprehensive dark mode UI built with custom glassmorphism components",
      "Automated PDF & CSV report generation for executive summaries"
    ]
  },
  {
    id: "Ai powered internship ",
    title: "AI-Powered Internship & Student Freelancing Platform",
    category: "AI & Full-Stack",
    description: "A full-stack platform connecting students with internship and freelance opportunities through a LinkedIn-inspired interface.",
    longDescription: "Built a full-stack platform connecting students with internship and freelance opportunities through a LinkedIn-inspired interface. Developed three role-based dashboards for students/freelancers, managers, and supervisors, integrating Google Gemini API for LLM-powered job filtering, candidate discovery, and intelligent opportunity matching. Implemented RESTful APIs, MongoDB data management, authentication, and role-based access control using React.js, Node.js, Express.js, and MongoDB.",
    image: "src/assets/projects/ai-powered-internship.png",
    tags: ["React", "Tailwind CSS", "Gemini API", "MongoDB", "Express.js", "Node.js"],
    demoUrl: "https://student-freelance-and-internship.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/Student-Freelance-and-Internship-Management",
    featured: true,
    highlights: [
      "Custom high-frame-rate financial charts with live order flow depth",
      "Smart contract interaction with gas optimization and slippage guard",
      "Decentralized wallet connect modal supporting MetaMask, Phantom, and Ledger",
      "Audited smart order routing engine reducing swap price impact by 35%"
    ]
  },
  {
    id: "e-commerce",
    title: "Full-Stack E-Commerce Application | MERN Stack",
    category: "Full-Stack",
    description: "A full-stack e-commerce application featuring product browsing, search and filtering, shopping cart management, user authentication, order processing, and an admin dashboard for managing products and orders.",
    longDescription: "Developed a responsive e-commerce platform using MySQL, Express.js, React.js, and Node.js, featuring product browsing, search and filtering, shopping cart management, user authentication, order processing, and an admin dashboard for managing products and orders.",
    image: "src/assets/projects/e-commerce.png",
    tags: ["React", "Tailwind CSS", "MySQL", "Express.js", "Node.js"],
    demoUrl: "https://bini-market.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/Full-Stack-Amazon-Clone-2024V",
    featured: true,
    highlights: [
      "Lightweight WebGL 3D asset integration with zero frame drops",
      "Custom kinetic typography with responsive fluid font scaling",
      "Nominated for Site of the Day on Awwwards & FWA"
    ]
  },
  {
    id: "garage-management",
    title: "Vehicle Garage Management App",
    category: "Full-Stack",
    description: "Built a MERN stack application to manage vehicles, customers, repairs, and service records with an intuitive interface and efficient garage operations.",
    longDescription: "Developed a full-stack vehicle garage management application using MongoDB, Express.js, React.js, and Node.js to streamline garage operations, including vehicle registration, customer management, service scheduling, maintenance tracking, repair records, and billing. Implemented RESTful APIs, database management, and a responsive user interface to improve workflow efficiency and simplify vehicle service management.",
    image: "src/assets/projects/garage-management.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://bini-garage.vercel.app/",
    githubUrl: "https://github.com/Biniyam-Taye/Full-Stack-Vehicle-Garage-App",
    featured: false,
    highlights: [
      "Real-time cluster telemetry with interactive topology node graphs",
      "Live terminal emulator with SSH key injection and command history",
      "Multi-tenant RBAC permissions with audit trail logging"
    ]
  }
];

export const experienceData = [
  {
    period: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "Veloce Technologies",
    location: "San Francisco, CA (Remote)",
    description: "Spearheaded frontend architecture modernization for a flagship SaaS platform serving over 250,000 active users. Led a team of 6 engineers in building an extensible component design system.",
    achievements: [
      "Reduced initial bundle load time by 48% via dynamic code splitting and tree-shaking",
      "Architected accessible, reusable Tailwind-based component library adopted company-wide",
      "Mentored junior and mid-level developers through code reviews and architecture workshops"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest"]
  },
  {
    period: "2021 - 2023",
    role: "Full-Stack Software Engineer",
    company: "Apex Digital Solutions",
    location: "New York, NY",
    description: "Developed and shipped high-traffic client web applications, microservices, and interactive web tools. Collaborated closely with product designers to implement pixel-perfect user flows.",
    achievements: [
      "Engineered real-time data synchronization pipeline using Node.js and WebSockets",
      "Boosted Core Web Vitals to 98+ across desktop and mobile benchmarks",
      "Integrated secure payment gateways processing over $12M annually"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"]
  },
  {
    period: "2019 - 2021",
    role: "Frontend Developer",
    company: "Hyperion Labs",
    location: "Seattle, WA",
    description: "Crafted interactive web applications, client dashboards, and marketing portals with rich animations and responsive layouts.",
    achievements: [
      "Built 15+ custom client websites with clean, maintainable modular CSS",
      "Implemented automated CI/CD deployment pipelines using GitHub Actions",
      "Championed web accessibility (WCAG 2.1 AA) compliance across all client portals"
    ],
    technologies: ["JavaScript (ES6+)", "React", "CSS3 / SCSS", "REST APIs", "Git"]
  }
];

export const testimonialsData = [
  {
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "CloudScale Inc.",
    quote: "Biniyam has a rare blend of engineering rigor and design aesthetic. The UI he built for our platform received immediate praise from our enterprise clients and reduced user drop-off significantly.",
    rating: 5
  },
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    company: "Nova Dynamics",
    quote: "One of the most efficient and talented engineers I have worked with. His attention to micro-interactions, clean code, and performance optimization is top-tier.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Aura Creative",
    quote: "Working with Biniyam transformed our vision into an awe-inspiring digital reality. He consistently went above and beyond to deliver an unforgettable user experience.",
    rating: 5
  }
];

export const terminalCommands = {
  help: "Available commands: 'about', 'skills', 'projects', 'experience', 'contact', 'clear'",
  about: "Biniyam - Senior Frontend & Full-Stack Engineer with 5+ years of experience building polished, performant web applications.",
  skills: "Core stack: React, TypeScript, Tailwind CSS, Next.js, Node.js, GraphQL, PostgreSQL, Docker, Figma.",
  projects: "Featured: 1. Aura AI Analytics | 2. Nexus DeFi Terminal | 3. Aurora Creative Agency | 4. Pulse Cloud",
  experience: "Latest: Senior Frontend Engineer @ Veloce Tech (2023 - Present) | Apex Digital (2021-2023)",
  contact: "Email: biniyam.dev@example.com | LinkedIn: linkedin.com/in/biniyam | GitHub: github.com/biniyam"
};

export const blogPosts = [
  {
    id: "impact-driven-development",
    title: "Impact-Driven Development: Building Software That Truly Matters",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    tags: ["Philosophy", "Engineering", "Career"],
    excerpt: "Why engineering excellence starts with genuine empathy for user problems rather than chasing shiny architectural hype.",
    content: `When I first started writing software at 15, like many developers, I was obsessed with complex syntax, clever one-liners, and theoretical patterns. But over years of building production applications for hundreds of thousands of users, my perspective shifted profoundly.

Impact-Driven Development is about placing the ultimate user outcome at the core of every architectural choice. When we design a component, stream data across WebSockets, or prune an extra 50KB from a JavaScript bundle, we aren't just pleasing a linter — we are respecting the user's attention, bandwidth, and daily workflow.

Key principles of Impact-Driven Development:
1. Empathy Before Architecture: Understand who is on the other side of the glass.
2. Speed as a Feature: Every millisecond of latency saved is friction removed from someone's day.
3. Resilience over Cleverness: Write readable, maintainable systems that empower the entire team to ship with confidence.`
  },
  {
    id: "mastering-react-19-state",
    title: "Mastering React 19 State Patterns & Server Actions in Production",
    date: "Feb 24, 2025",
    readTime: "7 min read",
    tags: ["React", "Architecture", "TypeScript"],
    excerpt: "Deep dive into new React 19 hooks, concurrent transitions, optimistic UI updates, and reducing client bundle sizes.",
    content: `React 19 brings some of the most exciting primitives we've seen since hooks were introduced in 2018. From the useActionState hook to automatic form resets and useOptimistic, the barrier to creating ultra-fluid, instant-feedback user interfaces has dropped dramatically.

In this article, we explore how to restructure legacy reducer patterns into clean, declarative action pipelines that handle asynchronous errors and validation states effortlessly.`
  },
  {
    id: "design-systems-tailwind",
    title: "Handcrafted Design Systems with Tailwind: Moving Beyond Generic UI",
    date: "Jan 18, 2025",
    readTime: "6 min read",
    tags: ["UI/UX", "Tailwind CSS", "Design Systems"],
    excerpt: "How to craft a distinctive, bespoke aesthetic using custom CSS variables, tailored typography tokens, and subtle micro-interactions.",
    content: `Too many modern web applications look identical: the same generic purple gradients, the same rounded corners, the same stock component libraries.

By establishing strict design tokens — tailored color palettes, deliberate type scales, and purposeful tactile shadows — we can build products that feel bespoke, memorable, and undeniably premium without adding heavyweight external dependencies.`
  },
  {
    id: "sub-second-web-vitals",
    title: "Achieving 99+ Core Web Vitals on Heavy Web Applications",
    date: "Dec 05, 2024",
    readTime: "8 min read",
    tags: ["Performance", "Web Vitals", "Optimization"],
    excerpt: "Practical strategies for eliminating layout shifts, optimizing largest contentful paint, and lazy-loading non-critical telemetry.",
    content: `Performance is an invisible differentiator. A website that loads in under 600ms immediately conveys reliability and high polish. Here is the exact checklist I use across enterprise client projects to guarantee sub-second LCP and zero cumulative layout shifts.`
  }
];

export const usesData = [
  {
    category: "Workstation & Hardware",
    description: "The core machine and physical tools that power my day-to-day engineering and design work.",
    items: [
      {
        name: "16\" MacBook Pro M3 Max",
        detail: "36GB Unified Memory, 1TB SSD, Space Black. Effortlessly handles multiple Docker containers, local LLMs, and instant compilation.",
        tag: "Computer"
      },
      {
        name: "Dell UltraSharp 32\" 4K USB-C Hub Monitor (U3223QE)",
        detail: "IPS Black technology with 2000:1 contrast ratio, 98% DCI-P3 color accuracy, and single-cable 90W power delivery.",
        tag: "Display"
      },
      {
        name: "Keychron Q1 Pro Wireless Mechanical Keyboard",
        detail: "Custom tuned with Gateron Oil King linear switches, tape modded, and PBT double-shot keycaps for a quiet, tactile typing experience.",
        tag: "Peripherals"
      },
      {
        name: "Logitech MX Master 3S",
        detail: "Quiet clicks and infinite magnetic scrolling for fast navigation through large codebases and design canvases.",
        tag: "Peripherals"
      },
      {
        name: "Sony WH-1000XM5 Noise Canceling Headphones",
        detail: "Essential for deep work and audio isolation during intense coding and architecture sessions.",
        tag: "Audio"
      }
    ]
  },
  {
    category: "Software & Development Environment",
    description: "The software tools, editor settings, and command line utilities I use every single day.",
    items: [
      {
        name: "VS Code / Antigravity IDE",
        detail: "Tokyo Night theme, JetBrains Mono font with ligatures, configured with ESLint, Prettier, and Tailwind CSS IntelliSense.",
        tag: "Editor"
      },
      {
        name: "Warp Terminal + Starship",
        detail: "Modern GPU-accelerated terminal with block-based workflows, git status indicators, and fast directory jumping.",
        tag: "CLI"
      },
      {
        name: "Raycast",
        detail: "Blazing fast Spotlight replacement with custom scripts, clipboard history, window management, and quick currency conversions.",
        tag: "Productivity"
      },
      {
        name: "Bruno / Postman",
        detail: "Lightweight, git-friendly API client for exploring REST and GraphQL endpoints during backend integrations.",
        tag: "API Testing"
      },
      {
        name: "Docker Desktop",
        detail: "Running isolated PostgreSQL, Redis, and microservice containers during local feature development.",
        tag: "DevOps"
      }
    ]
  },
  {
    category: "Frontend & Full-Stack Tech Stack",
    description: "My preferred technical stack for building fast, maintainable, scalable web applications.",
    items: [
      {
        name: "React 19 & Next.js",
        detail: "My go-to framework for server components, file-system routing, SEO optimization, and dynamic applications.",
        tag: "Frontend"
      },
      {
        name: "TypeScript",
        detail: "Strict typing across all layers to catch errors at compile-time and enable seamless developer refactoring.",
        tag: "Language"
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first CSS paired with custom tokens to craft distinctive interfaces without runtime CSS overhead.",
        tag: "Styling"
      },
      {
        name: "Node.js, Express & Prisma",
        detail: "Clean type-safe relational database management with PostgreSQL and high-throughput REST/GraphQL APIs.",
        tag: "Backend"
      },
      {
        name: "Vercel & Cloudflare",
        detail: "Edge computing, automated preview deployments, zero-config CDN caching, and custom domain SSL management.",
        tag: "Deployment"
      }
    ]
  },
  {
    category: "Design & Creative Workflow",
    description: "Tools for translating ideas into interactive prototypes, wireframes, and design systems.",
    items: [
      {
        name: "Figma",
        detail: "Where every layout begins. Used for wireframing, interactive prototypes, auto-layout design systems, and token definitions.",
        tag: "Design"
      },
      {
        name: "CleanShot X",
        detail: "The ultimate screenshot, screen recording, and quick annotation utility on macOS.",
        tag: "Utility"
      },
      {
        name: "Obsidian",
        detail: "Markdown-based second brain for software architecture notes, book summaries, and daily engineering logs.",
        tag: "Knowledge"
      }
    ]
  }
];

export const educationSections = [
  {
    category: 'Formal Education',
    items: [
      {
        name: 'B.Sc. in Computer Science',
        badge: '2022 – 2026',
        school: 'Arba Minch University',
        location: 'Arba Minch, Ethiopia',
        // gpa: 'Expected GPA 3.8 / 4.0',
        description:
          'Expected to complete a four-year degree covering Software Engineering, Database Management (SQL & NoSQL), Computer Networks & Security, Algorithms & Data Structures, and Web & Mobile Technologies. Graduating with distinction and strong project work in full-stack development.',
      },
    ],
  },
  {
    category: 'Certificates',
    items: [
      {
        name: 'Artificial Intelligence Fundamentals',
        badge: 'DeepLearning.AI · 2026',
        description:
          "Completed DeepLearning.AI's Artificial Intelligence Fundamentals course on Coursera. Topics covered: component composition, custom hooks, Context API, performance optimization with memo and lazy loading, and testing with React Testing Library.",
        link: 'https://www.udacity.com/certificate/e/92001aae-d74e-11f0-a7bf-23423ee92d0e',
      },
      {
        name: 'Programming Fundamentals',
        badge: 'Udacity · 2025',
        description:
          'Full deep-dive into server-side JavaScript. Covered Express.js, RESTful API design, JWT authentication, MongoDB with Mongoose, file uploads, real-time messaging with Socket.io, and deployment on Heroku and AWS.',
        link: 'https://www.udacity.com/certificate/e/04ec9ab0-5fb9-11ef-a45c-932ddbe31677',
      },
      {
        name: 'Data Analysis Fundamentals',
        badge: 'Udacity · 2025',
        description:
          'Explored fundamental data analysis principles, including data cleaning, descriptive statistics, data visualization, and exploratory data analysis. Gained practical experience in analyzing and interpreting data using Python and relevant libraries.',
        link: 'https://www.udacity.com/certificate/e/dbb29886-d73d-11f0-970e-e7126a0ba71a',
      },
      {
        name: 'Business and legal frameworks for tech entrepreneurs',
        badge: 'Mastercard · 2025',
        description:
          'Explored fundamental data analysis principles, including data cleaning, descriptive statistics, data visualization, and exploratory data analysis. Gained practical experience in analyzing and interpreting data using Python and relevant libraries.',
        link: 'https://ai-powered-next-gen-portfolio.vercel.app/certificates/gig101',
      },
      {
        name: 'Online saftey and cyber hygene for full-stack developers',
        badge: 'AMU · 2025',
        description:
          'In-depth course on the Next.js 14 App Router architecture. Covered React Server Components, streaming, parallel routes, edge middleware, ISR & SSG strategies, and integration with Supabase and Prisma.',
        link: 'https://lms.courses.amu.edu.et/certificates/4a5a856878eb45a5ba521d785e313f86',
      },
    ],
  },
];
