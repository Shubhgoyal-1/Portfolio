import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubhgoyal.0312@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=shubhgoyal.0312@gmail.com",
      target: "_blank"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7668221543",
      href: "",
      target: ""
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      href: "#",
      target: ""
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Shubhgoyal-1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shubh-goyal-48130a255/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ishubhgoyal", label: "Instagram" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="flex justify-center px-4">
          <div className="flex items-center max-w-5xl w-full">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className='flex items-center justify-center flex-col'>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Whether you have a project in mind, need technical consultation, or just want to say hello,
                  I'm always excited to connect with fellow developers and potential collaborators.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.target}
                      className="group flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                    >
                      <div className="p-3 bg-cyan-400/20 rounded-lg mr-4 group-hover:bg-cyan-400/30 transition-colors duration-300">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{contact.label}</p>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 text-white/60 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                        aria-label={social.label}
                      >
                        <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Shubh Goyal. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;