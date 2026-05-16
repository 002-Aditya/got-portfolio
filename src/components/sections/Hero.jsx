import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { CodeSnippet } from "../ui/CodeSnippet";
import { HERO_DATA } from "../../constants/portfolioData";

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const codeString = `const system = new Architecture({
    scale: 'infinite',
    latency: 'minimal',
    database: 'PostgreSQL',
    APIs: 'REST',
    authentication & authorization: 'JWT, RBAC',
    messaging: 'RabbitMQ',
    containerization: 'Docker',
  });`;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-20 lg:pb-40 overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="ambient-glow-primary top-[-10%] left-[-10%] md:top-[-20%]" />
      <div className="ambient-glow-secondary bottom-[-5%] right-[-5%] md:bottom-[-10%]" />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Heading - Asymmetric focus */}
            <motion.h1
              variants={item}
              className="text-display-xl-mobile lg:text-display-xl text-on-surface mb-8 lg:mb-12 mt-4 lg:mt-10 leading-tight lg:leading-[0.95] tracking-tighter"
            >
              Building Scalable <br className="hidden lg:block" />
              backend systems, <br className="hidden lg:block" />
              workflows, and <br className="lg:hidden" />
              <span className="text-primary italic">enterprise-grade APIs.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-body-md lg:text-body-lg text-on-surface-variant/70 mb-10 lg:mb-12 max-w-xl leading-relaxed font-light"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a href="#projects" className="flex-1 sm:flex-none">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto rounded-xl px-6 py-3.5 text-sm tracking-wide"
                >
                  {HERO_DATA.primaryCta}
                </Button>
              </a>

              <a href="#contact" className="flex-1 sm:flex-none">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto rounded-xl px-6 py-3.5 text-sm tracking-wide no-line-boundary-high"
                >
                  {HERO_DATA.secondaryCta}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Code Snippet - Asymmetric displacement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative z-10 transform lg:translate-y-8 scale-[0.9] sm:scale-100 origin-left lg:origin-center">
              <CodeSnippet
                code={codeString}
                language="architecture.sys"
                className="w-full shadow-2xl"
              />
            </div>

            {/* Architectural Layering - Background blocks */}
            <div className="absolute -z-10 top-2 left-2 w-full h-full bg-on-surface/[0.02] backdrop-blur-md rounded-[32px] lg:rounded-[40px] transform rotate-2 lg:rotate-3 border border-on-surface/5" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimalist */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-margin-mobile md:left-gutter flex items-center gap-6"
      >
        <div className="w-[1px] h-12 tonal-layer-4 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
        <span className="text-[10px] tracking-[0.4em] font-bold text-on-surface-variant/40 uppercase">Architecture / v1.0</span>
      </motion.div> */}
    </section>
  );
};
