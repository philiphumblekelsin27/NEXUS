import React, { useState } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Box, Layers, Zap, Play, X, Rotate3d, Terminal } from 'lucide-react';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Productive X',
    category: 'Application',
    description: 'A cross-platform collaboration suite with offline-first sync architecture.',
    image: 'https://picsum.photos/600/400?random=1',
    year: '2025',
    status: 'Live',
    demoType: 'video'
  },
  {
    id: 'p2',
    name: 'Gideon Suit',
    category: 'Hardware',
    description: 'AI-assisted disaster response exoskeletal prototype for extreme conditions.',
    image: 'https://picsum.photos/600/400?random=2',
    year: '2024',
    status: 'Beta',
    demoType: '3d'
  },
  {
    id: 'p3',
    name: 'STAR Core',
    category: 'Open Source',
    description: 'Modular AI cores for identity, computer vision, and autonomous defence subsystems.',
    image: 'https://picsum.photos/600/400?random=3',
    year: '2026',
    status: 'Concept',
    demoType: 'ai'
  }
];

export const Products: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 relative bg-nexus-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Innovation Pipeline</h2>
            <p className="text-slate-400 max-w-xl">
              From software ecosystems to hardware prototypes. We don't just predict the future; we compile it.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-nexus-accent font-semibold hover:text-white transition-colors mt-6 md:mt-0">
            View Full Roadmap <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-accent to-nexus-purple rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative h-full bg-nexus-800 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors flex flex-col">
                <div className="h-48 overflow-hidden relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      product.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                      product.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20' :
                      'bg-nexus-purple/20 text-nexus-purple border border-nexus-purple/20'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  {/* Demo Trigger Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => setActiveDemo(product)}
                      className="px-6 py-2 rounded-full bg-white/10 hover:bg-nexus-accent hover:text-nexus-900 border border-white/20 hover:border-nexus-accent backdrop-blur-md text-white font-semibold transition-all flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      {product.demoType === 'video' ? <Play size={16} /> :
                       product.demoType === '3d' ? <Rotate3d size={16} /> :
                       <Terminal size={16} />}
                      Launch Demo
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-nexus-accent mb-2 uppercase tracking-widest">
                    {product.category === 'Hardware' ? <CpuIcon /> : product.category === 'Application' ? <BoxIcon /> : <LayersIcon />}
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs text-slate-500 font-mono">EST. {product.year}</span>
                    <span className="text-sm font-semibold text-nexus-accent group-hover:text-white transition-colors cursor-pointer" onClick={() => setActiveDemo(product)}>
                      Interactive Preview
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {activeDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveDemo(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-nexus-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-nexus-800/50">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-white">{activeDemo.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 uppercase tracking-wide">
                    {activeDemo.demoType === 'video' ? 'Video Tour' : activeDemo.demoType === '3d' ? '3D Model' : 'AI Simulation'}
                  </span>
                </div>
                <button onClick={() => setActiveDemo(null)} className="text-slate-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
                
                {activeDemo.demoType === 'video' && (
                  <div className="w-full h-full relative group cursor-pointer">
                    {/* Placeholder for video player */}
                    <img 
                      src="https://picsum.photos/1200/800?grayscale&blur=2" 
                      className="w-full h-full object-cover opacity-50" 
                      alt="Video Thumbnail"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 rounded-full bg-nexus-accent/20 backdrop-blur-sm border border-nexus-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                         <Play size={32} className="text-nexus-accent fill-current" />
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                         <div className="h-full w-1/3 bg-nexus-accent"></div>
                       </div>
                       <div className="flex justify-between mt-2 text-xs font-mono text-slate-400">
                         <span>00:12 / 01:45</span>
                         <span>HD 1080p</span>
                       </div>
                    </div>
                  </div>
                )}

                {activeDemo.demoType === '3d' && (
                  <div className="w-full h-full flex items-center justify-center perspective-1000 bg-gradient-to-b from-gray-900 to-black">
                     {/* Simulated 3D Spinner */}
                     <div className="relative w-64 h-64 animate-[spin_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 border-2 border-nexus-accent/50 rounded-full" style={{ transform: 'rotateX(60deg)' }}></div>
                        <div className="absolute inset-0 border-2 border-nexus-purple/50 rounded-full" style={{ transform: 'rotateY(60deg)' }}></div>
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full" style={{ transform: 'rotateX(-60deg)' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-20 h-20 bg-nexus-accent/10 rounded-lg backdrop-blur-md border border-nexus-accent shadow-[0_0_50px_rgba(6,182,212,0.4)] animate-pulse"></div>
                        </div>
                     </div>
                     <div className="absolute bottom-8 text-center">
                        <p className="text-nexus-accent text-sm font-mono tracking-widest animate-pulse">INITIALIZING CORE GEOMETRY...</p>
                        <p className="text-slate-500 text-xs mt-2">Click and drag to rotate (Simulated)</p>
                     </div>
                  </div>
                )}

                {activeDemo.demoType === 'ai' && (
                  <div className="w-full h-full bg-[#0d1117] p-8 font-mono text-sm overflow-hidden flex flex-col">
                    <div className="flex-1 space-y-2 text-green-400">
                      <p><span className="text-blue-400">root@STAR-CORE:~$</span> init_sequence --force</p>
                      <p className="opacity-50">Loading modules...</p>
                      <p className="opacity-50">Optimizing neural pathways...</p>
                      <p className="text-white">Analysis Complete. Confidence: 99.8%</p>
                      <br />
                      <p><span className="text-blue-400">root@STAR-CORE:~$</span> analyze_sentiment --target="user_input"</p>
                      <p className="text-yellow-400">{`> DETECTED: High Interest Level`}</p>
                      <p className="text-yellow-400">{`> RECOMMENDATION: Schedule Deployment`}</p>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-green-400 inline-block align-middle ml-1"
                      />
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
                       <span className="text-blue-400">input:</span>
                       <input type="text" className="bg-transparent border-none outline-none text-white flex-1" placeholder="Type command..." autoFocus />
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Simple icon wrappers
const CpuIcon = () => <Zap size={14} />;
const BoxIcon = () => <Box size={14} />;
const LayersIcon = () => <Layers size={14} />;