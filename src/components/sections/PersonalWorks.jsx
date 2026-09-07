import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_WORKS_DATA } from '../../constants/portfolioData';
import { CodeSnippet } from '../ui/CodeSnippet';
import { 
  ExternalLink, 
  Github,
  Server, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Database,
  Radio,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export const PersonalWorks = () => {
  const [activeTab, setActiveTab] = useState('backend');
  const project = PERSONAL_WORKS_DATA[0];

  return (
    <section className="pt-32 pb-20 lg:py-stack-xl relative z-10 overflow-hidden" id="personal-works">
      {/* Ambient background glows */}
      <div className="ambient-glow-primary top-[10%] right-[-10%] opacity-15" />
      <div className="ambient-glow-secondary bottom-[5%] left-[-10%] opacity-10" />

      <div className="content-container">
        {/* Section Header */}
        <div className="mb-12 lg:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="md:col-span-8">
            <div className="mb-4 lg:mb-6 flex items-center gap-3 lg:gap-4">
              <div className="w-8 lg:w-12 h-[2px] lg:h-px bg-primary" />
              <span className="text-label-sm font-bold text-primary tracking-[0.3em] uppercase">
                Engineering Lab
              </span>
            </div>
            <h2 className="text-display-lg-mobile lg:text-display-lg text-on-surface leading-[1.1] lg:leading-none tracking-tighter">
              Personal <span className="text-primary italic">Works.</span>
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-body-md lg:text-body-lg text-on-surface-variant/60 font-light leading-relaxed">
              Independent production architectures, offline-first systems, and specialized cloud solutions.
            </p>
          </div>
        </div>

        {/* Project Monolith Card */}
        <div className="relative rounded-[36px] lg:rounded-[48px] tonal-layer-2 border border-on-surface/5 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Card Top Metadata & Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 lg:pb-12 border-b border-on-surface/5">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest text-primary bg-primary/10 border border-primary/20 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {project.badge}
                </span>
                <span className="text-[11px] font-mono text-on-surface-variant/40 tracking-wider uppercase">
                  // {project.category}
                </span>
              </div>
              <h3 className="text-display-lg-mobile lg:text-[48px] font-black text-on-surface tracking-tight leading-none mb-3">
                {project.name}
              </h3>
              <p className="text-body-md lg:text-body-lg text-primary/80 font-medium max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-surface font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 group"
              >
                <span>Live Application</span>
                <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Repository Link */}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl border border-primary/20 bg-surface-container-high/60 text-on-surface hover:border-primary/50 hover:text-primary text-xs font-mono font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all group"
              >
                <Github size={15} className="text-primary group-hover:rotate-12 transition-transform" />
                <span>Repository</span>
              </a>
            </div>
          </div>

          {/* Main Grid: Overview & Highlights vs Architecture Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10">
            {/* Left Column: Summary & Architectural Highlights */}
            <div className="lg:col-span-5 flex flex-col">
              <div>
                <h4 className="text-xs font-mono font-bold text-primary tracking-[0.2em] uppercase mb-4">
                  01 // System Overview
                </h4>
                <p className="text-body-sm lg:text-body-md text-on-surface-variant/70 font-light leading-relaxed mb-8">
                  {project.summary}
                </p>

                <h4 className="text-xs font-mono font-bold text-primary tracking-[0.2em] uppercase mb-5">
                  02 // Architectural Pillars
                </h4>
                <ul className="space-y-3.5 mb-8">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-sm lg:text-[13px] text-on-surface-variant/80 font-light leading-relaxed">
                      <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                        <CheckCircle2 size={12} strokeWidth={2.5} />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Deep Architectural Specifications */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Tab Selector */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface-container-lowest/90 border border-on-surface/5 mb-6 self-start">
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    activeTab === 'backend'
                      ? 'bg-primary text-surface shadow-md'
                      : 'text-on-surface-variant/60 hover:text-on-surface'
                  }`}
                >
                  <Server size={13} />
                  <span>Backend Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab('frontend')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    activeTab === 'frontend'
                      ? 'bg-primary text-surface shadow-md'
                      : 'text-on-surface-variant/60 hover:text-on-surface'
                  }`}
                >
                  <Smartphone size={13} />
                  <span>Client & Mobile</span>
                </button>
                <button
                  onClick={() => setActiveTab('config')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    activeTab === 'config'
                      ? 'bg-primary text-surface shadow-md'
                      : 'text-on-surface-variant/60 hover:text-on-surface'
                  }`}
                >
                  <Cpu size={13} />
                  <span>System Spec</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {activeTab === 'backend' && (
                    <motion.div
                      key="backend"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Tech Stack Strips */}
                      <div>
                        <span className="text-[10px] font-mono text-on-surface-variant/40 tracking-widest uppercase block mb-3">
                          Runtime & Infrastructure Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.backend.stack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium tracking-wider text-primary/90 bg-surface-container-high/90 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-primary/60 hover:bg-primary/10 transition-all cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_6px_rgba(165,200,255,0.8)]" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specs List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {project.backend.specs.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-surface-container-high/40 border border-on-surface/5 hover:border-primary/20 transition-colors"
                          >
                            <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block mb-1.5">
                              {item.label}
                            </span>
                            <p className="text-[12px] text-on-surface-variant/70 leading-relaxed font-light">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'frontend' && (
                    <motion.div
                      key="frontend"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Tech Stack Strips */}
                      <div>
                        <span className="text-[10px] font-mono text-on-surface-variant/40 tracking-widest uppercase block mb-3">
                          Universal Client & State Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.frontend.stack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium tracking-wider text-primary/90 bg-surface-container-high/90 border border-primary/20 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-primary/60 hover:bg-primary/10 transition-all cursor-default"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_6px_rgba(165,200,255,0.8)]" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specs List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {project.frontend.specs.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-surface-container-high/40 border border-on-surface/5 hover:border-primary/20 transition-colors"
                          >
                            <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase block mb-1.5">
                              {item.label}
                            </span>
                            <p className="text-[12px] text-on-surface-variant/70 leading-relaxed font-light">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'config' && (
                    <motion.div
                      key="config"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CodeSnippet
                        language="planora.system.json"
                        code={JSON.stringify(project.configSnippet, null, 2)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
