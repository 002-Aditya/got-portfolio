import React from 'react';

export const InputField = ({ label, id, type = 'text', component: Component = 'input', className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-mono text-on-surface-variant">
          {label}
        </label>
      )}
      <Component
        id={id}
        type={type}
        className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
        {...props}
      />
    </div>
  );
};
