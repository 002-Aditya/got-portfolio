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
  ArrowRight,
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
};

const SkillIconMap = {
  // Backend
  "Node.js": Hexagon,
  "Spring Boot": Leaf,
  Java: Coffee,
  Python: Terminal,
  Go: Cpu,

  // Data
  PostgreSQL: Database,
  Kafka: Zap,
  RabbitMQ: MessageSquare,
  "Vector Databases": Layers,
  Redis: Database,

  // AI
  "AI Agents": Bot,
  n8n: Workflow,
  Docker: Box,
  Kubernetes: Box,
  AWS: Cloud,

  // Frontend
  React: Atom,
  TailwindCSS: Palette,
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
    y: 24,
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
      className="relative overflow-hidden py-12 md:py-16"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------------------------------ */}

        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                Stack / Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="
                text-5xl
                font-black
                leading-none
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
              "
            >
              Building
              <br />
              <span className="italic text-primary">
                Scalable Systems.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {SKILLS_DATA.description}
            </p>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* SKILLS GRID */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {SKILLS_DATA.categories.map((category, index) => {
            const CategoryIcon =
              IconMap[category.icon] || Binary;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-primary/20
                  hover:bg-white/[0.05]
                  md:p-8
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

                {/* Top */}
                <div className="relative mb-8 flex items-start justify-between">
                  <div>
                    <div
                      className="
                        mb-5
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-primary
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        md:h-16
                        md:w-16
                      "
                    >
                      <CategoryIcon
                        className="h-7 w-7"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-white
                      "
                    >
                      {category.name}
                    </h3>
                  </div>

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.25em]
                      text-white/20
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIndex) => {
                    const SkillIcon =
                      SkillIconMap[skill] || Terminal;

                    return (
                      <motion.div
                        key={sIndex}
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/[0.06]
                          bg-black/20
                          px-4
                          py-2.5
                          text-sm
                          text-white/75
                          transition-all
                          duration-300
                          hover:border-primary/20
                          hover:bg-primary/10
                          hover:text-primary
                        "
                      >
                        <SkillIcon
                          className="h-4 w-4 opacity-70"
                          strokeWidth={2}
                        />
                        <span className="font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Accent */}
                <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/25">
                  <span>Technology Stack</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/* STATS */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-24
            rounded-[32px]
            border
            border-white/[0.06]
            bg-white/[0.03]
            p-6
            backdrop-blur-xl
            md:p-10
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-6
              md:grid-cols-4
              md:gap-10
            "
          >
            {STATS_DATA.map((stat, index) => {
              const StatIcon =
                IconMap[stat.icon] || Activity;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="
                    rounded-2xl
                    border
                    border-white/[0.04]
                    bg-black/10
                    p-5
                    transition-all
                    duration-300
                    hover:border-primary/20
                    hover:bg-primary/[0.04]
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <StatIcon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div
                    className="
                      text-3xl
                      font-black
                      leading-none
                      text-white
                      md:text-4xl
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};