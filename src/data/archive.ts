import { Project } from "../types/project";

export const archiveProjects: Project[] = [
 
  {
    title: 'Django CRUD - RAW SQL',
    description: `Django REST API working on a PostgreSQL database of Slovakian businesses.
    API handles GET, POST and DELETE methods. Validates data posted as well.`,
    link: 'https://github.com/alexandrasky/Django-raw-SQL',
    tags: ['Python', 'SQL'],
    type: 'archive',
  },
  {
    title: 'OOP demonstration',
    description: `Demonstrates Object Oriented Programming concepts such as polymorphism, encapsulation, aggregation, and design patterns 
    through a fictional invoice viewer project.`,
    link: '',
    tags: ['Java', 'OOP', 'Design Patterns'],
    type: 'archive',
  },
  {
    title: 'Hash table implementation',
    description: `Implements a hash table using open addressing and division method. 
    Automatically resizes when over 50% full to the next prime number of double the size.`,
    link: 'https://github.com/alexandrasky/Hash-table-implementation',
    tags: ['C', 'Data Structures'],
    type: 'archive',
  },
  {
    title: 'Dijkstra + Min Heap',
    description: `Implements a pathfinding game where a knight must rescue princesses before a dragon reaches them. 
    Utilizes Dijkstra's algorithm with a Min Heap for efficient shortest path calculation.`,
    link: 'https://github.com/alexandrasky/Dijkstra-Min-Heap',
    tags: ['C', 'Algorithms', 'Games'],
    type: 'archive',
  },
   {
    title: 'Django CRUD - ORM',
    description: `Similar to the preceding project, but uses ORM instead of raw SQL. 
    Webapp was hosted on Azure, database on AWS.`,
    link: 'https://github.com/alexandrasky/Django-ORM',
    tags: ['Python'],
    type: 'archive',
  },
  {
    title: 'UDP Communicator',
    description: `Custom protocol designed over the UDP transport layer of the TCP/IP model. 
    Enables text messaging and file transfer between two participants on a local Ethernet network.`,
    link: 'https://github.com/alexandrasky/UDP-Communicator',
    tags: ['C++', 'Networking'],
    type: 'archive',
  },
  {
    title: 'Traveling Salesman Problem',
    description: `Solves the TSP using a genetic algorithm with two selection methods. 
    Finds the shortest cyclic path that visits each city exactly once among 20–40 cities.`,
    link: 'https://github.com/alexandrasky/TSP',
    tags: ['C++', 'AI', 'Algorithms'],
    type: 'archive',
  },
  {
    title: 'Color Classifier',
    description: `Classifies colors of newly generated points on a 2D map using the k-nearest neighbors (KNN) algorithm. 
    Existing points with known colors are used for classification.`,
    link: 'https://github.com/alexandrasky/Color-Classifier',
    tags: ['Java', 'AI'],
    type: 'archive',
  },
    /*
  {
    title: "Van Gogh Style Transfer with CycleGAN",
    tags: ["Python", "Deep Learning", "AI", "Weights and Biases"],
    description:
      "In a two-person team, we built a neural style transfer system using CycleGAN to convert landscape photos into the impressionist painting style of Vincent van Gogh. Our implementation features a modular architecture of generators, discriminators, and residual networks.",
    type: "university",
  },*/
    /*
  {
    title: "STUART: Spontaneous Use Case Re-Documentation in Scrum",
    description: "Awarded Best Paper at IIT.SRC 2023, this project presents a Confluence macro powered by NLP that re-documents use cases non-invasively within Agile workflows. It automatically generates use cases from Jira user stories and tasks, builds main success scenarios, and identifies actors. ",
    //link: "https://alexandrasky.github.io/files/STUART-paper.pdf", 
    tags: ["Agile", "Scrum", "Confluence", "Jira", "NLP", "UML"],
    type:  "university",
  },  */
    /*{
    title: "Analysis of a particular software in context of Conway’s law",
    description: `
      This project analyzes an open-source software to understand its failure through the lens of Conway’s law. 
      Neo4j is used for graph-based analysis of issues, contributors, and comments, detecting communities in the developer network. 
      Software architecture is extracted using Enterprise Architect to recover class diagrams.`,
    tags: ["Neo4j", "Graph Database", "UML"],
    type: 'university',
  },*/
    /*
  {
    title: "Conformity Check",
    description: "A handover project designed to validate whether data conforms to expected formats using SQL and regular expressions. Results are visualized in Power BI dashboards for monitoring and reporting.",
    tags: ["SQL", "RegEx", "PowerBI"],
    type: 'work',  
  },*/
    /*
  {
    title: "Anomaly Check",
    description: "A handover project focused on identifying anomalies in SQL datasets, such as changes in null value patterns and unexpected data trends. Helps maintain consistent data quality across reporting systems.",
    tags: ["SQL", "PowerBI"],
    type: 'work',
  },*/
];