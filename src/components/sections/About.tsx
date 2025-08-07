import React, { useState, useEffect } from 'react';
import { Download, MapPin, Calendar, Mail, Phone, Award, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Ghaziabad , India' },
    { icon: Calendar, label: 'Age', value: '20 Years' },
    { icon: Mail, label: 'Email', value: 'shubhgoyal.0312@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7668221543' },
  ];

  const stats = [
    { icon: Award, number: '2+', label: 'Projects Completed' },
    { icon: Coffee, number: '100+', label: 'Cups of Tea' },
    { icon: Heart, number: '30%', label: 'Vibe Coding' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives my passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Personal Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
            {/* Profile Photo */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-400 animate-spin"
                  style={{ animationDuration: '3s' }}>
                </div>
                <div className="absolute inset-1 rounded-full bg-black"></div>

                {/* Photo Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  {/* Placeholder for photo - replace with actual image */}
                  <img
                    src="https://res.cloudinary.com/kachua/image/upload/v1754040342/IMG_20240831_202431_qplttp.jpg"
                    alt="John Doe"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* If no photo, show placeholder */}
                  {/* <div className="text-6xl text-cyan-400">👨‍💻</div> */}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-600 rounded-full animate-bounce"
                  style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-300 rounded-full animate-bounce"
                  style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-cyan-400/20 rounded-lg mr-4">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* About Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm <span className="text-cyan-400">Shubh Goyal</span>
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I'm an aspiring Full Stack Developer with a strong passion for building digital solutions that make an impact. My journey into tech began with a curiosity for how things work, which quickly grew into a love for turning ideas into interactive web applications.
                </p>

                <p>
                  I enjoy working with modern web technologies like React and Node.js, and I’m constantly learning more about backend development, API design, and cloud platforms. I focus on writing clean, understandable code and crafting user experiences that are both functional and intuitive.
                </p>

                <p>
                  When I’m not coding, I’m exploring new tools and technologies or diving into development tutorials—usually with a cup of tea by my side and big plans for what to build next.
                </p>

              </div>

              {/* Skills Highlights */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">What I Do Best</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Frontend Development',
                    'Backend Architecture',
                    'UI/UX Design',
                    'Database Design',
                    'API Development',
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-sm transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-white/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8">
                <a download href="/Resume.pdf">
                  <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105">
                    <Download size={18} className="mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-400/20 rounded-lg">
                      <Icon size={24} className="text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;