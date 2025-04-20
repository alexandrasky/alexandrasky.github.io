import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Usability Test Report",
    description:
      "Together with a teammate, we conducted a usability test for an interactive ebook application to identify user pain points and suggest improvements. We focused on issues like navigation, image accuracy, feedback mechanisms, and clarity of instructions.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    type: "university",
  },
  {
    title: 'Django CRUD - RAW SQL',
    description: `Django REST API working on a PostgreSQL database of Slovakian businesses.
    API handles GET, POST and DELETE methods. Validates data posted as well.`,
    link: 'https://github.com/alexandrasky/Django-raw-SQL',
    tags: ['Python', 'SQL'],
    type: 'university',
  },
  {
    title: 'Django CRUD - ORM',
    description: `Similar to the preceding project, but uses ORM instead of raw SQL. 
    Webapp was hosted on Azure, database on AWS.`,
    link: 'https://github.com/alexandrasky/Django-ORM',
    tags: ['Python'],
    type: 'university',
  },
  {
    title: 'UDP Communicator',
    description: `Custom protocol designed over the UDP transport layer of the TCP/IP model. 
    Enables text messaging and file transfer between two participants on a local Ethernet network.`,
    link: 'https://github.com/alexandrasky/UDP-Communicator',
    tags: ['C++', 'Networking'],
    type: 'university',
  },
  {
    title: 'Traveling Salesman Problem',
    description: `Solves the TSP using a genetic algorithm with two selection methods. 
    Finds the shortest cyclic path that visits each city exactly once among 20–40 cities.`,
    link: 'https://github.com/alexandrasky/TSP',
    tags: ['C++', 'AI', 'Algorithms'],
    type: 'university',
  },
  {
    title: 'Color Classifier',
    description: `Classifies colors of newly generated points on a 2D map using the k-nearest neighbors (KNN) algorithm. 
    Existing points with known colors are used for classification.`,
    link: 'https://github.com/alexandrasky/Color-Classifier',
    tags: ['Java', 'AI'],
    type: 'university',
  },
  {
    title: 'OOP demonstration',
    description: `Demonstrates Object Oriented Programming concepts such as polymorphism, encapsulation, aggregation, and design patterns 
    through a fictional invoice viewer project.`,
    link: '',
    tags: ['Java', 'OOP', 'Design Patterns'],
    type: 'university',
  },
  {
    title: 'Hash table implementation',
    description: `Implements a hash table using open addressing and division method. 
    Automatically resizes when over 50% full to the next prime number of double the size.`,
    link: 'https://github.com/alexandrasky/Hash-table-implementation',
    tags: ['C', 'Data Structures'],
    type: 'university',
  },
  {
    title: 'Dijkstra + Min Heap',
    description: `Implements a pathfinding game where a knight must rescue princesses before a dragon reaches them. 
    Utilizes Dijkstra's algorithm with a Min Heap for efficient shortest path calculation.`,
    link: 'https://github.com/alexandrasky/Dijkstra-Min-Heap',
    tags: ['C', 'Algorithms', 'Games'],
    type: 'university',
  },
  {
    title: "Van Gogh Style Transfer with CycleGAN",
    tags: ["Python", "Deep Learning", "Image generation", "Weights and Biases", "Convolutional Networks"],
    description:
      "In a two-person team, we built a neural style transfer system using CycleGAN to convert landscape photos into the impressionist painting style of Vincent van Gogh. Our implementation features a modular architecture of generators, discriminators, and residual networks.",
    type: "university",
  },
  {
    title: "Analysis of a particular software in context of Conway’s law",
    description: `
      This project analyzes an open-source software to understand its failure through the lens of Conway’s law. 
      Neo4j is used for graph-based analysis of issues, contributors, and comments, detecting communities in the developer network. 
      Software architecture is extracted using Enterprise Architect to recover class diagrams.`,
    tags: ["Neo4j", "Graph Database", "UML"],
    type: 'university',
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
    description: "A handover project designed to validate whether data conforms to expected formats using SQL and regular expressions. Results are visualized in Power BI dashboards for monitoring and reporting.",
    tags: ["SQL", "RegEx", "PowerBI"],
    type: 'work',  
  },
  {
    title: "Anomaly Check",
    description: "A handover project focused on identifying anomalies in SQL datasets, such as changes in null value patterns and unexpected data trends. Helps maintain consistent data quality across reporting systems.",
    tags: ["SQL", "PowerBI"],
    type: 'work',
  },
  
];