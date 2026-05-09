import React from 'react';

export const CodeSnippet = ({ code, language = 'bash', className = '' }) => {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 bg-[#111111] ${className}`}>
      {/* Mac-style Window Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#1a1a1a]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="ml-4 text-xs font-mono text-on-surface-variant">{language}</span>
      </div>
      {/* Code Area */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-code-sm text-primary-fixed-dim leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
