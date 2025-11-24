import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface HeroProps {
  search: string;
  setSearch: (val: string) => void;
}

const floatingTags = [
  { text: "CEO Strategy", x: -100, y: -50, delay: 0 },
  { text: "Python Refactor", x: 120, y: -80, delay: 0.5 },
  { text: "Viral TikTok", x: -150, y: 50, delay: 1 },
  { text: "Crisis PR", x: 140, y: 80, delay: 1.5 },
  { text: "Q3 Analysis", x: 0, y: -120, delay: 0.8 },
  { text: "SEO Blog", x: 0, y: 130, delay: 2 },
];

export const Hero: React.FC<HeroProps> = ({ search, setSearch }) => {
  return (
    <div className="relative w-full pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
      
      {/* Background Floating Elements (Simulating Antigravity) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 md:opacity-20">
        {floatingTags.map((tag, idx) => (
          <motion.div
            key={idx}
            className="absolute left-1/2 top-1/2 bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-full text-xs md:text-sm whitespace-nowrap"
            initial={{ x: tag.x, y: tag.y, opacity: 0 }}
            animate={{ 
              y: [tag.y, tag.y - 20, tag.y + 10, tag.y],
              x: [tag.x, tag.x + 10, tag.x - 10, tag.x],
              opacity: 1
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: tag.delay
            }}
            style={{ marginLeft: tag.x, marginTop: tag.y }}
          >
            {tag.text}
          </motion.div>
        ))}
      </div>

      <div className="z-10 relative text-center max-w-3xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Prompts without <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">friction.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The copy-paste marketplace for professionals. 
          Zero sign-up. 100% free. Inspired by kinetic design.
        </motion.p>

        <motion.div 
          className="relative max-w-lg mx-auto w-full group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search prompts for 'Negotiation', 'Coding', 'Marketing'..." 
            className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm text-lg focus:outline-none focus:border-black focus:shadow-xl transition-all duration-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>
      </div>
    </div>
  );
};