export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  details: string[];
};

export type EducationEntry = {
  institution: string;
  qualification?: string;
  period?: string;
  result: string;
};

export type Certification = {
  title: string;
  issuer: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
};

export const portfolio = {
  personal: {
    name: "Harshit Bhojwani",
    initials: "HB",
    role: "Software Developer",
    location: "New Delhi, India",
    email: "harshitbhojwani2@gmail.com",
    status: "Software Developer",
    contactHeading: "Let’s connect",
    contactBlurb: "Reach out by email or LinkedIn.",
    summary:
      "Aspiring Software Developer pursuing a B.Tech in Information Technology, proficient in Java, Python, C, Data Structures, and Object-Oriented Programming. Quick learner with hands-on internship experience and a strong foundation in problem-solving, eager to build efficient, real-world software solutions.",
    heroSummary:
      "Aspiring Software Developer pursuing a B.Tech in Information Technology with a strong foundation in Java, Python, C, Data Structures, and Object-Oriented Programming.",
  },
  experience: [
    {
      title: "Product Design Intern",
      organization: "INFINN",
      period: "Jul 2026 – Sep 2026",
      details: [
        "Learned and applied information architecture principles to structure product content and user flows",
        "Gathered and analyzed user requirements to inform design decisions",
        "Conducted user research and collected feedback to identify usability improvements",
      ],
    },
  ] as ExperienceEntry[],
  skills: [
    { group: "Web Development", items: ["HTML5", "CSS3"] },
    { group: "Programming", items: ["Java", "Python", "C", "Data Structures", "Object-Oriented Programming (OOP)"] },
    { group: "Product & Design", items: ["Information Architecture", "User Research", "Requirements Gathering"] },
    { group: "Tools & Platforms", items: ["VS Code", "Git & GitHub", "MS Office", "Eclipse", "Notepad++"] },
  ],
  education: [
    {
      institution: "Maharaja Surajmal Institute of Technology, New Delhi",
      qualification: "B.Tech in Information Technology",
      period: "2024 – 2027",
      result: "CGPA: 7.9",
    },
    {
      institution: "Diploma, New Delhi",
      period: "2021 – 2024",
      result: "Percentage: 80%",
    },
    {
      institution: "Class X, New Delhi",
      result: "Percentage: 86%",
    },
  ] as EducationEntry[],
  certifications: [
    { title: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild" },
    { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild" },
    { title: "Project Management Fundamentals", issuer: "IBM SkillsBuild" },
    { title: "Lifelong Professional Skills", issuer: "IBM SkillsBuild" },
  ] as Certification[],
  achievements: [
    "Played School Nationals in Table Tennis",
    "Represented college in GGSIPU Table Tennis Tournament (2024)",
  ],
  languages: ["English", "Hindi", "French (Basic)"],
  projects: [] as Project[],
  socials: {
    email: "mailto:harshitbhojwani2@gmail.com",
    linkedin: "https://linkedin.com/in/harshit-bhojwani-379035319",
  },
} as const;

export type PortfolioData = typeof portfolio;
