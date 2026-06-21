import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types/project';

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = selectedTags.length
    ? projects.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      )
    : projects;

  const workProjects = filteredProjects.filter(p => p.type === 'work');
  const personalProjects = filteredProjects.filter(p => p.type === 'personal');
  const universityProjects = filteredProjects.filter(p => p.type === 'university');

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-10 bg-black bg-opacity-25 rounded-lg">
      <section id="one" className="wrapper style3 fade-up pt-8">
        <div className="inner space-y-2">
          <h2 className="font-bold text-3xl">What can I do</h2>
          <p>Select a tag to filter projects.</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTags((prev) =>
                prev.includes(tag)
                  ? prev.filter((t) => t !== tag)
                  : [...prev, tag]
              )
            }
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 shadow-sm
              ${selectedTags.includes(tag)
                ? 'bg-gradient-to-r from-teal-500 to-indigo-800 text-white border-transparent'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {tag}
          </button>
        ))}

        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-red-300 bg-red-100 text-red-700 hover:bg-red-200"
          >
            Clear Filter
          </button>
        )}
      </div>

      <ProjectSection
        title="Featured / Personal Projects"
        description="Projects I built independently to practice full-stack development, product thinking, and deployment."
        projects={personalProjects}
        onProjectClick={setSelectedProject}
      />

      <ProjectSection
        title="Work Projects"
        description="Projects I worked on as part of my job."
        projects={workProjects}
        onProjectClick={setSelectedProject}
      />

      <ProjectSection
        title="University Projects"
        description="Academic projects and assignments with code and documentation."
        projects={universityProjects}
        onProjectClick={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

function ProjectSection({
  title,
  description,
  projects,
  onProjectClick,
}: {
  title: string;
  description: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}) {
  if (projects.length === 0) return null;

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold mt-10">{title}</h2>
      <p>{description}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </div>
  );
}