export const CodeSnippet = ({ code, language = 'bash', className = '' }) => {
  return (
    <div className={`rounded-[32px] overflow-hidden bg-surface-container/20 backdrop-blur-xl border border-on-surface/10 shadow-2xl ${className}`}>
      {/* Window Header */}
      <div className="flex items-center px-6 py-4 bg-on-surface/[0.03] border-b border-on-surface/[0.05]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-status-accent-rose/80"></div>
          <div className="w-3 h-3 rounded-full bg-status-accent-amber/80"></div>
          <div className="w-3 h-3 rounded-full bg-status-accent-lavender/80"></div>
        </div>
        <span className="ml-4 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40 font-medium">{language}</span>
      </div>
      {/* Code Area */}
      <div className="p-8 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code className="text-on-surface/90">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

