import React, { useState } from 'react';
import { Send, MapPin, Mail, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate generic API call
    setTimeout(() => {
      setFormState('success');
      alert("Message received. We will initiate protocol shortly.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-nexus-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">Initiate Contact</h2>
            <p className="text-slate-400 mb-8">
              Interested in enterprise integration, investment opportunities, or joining the research division? 
              Open a channel.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-nexus-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">HQ Location</h4>
                  <p className="text-slate-400 text-sm">Tech District, Umuahia<br/>Abia State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-nexus-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Encrypted Comms</h4>
                  <p className="text-slate-400 text-sm">hello@nexusinnovations.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Social Grid</h4>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-slate-500 hover:text-white text-sm">Twitter/X</a>
                    <a href="#" className="text-slate-500 hover:text-white text-sm">LinkedIn</a>
                    <a href="#" className="text-slate-500 hover:text-white text-sm">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Identity</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-nexus-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Frequency (Email)</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-nexus-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-accent transition-colors"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Transmission</label>
                <textarea 
                  rows={4} 
                  required 
                  className="w-full bg-nexus-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-accent transition-colors"
                  placeholder="Project details..."
                />
              </div>
              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-nexus-accent to-nexus-purple text-nexus-900 font-bold hover:shadow-lg hover:shadow-nexus-accent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formState === 'idle' ? (
                  <>Send Transmission <Send size={18} /></>
                ) : (
                  'Processing...'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};