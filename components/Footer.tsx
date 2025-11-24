import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-slate-900">PromptGravity</h4>
          <p className="text-sm text-slate-500 mt-2 max-w-xs">
            The frictionless marketplace for high-performance prompts.
          </p>
        </div>
        
        <div className="text-xs text-slate-400 text-center md:text-right max-w-md">
          <p>
            &copy; {new Date().getFullYear()} PromptGravity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};