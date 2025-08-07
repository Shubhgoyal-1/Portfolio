import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Campus Connect",
      description: "A full-stack student collaboration platform built with Next.js, MongoDB, and Tailwind CSS. Features include user authentication, skill-based search, real-time chat, and peer-to-peer connections.",
      image: "https://res.cloudinary.com/kachua/image/upload/v1754042840/Screenshot_2025-08-01_153652_c4bnoy.png",
      technologies: ["React", "Next.js", "MongoDB", "Web Sockets"],
      githubUrl: "https://github.com/Shubhgoyal-1/Campus-Connect",
      liveUrl: "",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Medico",
      description: "A full-stack medical web application where patients can keep their medical records stored. It allows users to add, edit, and delete their medical records, and also provides a search functionality to find specific records.",
      image: "https://res.cloudinary.com/kachua/image/upload/v1754567024/Screenshot_2024-12-30_144247_kmzxmn.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Shubhgoyal-1/Medico",
      liveUrl: "",
      category: "Fullstack"
    },
    {
      id: 3,
      title: "Music Suggestor",
      description: "A music recommendation system that suggests songs based on user emotions and mood.",
      image: "https://res.cloudinary.com/kachua/image/upload/v1754567186/a7284cde-7362-4221-80e9-1ad6931b6fdf.png",
      technologies: ["React.js", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/Shubhgoyal-1/Music-Suggestor",
      liveUrl: "",
      category: "Full Stack"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mt-8 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`z-10 absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors duration-300"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    // rel="noopener noreferrer"
                    className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <Code size={16} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
            <span className="flex items-center">
              <a href="https://github.com/Shubhgoyal-1" target="_blank" rel="noopener noreferrer">
              View All Projects
              </a>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;