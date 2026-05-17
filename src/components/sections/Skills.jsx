import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Database,
  Bot,
  Zap,
  Activity,
  Cloud,
  Cpu,
  Binary,
  Server,
  Hexagon,
  Leaf,
  Coffee,
  MessageSquare,
  Layers,
  Workflow,
  Box,
  Atom,
  Palette,
  Shapes,
  ShieldCheck,
  Share2,
  Shield,
  GitBranch,
  Send,
  Trello,
} from "lucide-react";

import { SKILLS_DATA, STATS_DATA } from "../../constants/portfolioData";

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

const IconMap = {
  code: Terminal,
  database: Database,
  robot: Bot,
  layout: Shapes,
  zap: Zap,
  activity: Activity,
  cloud: Cloud,
  cpu: Cpu,
  binary: Binary,
  server: Server,
  shield: Shield,
  workflow: Workflow,
  box: Box,
};

const SkillIconMap = {
  "Node.js": Hexagon,
  "Spring Boot": Leaf,
  Java: Coffee,
  Python: Terminal,
  Go: Cpu,
  "Express.js": Server,

  PostgreSQL: Database,
  RabbitMQ: Zap,
  "Vector Databases": Layers,
  Redis: Database,
  Sequelize: Database,
  Hibernate: Layers,

  "AI Agents": Bot,
  n8n: Workflow,
  Docker: Box,
  Kubernetes: Box,
  AWS: Cloud,
  "Microsoft SSO": ShieldCheck,
  JWT: ShieldCheck,
  "REST APIs": Share2,
  "Auth (RBAC)": ShieldCheck,
  "API Security": Shield,

  React: Atom,
  TailwindCSS: Palette,
  Git: GitBranch,
  Postman: Send,
  Jira: Trello,
};

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export const Skills = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden pb-16 pt-32 lg:pt-20 md:pb-32"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="content-container">
        {/* ------------------------------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------------------------------ */}

        <div className="mb-12 lg:mb-24 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 lg:mb-6 flex items-center gap-3 lg:gap-4"
            >
              <div className="h-[2px] w-8 lg:h-px lg:w-10 bg-primary" />
              <span className="text-label-sm font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-primary">
                Stack / Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display-lg-mobile lg:text-display-lg font-black leading-[1.1] lg:leading-[0.95] tracking-tighter text-on-surface"
            >
              Modern <span className="italic text-primary">Tech Stack.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="max-w-xl text-body-md lg:text-body-lg text-on-surface-variant/60 leading-relaxed font-light">
              {SKILLS_DATA.description}
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 2x2 GRID */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0 lg:gap-5 md:grid-cols-2"
        >
          {SKILLS_DATA.categories.map((category, index) => {
            const CategoryIcon = IconMap[category.icon] || Binary;

            return (
              <div key={index}>
                {/* Mobile View: Technical Index */}
                <motion.div 
                  variants={item}
                  className="lg:hidden py-4 first:pt-0"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CategoryIcon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-title-md-mobile font-black text-on-surface uppercase tracking-tight">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
                    {category.skills.map((skill, sIndex) => {
                      const SkillIcon = SkillIconMap[skill] || Terminal;
                      return (
                        <div key={sIndex} className="flex items-center gap-3 py-1 group/skill">
                          <div className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded bg-primary/5 text-primary/40 group-hover/skill:text-primary transition-colors">
                            <SkillIcon size={12} strokeWidth={2} />
                          </div>
                          <span className="text-[11px] font-mono font-bold text-on-surface-variant/85 tracking-wide uppercase truncate">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Desktop View: Architectural Card */}
                <motion.div
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="
                    hidden
                    lg:block
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-on-surface/5
                    bg-surface-container-low/30
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-primary/20
                    hover:bg-surface-container-low/50
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-40
                      w-40
                      translate-x-1/3
                      -translate-y-1/3
                      rounded-full
                      bg-primary/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Heading + Icon */}
                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                        <CategoryIcon className="h-7 w-7" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-on-surface">
                          {category.name}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/20">
                          Node / 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIndex) => {
                      const SkillIcon =
                        SkillIconMap[skill] || Terminal;

                      return (
                        <motion.div
                          key={sIndex}
                          whileHover={{ scale: 1.04 }}
                          className="flex items-center gap-2 rounded-lg border border-on-surface/5 bg-surface-container-high/20 px-4 py-2.5 text-sm text-on-surface-variant/80 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                        >
                          <SkillIcon className="h-4 w-4 opacity-60" strokeWidth={2.5} />
                          <span className="font-bold tracking-wide">{skill}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* STATS */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS_DATA.map((stat, index) => {
            const StatIcon = IconMap[stat.icon] || Activity;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-on-surface/5 bg-surface-container-low/30 p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-surface-container-low/50 group flex flex-col justify-between min-h-[140px] lg:min-h-[180px]"
              >
                {/* Top: Icon & Metadata Tag */}
                <div className="mb-3 lg:mb-5 flex justify-between items-start">
                  <div className="flex h-9 w-9 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500 shrink-0">
                    <StatIcon className="h-4.5 w-4.5 lg:h-5.5 lg:w-5.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[8px] lg:text-[9px] font-mono text-on-surface/10 uppercase tracking-widest font-bold">
                    STAT // 0{index + 1}
                  </span>
                </div>

                {/* Bottom: Stacking Stat Value & Label */}
                <div className="space-y-1">
                  <div className="text-lg lg:text-2xl font-black text-on-surface tracking-tight uppercase truncate">
                    {stat.value}
                  </div>
                  <div className="text-[9px] lg:text-[10px] font-mono font-bold tracking-widest text-primary/70 uppercase">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};