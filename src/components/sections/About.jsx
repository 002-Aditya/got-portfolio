import { HERO_DATA, IMPACT_DATA } from '../../constants/portfolioData';
import { Server, Share2, Gauge, Workflow, ShieldCheck, Database, Layers, Cpu } from 'lucide-react';

const IconMap = {
  database: Gauge,
  workflow: Workflow,
  security: ShieldCheck,
  schema: Database,
  api: Server,
  enterprise: Cpu
};

export const About = () => {
  return (
    <section className="py-stack-xl relative z-10" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Narrative & Feature Cards */}
          <div className="lg:col-span-6">
            <h2 className="text-display-lg text-on-surface mb-8 leading-[0.9] tracking-tighter">
              Architecting <br/>
              <span className="text-primary italic opacity-90">the unseen.</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant/70 max-w-xl leading-relaxed font-light mb-16">
              {HERO_DATA.description}
            </p>

            {/* Feature Cards Bottom Left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 tonal-layer-1 rounded-[32px] group border border-on-surface/5">
                <div className="w-12 h-12 rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Server size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3">API Architecture</h3>
                <p className="text-body-sm text-on-surface-variant/60 leading-relaxed">
                  Designing resilient, versioned REST endpoints.
                </p>
              </div>

              <div className="p-8 tonal-layer-1 rounded-[32px] group border border-on-surface/5">
                <div className="w-12 h-12 rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Share2 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3">Enterprise Systems</h3>
                <p className="text-body-sm text-on-surface-variant/60 leading-relaxed">
                  Building distributed, fault-tolerant microservices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Metric Cards from Data */}
          <div className="lg:col-span-6 space-y-4">
            {IMPACT_DATA.map((item, index) => {
              const Icon = IconMap[item.icon] || Layers;
              const isHighlight = item.icon === 'workflow'; // Matching the highlight from the design

              return (
                <div 
                  key={index} 
                  className={`p-10 rounded-[32px] flex items-center gap-8 border transition-all duration-500 ${
                    isHighlight 
                      ? 'tonal-layer-2 border-on-surface/10 hover:tonal-layer-3' 
                      : 'tonal-layer-1 border-on-surface/5 hover:tonal-layer-2'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    isHighlight ? 'bg-primary/10 text-primary' : 'tonal-layer-2 text-on-surface-variant/40'
                  }`}>
                    <Icon size={28} strokeWidth={1} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`${item.label.includes('%') ? 'text-display-sm' : 'text-title-lg'} text-on-surface leading-none font-extrabold`}>
                        {item.label}
                      </span>
                      {item.label.includes('%') ? null : <span className="text-title-lg text-on-surface font-extrabold">{item.description}</span>}
                    </div>
                    {item.label.includes('%') && <p className="text-label-sm text-on-surface-variant/60 uppercase tracking-widest">{item.description}</p>}
                    {item.subtext && <p className="text-label-sm text-on-surface-variant/60 uppercase tracking-widest">{item.subtext}</p>}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

