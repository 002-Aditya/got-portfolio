import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_SEQUENCE = [
  "[SYS] INITIALIZING_NODE_V18.2.0",
  "[DB] CONNECTING_POSTGRESQL_DB_0x1",
  "[DB] INDEX_CHECK: OK",
  "[MSG] RABBITMQ_QUEUE_READY",
  "[AUTH] SSO_HANDLER_ACTIVE",
  "[ARCH] LOADING_MODULAR_CORE",
  "[SYS] SYSTEM_READY"
];

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < LOG_SEQUENCE.length) {
        const nextLog = LOG_SEQUENCE[currentLog];
        setLogs(prev => [...prev, nextLog]);
        currentLog++;
      } else {
        clearInterval(logInterval);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
      }
    }, 300);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Ambient Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#a5c8ff 1px, transparent 1px), linear-gradient(90deg, #a5c8ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          {/* Central Architectural Node */}
          <div className="relative mb-12">
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-12 bg-primary/30 blur-[40px] rounded-full"
            />
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 lg:w-16 lg:h-16 border border-primary/20 rounded-xl relative flex items-center justify-center"
            >
              <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="w-1/2 h-1/2 border border-primary/10 rounded-lg rotate-45" />
            </motion.div>
          </div>

          {/* Terminal Logs */}
          <div className="w-full max-w-sm font-mono space-y-1.5 min-h-[140px]">
            {logs.map((log, i) => (
              <motion.div
                key={`log-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-[9px] lg:text-[10px] tracking-wider ${log.includes('READY') ? 'text-primary' : 'text-on-surface/40'}`}
              >
                <span className="opacity-20 mr-2">[{i.toString().padStart(2, '0')}]</span>
                {log}
              </motion.div>
            ))}
          </div>

          {/* Progress Architecture */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="w-32 lg:w-48 h-[1px] bg-on-surface/5 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary shadow-[0_0_15px_rgba(165,200,255,0.4)]"
              />
            </div>
            <span className="text-[9px] font-mono text-on-surface/20 uppercase tracking-[0.3em]">Loading_Artifacts</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
