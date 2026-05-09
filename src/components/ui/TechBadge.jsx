import React from 'react';

export const TechBadge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary font-mono text-label-caps whitespace-nowrap ${className}`}>
      {children}
    </span>
  );
};
