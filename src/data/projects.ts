import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "STUART: Scrum Use Case Re-Documentation",
    description:
      "Award-winning research project that automatically reconstructs UML use cases from Jira user stories and Agile artifacts.",
    longDescription:
      "Developed a natural language processing pipeline that transforms Scrum artifacts such as Jira user stories and tasks into structured UML use case documentation. The project explored how software documentation can be reconstructed from development artifacts to reduce documentation effort in Agile teams. Published at IIT.SRC 2023, where it received the Best Paper award.",
    tags: ["NLP", "Jira", "Confluence", "UML", "Research"],
    type: "university",
    highlights: [
      "Best Paper award at IIT.SRC 2023",
      "Processed Jira user stories and tasks",
      "Generated UML use case documentation",
      "Applied NLP techniques to software engineering",
    ],
  },

  {
    title: "Usability Test Report",
    description:
      "Conducted a usability evaluation of an interactive e-book application and proposed UX improvements.",
    longDescription:
      "Planned and executed a usability study of an interactive e-book application together with a teammate. We designed test scenarios, observed participants, documented usability issues, and prioritized recommendations. The study uncovered problems related to navigation, feedback, image interpretation, and instructional clarity.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    type: "university",
    highlights: [
      "Designed user testing scenarios",
      "Observed and analyzed user behavior",
      "Produced UX improvement recommendations",
      "Created usability report and findings",
    ],
  },

  {
    title: "Van Gogh Style Transfer with CycleGAN",
    description:
      "Implemented a CycleGAN model that transforms landscape photographs into artwork inspired by Vincent van Gogh.",
    longDescription:
      "Built and trained a CycleGAN neural network capable of translating real-world landscape images into Van Gogh-style paintings. The project involved dataset preparation, model training, evaluation of generated outputs, and analysis of generative adversarial networks in a research environment.",
    tags: ["Python", "Deep Learning", "CycleGAN", "AI"],
    type: "university",
    highlights: [
      "Implemented CycleGAN architecture",
      "Trained deep learning models in Python",
      "Performed image-to-image translation",
      "Evaluated generated artistic outputs",
    ],
  },

  {
    title: "Conway's Law Software Analysis",
    description:
      "Investigated how organizational structures influence software architecture using graph databases and architecture recovery techniques.",
    longDescription:
      "Conducted an empirical study of an open-source project to evaluate Conway's Law. Using graph-based analysis and architecture recovery techniques, I reconstructed relationships between development teams and software components to identify how communication structures were reflected in system architecture.",
    tags: ["Neo4j", "Graph Databases", "Software Architecture", "Research"],
    type: "university",
    highlights: [
      "Used Neo4j graph database",
      "Performed community detection analysis",
      "Recovered software architecture from source code",
      "Evaluated Conway's Law in practice",
    ],
  },

  {
    title: "ChatBot Front-end",
    description:
      "Built a ChatGPT-inspired interface for an internal AI assistant used to search enterprise documentation.",
    longDescription:
      "Developed the frontend of an internal AI-powered chatbot designed to help employees retrieve information from enterprise documentation. Built using React, TypeScript, and TailwindCSS, the application provided a modern conversational interface while integrating with backend AI services and enterprise knowledge sources.",
    tags: ["React", "TypeScript", "TailwindCSS", "Front-end"],
    type: "work",
    highlights: [
      "Built modern chat interface in React",
      "Integrated with enterprise AI services",
      "Designed responsive user experience",
      "Used throughout internal documentation workflows",
    ],
  },

  {
    title: "Record Search Tool",
    description:
      "Full-stack application enabling non-technical users to search and inspect enterprise database records without SQL.",
    longDescription:
      "Designed and implemented a full-stack web application that simplified database record exploration for business users. The frontend was built with React, TypeScript, and TailwindCSS, while the backend used FastAPI. The tool reduced reliance on manual SQL queries by providing a user-friendly filtering and search experience.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Full-stack",
      "Python",
      "FastAPI",
    ],
    type: "work",
    highlights: [
      "React + FastAPI architecture",
      "Advanced search and filtering",
      "Designed for non-technical users",
      "Reduced dependency on manual SQL queries",
    ],
  },

  {
    title: "SQL Script Transformer",
    description:
      "Web application for uploading, transforming, and downloading SQL scripts through a browser-based workflow.",
    longDescription:
      "Developed a tool that automates transformation of SQL scripts used in internal data engineering workflows. Users can upload existing scripts, apply predefined processing logic, and download the transformed result. The project focused on reducing repetitive manual editing while improving consistency.",
    tags: ["React", "TypeScript", "TailwindCSS", "Front-end"],
    type: "work",
    highlights: [
      "Automated SQL script processing",
      "Browser-based workflow",
      "File upload and download functionality",
      "Built with React and TypeScript",
    ],
  },

  {
    title: "Conformity Check",
    description:
      "Enterprise data quality framework validating customer and marketing data against hundreds of business-defined rules.",
    longDescription:
      "Maintained and enhanced a large-scale SQL-based data quality framework used to detect invalid, inconsistent, or malformed data across enterprise reporting systems. The solution applied hundreds of validation rules and regular expression checks while providing Power BI dashboards for monitoring and analysis.",
    tags: ["SQL", "Data Quality", "RegEx", "Power BI"],
    type: "work",
    highlights: [
      "Hundreds of SQL validation rules",
      "Regular expression-based data validation",
      "Power BI monitoring dashboards",
      "Used by multiple teams",
    ],
  },

  {
    title: "Anomaly Detection Framework",
    description:
      "Automated monitoring system detecting unusual changes in data completeness and reporting quality metrics.",
    longDescription:
      "Extended and maintained a data quality monitoring framework that identifies anomalies in enterprise datasets. The system tracks historical trends and flags unexpected shifts in metrics such as null rates, record counts, and field completeness, helping teams identify upstream pipeline issues before they affect business reporting.",
    tags: ["SQL", "Data Quality", "Power BI"],
    type: "work",
    highlights: [
      "Automated anomaly detection",
      "Historical trend monitoring",
      "SQL-based analysis framework",
      "Early warning for data pipeline issues",
    ],
  },

  {
    title: "literarne.sk",
    description:
      "Full-stack web and mobile platform for collaborative annotation of poetry and song lyrics.",
    longDescription:
      "Designed and developed a full-stack application that enables users to annotate poetry and song lyrics line-by-line, explore community contributions, and discover literary interpretations. Built with React Native, Expo, TypeScript, Sanity CMS, Clerk authentication, and serverless APIs. The platform supports both web and mobile experiences and focuses on making literature more interactive and accessible.",
    tags: [
      "React Native",
      "TypeScript",
      "Full-stack",
      "Mobile",
      "Expo",
    ],
    type: "personal",
    media: [
    {
      type: "video",
      src: "/img/literarne/demo.mp4",
    },
    {
      type: "image",
      src: "/img/literarne/day_mode.png",
    },
    {
      type: "image",
      src: "/img/literarne/night_mode2.png",
    },
    {
      type: "image",
      src: "/img/literarne/architecture.png",
    },
    ],
    highlights: [
      "Cross-platform web and mobile application",
      "Built with React Native and Expo",
      "User-generated annotations",
      "Authentication with Clerk",
      "Sanity CMS backend",
      "Responsive design for web and mobile",
    ],
  },
];