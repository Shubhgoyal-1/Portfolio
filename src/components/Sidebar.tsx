import React from 'react';
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Instagram } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const navigationItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'projects', label: 'PROJECTS', icon: Briefcase },
    { id: 'skills', label: 'SKILLS', icon: Code },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  const socialLinks = [
    { href: 'https://github.com/Shubhgoyal-1', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/shubh-goyal-48130a255/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/ishubhgoyal', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 lg:w-24 bg-transparent z-50 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 lg:h-24">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
          <span onClick={() => onNavigate('home')} className="text-black font-bold text-lg lg:text-xl cursor-pointer">S</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center justify-center space-y-14 lg:space-y-14">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`group relative w-18 h-18 lg:w-22 lg:h-20 flex items-center justify-center transition-all duration-300 ${isActive
                ? 'text-cyan-400'
                : 'text-white/70 hover:text-cyan-400'
                }`}
            >
              {/* Rotated Label */}
              <div
                className={`rotate-[270deg] origin-center text-xs lg:text-sm font-medium tracking-wider transition-all duration-300 ${isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'
                  }`}
              >
                {item.label}
              </div>

              {/* Active Indicator */}
              <div
                className={`absolute -right-5 top-1/2 transform -translate-y-1/2 w-1 h-8 rounded-full transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
              />

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-lg blur-xl transition-all duration-300 ${isActive ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-50 group-hover:scale-105'
                  }`}
              />
            </button>
          );
        })}

      </nav>

      {/* Social Links */}
      <div className="flex flex-col items-center space-y-4 pb-8">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 text-white/50 hover:text-cyan-400 transition-all duration-300"
              aria-label={social.label}
            >
              <Icon
                size={18}
                className="transition-all duration-300 group-hover:scale-110"
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;