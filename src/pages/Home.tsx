import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = selectedTags.length
    ? projects.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))  // Check if any of the selected tags match
      )
    : projects;

  const universityProjects = filteredProjects.filter(p => p.type === 'university');
  const workProjects = filteredProjects.filter(p => p.type === 'work');
  // bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-10 bg-black bg-opacity-25 rounded-lg ">
      {/* Intro Section */}
      <section id="one" className="wrapper style3 fade-up pt-8">
        <div className="inner space-y-2">
          <h2 className='font-bold text-3xl'>What can I do</h2>
          <p>Select a tag to filter projects.</p>
        </div>
      </section>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              if (selectedTags.includes(tag)) {
                setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag)); // Remove tag if already selected
              } else {
                setSelectedTags([...selectedTags, tag]); // Add tag if not selected
              }
            }}
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
            onClick={() => setSelectedTags([])}  // Clear all selected tags
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-red-300 bg-red-100 text-red-700 hover:bg-red-200 transition-all duration-200"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Work Projects Grid */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold mt-10">Work Projects</h2>
        <p>Here is a quick review of the projects I did as a part of my job.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* University Projects Grid */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold mt-6 ">University Projects</h2>
        <p>Below you may find the projects I did as an assignment from my Uni.
          To check the code as well as read more in-depth documentation, please refer to the GitHub repository of each project.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universityProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
