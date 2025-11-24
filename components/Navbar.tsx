import React from 'react';
import { Layers, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
    onOpenSubmit: () => void;
    onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubmit, onScrollTo }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center px-6 justify-between transition-all duration-300">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          <Layers className="w-8 h-8 text-black" strokeWidth={2.5} />
        </motion.div>
        <span className="text-xl font-bold tracking-tight text-slate-900">PromptGravity</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <button 
            onClick={() => onScrollTo('explore-section')} 
            className="hover:text-black transition-colors"
        >
            Explore
        </button>
        <button 
            onClick={onOpenSubmit} 
            className="hover:text-black transition-colors"
        >
            Submit
        </button>
        <button 
            onClick={() => onScrollTo('about-section')} 
            className="hover:text-black transition-colors"
        >
            About
        </button>
      </div>

      <div className="flex items-center gap-3">
         <button 
            onClick={onOpenSubmit}
            className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-black hover:bg-slate-800 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
         >
            <Plus className="w-4 h-4" />
            Submit
         </button>
      </div>
    </nav>
  );
};