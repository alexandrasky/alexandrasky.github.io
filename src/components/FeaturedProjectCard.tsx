import { Project } from "../types/project";

export default function FeaturedProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const thumbnail = project.media?.find((item) => item.type === "image")?.src;

  return (
    <button
      onClick={onClick}
      className="w-full text-left overflow-hidden rounded-2xl bg-gray-900/90 border border-white/10 shadow-2xl hover:scale-[1.01] transition-transform"
    >
      {thumbnail && (
        <div className="h-56 overflow-hidden bg-black/30">
          <img
            src={thumbnail}
            alt={project.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full bg-teal-500/20 text-teal-300 px-3 py-1 text-xs font-medium">
            Featured Project
          </span>

          <span className="rounded-full bg-indigo-500/20 text-indigo-300 px-3 py-1 text-xs font-medium">
            Actively Developed
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white">{project.title}</h2>

        <p className="mt-3 max-w-3xl text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm text-teal-300">
          View project details →
        </p>
      </div>
    </button>
  );
}