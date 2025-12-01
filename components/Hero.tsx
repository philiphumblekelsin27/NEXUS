import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-nexus-purple/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-nexus-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-nexus-accent tracking-wide uppercase">System Online v2.4</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            We build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-accent to-nexus-purple">
              digital future.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Nexus Innovations bridges the gap between hardware reality and software dreams. 
            We engineer high-performance solutions for the next generation of humanity.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-nexus-accent to-nexus-purple text-nexus-900 font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              <PlayCircle size={18} />
              Watch Showreel
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
            <span>TRUSTED BY</span>
            <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple Text Placeholders for Logos to keep it generic but clean */}
              <span>ACME CORP</span>
              <span>STARK IND</span>
              <span>CYBERDYNE</span>
              <span>MASSIVE</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-nexus-purple/20 border border-white/10">
             <img 
               src="https://picsum.photos/800/600?grayscale&blur=2" 
               alt="Technology Visualization" 
               className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
             />
             
             {/* Overlay UI Element */}
             <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl">
               <div className="flex items-center justify-between mb-2">
                 <div className="text-sm font-mono text-nexus-accent">Processing Data...</div>
                 <div className="text-xs text-slate-400">84%</div>
               </div>
               <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                 <div className="w-[84%] h-full bg-gradient-to-r from-nexus-accent to-nexus-purple" />
               </div>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-nexus-accent to-nexus-purple rounded-full opacity-20 blur-xl animate-pulse" />
          <div className="absolute -bottom-5 -left-5 w-40 h-40 border border-nexus-accent/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};