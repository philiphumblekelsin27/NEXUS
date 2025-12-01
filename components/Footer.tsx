import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nexus Innovations. All systems nominal.
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-nexus-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-nexus-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-nexus-accent transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};