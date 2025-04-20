import { FaGithub } from 'react-icons/fa';
import { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  // bg-gray-800
  return (
    <div className=" bg-gray-800 bg-opacity-90 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
      <h3 className="text-xl text-white">{project.title}</h3>
      <p className="mt-2 text-gray-400">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          className="inline-flex items-center gap-2 mt-3 text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
           {FaGithub({ className: "w-4 h-4" })}
          View Code
        </a>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
      {project.tags.map((tag: string) => (
        <span
          key={tag}
          className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
      </div>
    </div>
  );
}
