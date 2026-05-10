import React from 'react';

export const CodeSnippet = ({ code, language = 'bash', className = '' }) => {
  return (
    <div className={`rounded-3xl overflow-hidden tonal-layer-2 shadow-2xl ${className}`}>
      {/* Window Header */}
      <div className="flex items-center px-6 py-4 tonal-layer-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-on-surface-variant/20"></div>
          <div className="w-3 h-3 rounded-full bg-on-surface-variant/20"></div>
          <div className="w-3 h-3 rounded-full bg-on-surface-variant/20"></div>
        </div>
        <span className="ml-4 text-label-sm uppercase tracking-widest text-on-surface-variant/60">{language}</span>
      </div>
      {/* Code Area */}
      <div className="p-8 overflow-x-auto">
        <pre className="font-mono text-code-sm text-primary leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

