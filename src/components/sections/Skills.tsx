import React, { useState, useEffect } from 'react';
import { Code2, Database, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setVisibleSkills(prev => [...new Set([...prev, skillIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('[data-skill-index]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 100, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 100, color: "from-pink-500 to-pink-700" },
        { name: "Next.js", level: 100, color: "from-red-600 to-red-800" },
        { name: "Tailwind CSS", level: 100, color: "from-cyan-400 to-cyan-600" },
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 100, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 100, color: "from-yellow-400 to-yellow-600"},
      ]
    },
    {
      icon: Database,
      title: "Database & Design",
      skills: [
        { name: "MongoDB", level: 100, color: "from-green-400 to-green-600" },
        { name: "Firebase", level: 100, color: "from-yellow-400 to-yellow-600" },
        { name: "Figma", level: 100, color: "from-purple-400 to-purple-600" },
        { name: "Photoshop", level: 100, color: "from-blue-400 to-blue-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mt-8 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <div
                key={categoryIndex}
                data-skill-index={categoryIndex}
                className={`bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/10 ${
                  visibleSkills.includes(categoryIndex) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-400/20 rounded-lg mr-4">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        visibleSkills.includes(categoryIndex) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                      }}
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        {/* <span className="text-cyan-400 font-semibold">{skill.level}%</span> */}
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: visibleSkills.includes(categoryIndex) ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "2+", label: "Projects Completed" },
              { number: "Freshie", label: "Years Experience" },
              { number: "10+", label: "Technologies" },
              { number: "100%", label: "Problem Solver" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;