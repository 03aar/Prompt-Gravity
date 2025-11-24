import React, { useState } from 'react';
import { Prompt } from '../types';
import { Copy, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromptCardProps {
  prompt: Prompt;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Decorative Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${prompt.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-slate-100 text-slate-600`}>
                {prompt.categoryValue}
            </span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
          {prompt.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {prompt.description}
        </p>
      </div>

      <div className="relative mt-auto pt-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-3 font-mono text-xs text-slate-600 mb-4 h-24 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
            {prompt.content}
        </div>

        <div className="flex items-center gap-2">
            <button 
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                copied 
                ? 'bg-green-500 text-white shadow-green-200' 
                : 'bg-black text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
            }`}
            >
            <AnimatePresence mode='wait'>
                {copied ? (
                <motion.span 
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                >
                    <Check className="w-4 h-4" /> Copied!
                </motion.span>
                ) : (
                <motion.span 
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2"
                >
                    <Copy className="w-4 h-4" /> Copy Prompt
                </motion.span>
                )}
            </AnimatePresence>
            </button>
        </div>
      </div>
    </motion.div>
  );
};