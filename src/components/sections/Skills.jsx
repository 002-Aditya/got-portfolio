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
      className="relative overflow-hidden pb-16 pt-stack-mobile-lg lg:pt-20 md:pb-32"
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
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
          "
        >
          {SKILLS_DATA.categories.map((category, index) => {
            const CategoryIcon =
              IconMap[category.icon] || Binary;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  lg:rounded-[28px]
                  border
                  border-on-surface/5
                  bg-surface-container-low/30
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-primary/20
                  hover:bg-surface-container-low/50
                  lg:p-8
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 lg:h-14 lg:w-14 lg:rounded-2xl">
                      <CategoryIcon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-2xl font-black tracking-tight text-on-surface">
                        {category.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface/20">
                        Node / 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {category.skills.map((skill, sIndex) => {
                    const SkillIcon =
                      SkillIconMap[skill] || Terminal;

                    return (
                      <motion.div
                        key={sIndex}
                        whileHover={{ scale: 1.04 }}
                        className="flex items-center gap-2 rounded-lg border border-on-surface/5 bg-surface-container-high/20 px-3 py-1.5 text-[11px] lg:text-sm text-on-surface-variant/80 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary lg:px-4 lg:py-2.5"
                      >
                        <SkillIcon className="h-3 w-3 opacity-60 lg:h-4 lg:w-4" strokeWidth={2.5} />
                        <span className="font-bold tracking-wide">{skill}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
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
          className="mt-12 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {STATS_DATA.map((stat, index) => {
            const StatIcon = IconMap[stat.icon] || Activity;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-on-surface/5 bg-surface-container-low/30 p-5 lg:p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-surface-container-low/50 group"
              >
                <div className="mb-4 lg:mb-6 flex items-center gap-3 lg:gap-4">
                  <div className="flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center rounded-lg lg:rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                    <StatIcon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.8} />
                  </div>
                  <div className="text-2xl lg:text-4xl font-black leading-none text-on-surface tracking-tighter">
                    {stat.value}
                  </div>
                </div>
                <div className="text-[9px] lg:text-[11px] font-black tracking-[0.2em] text-on-surface/40 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};