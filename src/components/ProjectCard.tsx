import { FaGithub } from 'react-icons/fa';
import { Project } from "../types/project";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-gray-800 bg-opacity-90 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-[1.02] hover:bg-gray-700"
    >
      <h3 className="text-xl text-white font-semibold">{project.title}</h3>

      <p className="mt-2 text-gray-400 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-teal-300">
        View details →
      </p>
    </button>
  );
}