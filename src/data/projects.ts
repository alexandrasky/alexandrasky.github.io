import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "STUART: Scrum Use Case Re-Documentation",
    description:
      "Award-winning research project that automatically reconstructs UML use cases from Jira user stories and tasks within Agile workflows. Published and awarded Best Paper at IIT.SRC 2023.",
    tags: ["NLP", "Jira", "Confluence", "UML", "Research"],
    type: "university",
  },
  {
    title: "Usability Test Report",
    description:
      "Together with a teammate, we conducted a usability test for an interactive ebook application to identify user pain points and suggest improvements. We focused on issues like navigation, image accuracy, feedback mechanisms, and clarity of instructions.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    type: "university",
  },
  {
    title: "Van Gogh Style Transfer with CycleGAN",
    description:
      "Developed a neural style transfer system using CycleGAN to transform landscape photographs into the artistic style of Vincent van Gogh. Implemented and evaluated deep learning models in a research setting.",
    tags: ["Python", "Deep Learning", "CycleGAN", "AI"],
    type: "university",
  },
  {
    title: "Conway's Law Software Analysis",
    description:
      "Analyzed an open-source software project through the lens of Conway's Law using graph databases, community detection, and software architecture recovery techniques.",
    tags: ["Neo4j", "Graph Databases", "Software Architecture", "Research"],
    type: "university",
  },
  {
    title: "ChatBot Front-end",
    description: "A React-based chatbot interface designed to replicate the look of ChatGPT. Built for internal use, allowing users to ask questions about documentation.",
    tags: ["React", "Typescript", "TailwindCSS", "Front-end"],
    type: 'work',
  },
  {
    title: "Record Search Tool",
    description: "A full-stack tool allowing non-technical users to search and filter database records. The backend was built with Python using FastAPI. The frontend was developed with React, TypeScript, and TailwindCSS for a responsive user experience.",
    tags: ["React", "Typescript", "TailwindCSS", "Full-stack", "Python", "FastAPI"],
    type: 'work',
  },
  {
    title: "SQL Script Transformer",
    description: "A React-based tool that allows users to upload SQL scripts for internal processing and transformation. After processing, users can download the updated file. Built with TypeScript and TailwindCSS.",
    tags: ["React", "Typescript", "TailwindCSS", "Front-end"],
    type: 'work',
  },
  {
    title: "Conformity Check",
    description:
      "Maintained and enhanced an enterprise data quality framework validating customer data against hundreds of business-defined rules and regular expressions. Supported early detection of data integrity issues across large-scale reporting systems.",
    tags: ["SQL", "Data Quality", "RegEx", "Power BI"],
    type: "work",
  },
  {
    title: "Anomaly Detection Framework",
    description:
      "Maintained and extended an automated monitoring framework detecting unusual shifts in data completeness and quality metrics. Enabled proactive identification of upstream data pipeline issues before impacting downstream reporting.",
    tags: ["SQL", "Data Quality", "Power BI"],
    type: "work",
  },
  {
    title: "Literarne",
    description:
      "Full-stack web and mobile platform for collaborative annotation of poetry and literary works. Designed and developed end-to-end using React Native, TypeScript, serverless APIs, and Sanity CMS.",
    tags: ["React Native", "TypeScript", "Full-stack", "Mobile", "Expo"],
    type: "personal",
  },

 
];