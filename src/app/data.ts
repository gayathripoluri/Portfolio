export const skills = [
  { label: "Programming", tags: ["Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"] },
  { label: "CS Fundamentals", tags: ["Data Structures", "Algorithms", "OOP", "System Design", "Design Patterns", "SDLC"] },
  { label: "Backend", tags: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication", "Session Management", "Microservices"] },
  { label: "Frontend", tags: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Databases", tags: ["PostgreSQL", "MySQL", "SQLite", "Firebase Firestore", "SQL/NoSQL"] },
  { label: "Cloud & Tools", tags: ["AWS", "Azure DevOps", "Git", "GitHub", "Postman", "Prisma", "CI/CD"] },
  { label: "AI", tags: ["OpenAI API", "Prompt Engineering", "AI Integration", "Code Analysis", "Debugging"] },
];

export const projects = [
  {
    id: "refactor-bot",
    title: "Refactor Bot",
    subtitle: "AI Code Refactoring Tool",
    tech: ["Node.js", "TypeScript", "LLM APIs", "Code Smell Detection"],
    description: "Built an LLM-powered refactoring platform that detects code smells and applies software metrics to clean up messy code on test codebases.",
    result: "~70% less manual refactoring effort",
    github: "https://github.com/gayathripoluri/refactorCode.git",
  },
  {
    id: "little-developer",
    title: "Little Developer",
    subtitle: "Gamified Coding Education Platform",
    tech: ["Flask", "React.js", "Firebase", "Firestore", "Python"],
    description: "Built secure sandboxed code execution and real-time runtime tracing; engineered live feedback infrastructure with a React + Firebase frontend.",
    result: "20+ coding challenges shipped",
    github: "https://github.com/gayathripoluri/LittleDeveloper.git",
  },
  {
    id: "prince-pursuit",
    title: "Prince Pursuit",
    subtitle: "Narrative Adventure Game",
    tech: ["Godot", "GDScript"],
    description: "Designed and built a story-driven game where a prince runs through a cursed forest collecting gems to break his princess's curse — showing strength in game logic, state management, and interactive storytelling.",
    result: "3 branching endings shipped",
    github: "https://github.com/gayathripoluri/Game-project.git",
  },
  {
    id: "newbie-connect",
    title: "Newbie Connect",
    subtitle: "Relocation Support Platform",
    tech: ["Figma", "UX/UI Design", "Product Design"],
    description: "Designed a platform concept to help people new to a country navigate essentials like SIM cards, transportation, and local logistics — covering onboarding, information discovery, and task completion.",
    result: "Full user flows & wireframes delivered",
    figma: "https://www.figma.com/proto/ElErFzhhcFswQ7oNJhuxRg/Wireframes?node-id=1208-1590&starting-point-node-id=1234%3A2052&t=LZs5fdyh5RE9KQNp-1",
  },
  {
    id: "infinity",
    title: "Infinity",
    subtitle: "Full-Stack Platform",
    tech: ["C#", "Node.js", "REST APIs", "Azure DevOps", "Agile/Scrum"],
    description: "Led backend architecture, system design, and testing for a 3-person agile team, delivering sprint-based releases validated before every sprint review.",
    result: "100% sprint test coverage delivered",
  },
];

export const experience = [
  {
    role: "M.S. in Computer Science",
    org: "Seattle University",
    period: "Mar 2025 – Present",
    type: "education",
    detail: "GPA 3.8/4.0, Student Honor Roll (×2)",
  },
  {
    role: "Python Developer",
    org: "ADP",
    period: "Jan 2025 – Mar 2025",
    type: "work",
    detail: "Designed Python backend microservices on the Pay Direct platform using AWS, supporting secure salary transfer workflows for thousands of U.S. payroll transactions. Diagnosed and resolved production issues through root-cause analysis, improving system reliability.",
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    org: "Anurag Engineering College",
    period: "Aug 2020 – Aug 2024",
    type: "education",
    detail: "Bachelor of Technology",
  },
];
