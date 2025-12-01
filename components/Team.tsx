import React, { useState, useEffect, useRef } from 'react';
import { TeamMember } from '../types';
import { Linkedin, Twitter, Github, X, Award, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const team: TeamMember[] = [
  {
    id: 't1',
    name: 'Philip Lucian',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/300/300?random=10',
    bio: 'Visionary architect behind the STAR Core.',
    fullBio: 'Philip Lucian founded Nexus Innovations with a singular goal: to merge human intuition with machine precision. With over 15 years in systems architecture and quantum computing research, he leads the company\'s long-term strategy.',
    skills: ['System Architecture', 'Quantum Computing', 'Strategic Leadership', 'Public Speaking'],
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    id: 't2',
    name: 'Lunara Seraphelle',
    role: 'Co-CEO',
    image: 'https://picsum.photos/300/300?random=11',
    bio: 'Operational strategist and ethical AI advocate.',
    fullBio: 'Lunara brings a decade of experience in scaling tech operations while maintaining rigorous ethical standards. She ensures that every Nexus product serves humanity first.',
    skills: ['AI Ethics', 'Global Operations', 'Corporate Strategy', 'Team Building'],
    socials: { twitter: '#', linkedin: '#' }
  },
  {
    id: 't3',
    name: 'Nyron',
    role: 'Chief Technology Officer',
    image: 'https://picsum.photos/300/300?random=12',
    bio: 'Lead engineer for the Gideon exoskeleton project.',
    fullBio: 'A prodigy in robotics and embedded systems, Nyron oversees the hardware division. His work on the Gideon Suit has revolutionized disaster response capabilities.',
    skills: ['Robotics', 'Embedded Systems (Rust)', 'Hardware Design', 'Neural Interfaces'],
    socials: { github: '#', linkedin: '#' }
  },
  {
    id: 't4',
    name: 'Sarah Chen',
    role: 'Head of Product',
    image: 'https://picsum.photos/300/300?random=13',
    bio: 'Driving user experience for Productive X.',
    fullBio: 'Sarah bridges the gap between complex backend logic and seamless user interfaces. She leads the design team for the Productive X suite.',
    skills: ['UX/UI Design', 'Product Strategy', 'React Ecosystem', 'User Research'],
    socials: { twitter: '#' }
  }
];

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Trap focus or manage focus could be added here for stricter a11y, 
  // but basic keyboard navigation is supported via button semantics.

  return (
    <section id="team" className="py-24 bg-nexus-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">The Minds Behind Nexus</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A diverse coalition of engineers, designers, and futurists working in unison.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <button 
              key={member.id} 
              onClick={() => setSelectedMember(member)}
              className="group text-center focus:outline-none focus:ring-2 focus:ring-nexus-accent rounded-xl p-4 transition-colors hover:bg-white/5"
              aria-label={`View profile of ${member.name}`}
            >
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-white/10 to-white/0 group-hover:from-nexus-accent group-hover:to-nexus-purple transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-nexus-900 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-nexus-900 rounded-full p-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <span className="text-white text-xs font-bold">View</span>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">{member.name}</h3>
              <p className="text-nexus-accent text-sm mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs line-clamp-2">{member.bio}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-nexus-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexus-900 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 relative">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <h3 id="modal-title" className="text-2xl font-display font-bold text-white">{selectedMember.name}</h3>
                <p className="text-nexus-accent font-medium mb-4">{selectedMember.role}</p>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedMember.fullBio || selectedMember.bio}
                </p>

                {selectedMember.skills && (
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <Award size={14} /> Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    <Briefcase size={14} /> Connect
                  </h4>
                  <div className="flex gap-4">
                    {selectedMember.socials.linkedin && (
                      <a href={selectedMember.socials.linkedin} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <Linkedin size={16} /> LinkedIn
                      </a>
                    )}
                    {selectedMember.socials.github && (
                      <a href={selectedMember.socials.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {selectedMember.socials.twitter && (
                      <a href={selectedMember.socials.twitter} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <Twitter size={16} /> Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};