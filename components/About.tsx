import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-nexus-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Mission & Vision</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We are a multidisciplinary team combining software, hardware, and design to build meaningful products. 
                We believe that technology should be an extension of human will, not a replacement for it.
              </p>
              <div className="space-y-4">
                {[
                  "Human-First Technology Design",
                  "Ethical AI Implementation",
                  "Sustainable Hardware Engineering",
                  "Open Source Contribution"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-nexus-accent" size={20} />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="glass-panel p-6 rounded-2xl bg-nexus-800/50">
                   <h4 className="text-nexus-accent text-3xl font-bold mb-1">5+</h4>
                   <p className="text-xs text-slate-400 uppercase tracking-wider">Years Active</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl bg-nexus-800/50">
                   <h4 className="text-white text-3xl font-bold mb-1">12</h4>
                   <p className="text-xs text-slate-400 uppercase tracking-wider">Global Patents</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-2xl bg-nexus-800/50">
                   <h4 className="text-nexus-purple text-3xl font-bold mb-1">3M+</h4>
                   <p className="text-xs text-slate-400 uppercase tracking-wider">Users Served</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl bg-nexus-800/50">
                   <h4 className="text-white text-3xl font-bold mb-1">24/7</h4>
                   <p className="text-xs text-slate-400 uppercase tracking-wider">System Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};