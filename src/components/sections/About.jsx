import { IMPACT_DATA } from '../../constants/portfolioData';
import { Database, Workflow, ShieldCheck, Layers, Server, Cpu } from 'lucide-react';

const IconMap = {
  database: Database,
  workflow: Workflow,
  security: ShieldCheck,
  schema: Layers,
  api: Server,
  enterprise: Cpu
};

export const About = () => {
  return (
    <section className="py-stack-xl relative z-10" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-display-lg text-on-surface mb-8 leading-[1.1]">Architecting <br/><span className="text-primary">the invisible.</span></h2>
            <p className="text-body-lg text-on-surface-variant/80 max-w-xl leading-relaxed font-light">
              My focus lies deep within the server architecture. I build the robust foundations that power complex applications, ensuring data flows securely, APIs respond instantly, and enterprise systems scale effortlessly under load.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-surface-container-high/20 no-line-boundary overflow-hidden rounded-[32px] lg:translate-x-12">
            {IMPACT_DATA.map((item, index) => {
              const Icon = IconMap[item.icon];
              return (
                <div key={index} className="p-10 tonal-layer-2 group hover:tonal-layer-4 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-2xl tonal-layer-3 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-8">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <div>
                    <span className="text-headline-lg font-bold text-on-surface block mb-1">{item.label}</span>
                    <p className="text-label-sm uppercase tracking-widest text-on-surface-variant/60 mb-4">{item.description}</p>
                    {item.subtext && (
                      <div className="no-line-boundary-high h-px w-8 mb-4" />
                    )}
                    {item.subtext && (
                      <p className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">{item.subtext}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Highlights - Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
          <div className="md:col-span-8 p-12 tonal-layer-1 rounded-[40px] group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
            <Server className="text-primary mb-8 group-hover:rotate-12 transition-transform duration-500" size={40} strokeWidth={1} />
            <h3 className="text-display-lg-mobile md:text-headline-lg text-on-surface mb-4">API Architecture</h3>
            <p className="text-body-lg text-on-surface-variant/70 leading-relaxed font-light">Designing resilient, versioned REST endpoints that serve as the backbone for high-performance frontend experiences.</p>
          </div>
          
          <div className="md:col-span-4 p-12 tonal-layer-3 rounded-[40px] group flex flex-col justify-end">
            <Cpu className="text-primary mb-8" size={40} strokeWidth={1} />
            <h3 className="text-headline-lg text-on-surface mb-4">Enterprise Systems</h3>
            <p className="text-body-md text-on-surface-variant/70 leading-relaxed">Building distributed, fault-tolerant microservices that handle extreme concurrency with 99.99% uptime guarantees.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

