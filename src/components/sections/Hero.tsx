import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import RotatingText from '../../utils/RotatingText.js';
import StarBorder from '../../utils/StarBorder.js';
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
        {/* Greeting */}
        <div className="mb-4">
          <span className="inline-flex items-center text-cyan-400 text-sm lg:text-base font-medium mb-4">
            <Sparkles size={16} className="mr-2 animate-spin" />
            Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Shubh Goyal
          </span>
        </h1>

        {/* Typed Role */}
        <div className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 h-12 flex items-center justify-center">
          <RotatingText
            texts={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Problem Solver', 'Runs on Tea']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.030}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about creating beautiful, functional, and user-friendly applications.
          I bring ideas to life through code and design, focusing on clean architecture and optimal user experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <StarBorder
            as="button"
            className=""
            color="cyan"
            speed="3s"
          >
            <button
              onClick={scrollToProjects}
            >
              <span className="relative z-10">View My Work</span>
            </button>

          </StarBorder>
          <a download href="/Resume.pdf">
            <button className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              <span className="flex items-center">
                Download Resume
                <ChevronDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown
            size={24}
            className="text-cyan-400/70 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
            onClick={scrollToProjects}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-cyan-400/50" />
    </section>
  );
};

export default Hero;