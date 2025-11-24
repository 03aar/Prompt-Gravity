import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromptCard } from './components/PromptCard';
import { Footer } from './components/Footer';
import { SubmitModal } from './components/SubmitModal';
import { SAMPLE_PROMPTS, FILTERS, generateMockPrompts } from './constants';
import { Prompt } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize with handcrafted prompts + a large set of generated ones to simulate "10 million"
  useEffect(() => {
    const generated = generateMockPrompts(200); // Generate 200 mock prompts for demo
    setPrompts([...SAMPLE_PROMPTS, ...generated]);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmitPrompt = (newPromptData: Omit<Prompt, 'id' | 'gradient'>) => {
    const newPrompt: Prompt = {
        ...newPromptData,
        id: `custom-${Date.now()}`,
        gradient: 'from-slate-700 to-black' // Default gradient for user submissions
    };
    setPrompts(prev => [newPrompt, ...prev]);
  };

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
          // Offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
  };

  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesSearch = 
        prompt.title.toLowerCase().includes(search.toLowerCase()) || 
        prompt.content.toLowerCase().includes(search.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = 
        activeCategory === 'All' || 
        prompt.categoryValue === activeCategory ||
        prompt.categoryType.toString() === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, prompts]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar 
        onOpenSubmit={() => setIsSubmitModalOpen(true)} 
        onScrollTo={handleScrollTo}
      />
      
      <main>
        <Hero search={search} setSearch={setSearch} />

        {/* Sticky Filter Bar */}
        <div id="explore-section" className="sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 mb-8 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 min-w-max">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === filter
                    ? 'bg-black text-white border-black transform scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="max-w-7xl mx-auto px-6 min-h-[50vh]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">
              {activeCategory === 'All' ? 'Trending Prompts' : `${activeCategory} Prompts`}
            </h2>
            <div className="flex items-center gap-4 text-sm font-medium">
                <span className="text-slate-500">
                    Showing {filteredPrompts.length} of <span className="text-blue-600 font-bold">10,402,193</span> results
                </span>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredPrompts.slice(0, 100).map((prompt) => ( // Render limit for performance in demo
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🌪️</div>
              <h3 className="text-xl font-bold text-slate-900">No prompts found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {setSearch(''); setActiveCategory('All');}}
                className="mt-6 px-6 py-2 bg-slate-100 text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <div id="about-section">
        <Footer />
      </div>
      
      <AnimatePresence>
        {isSubmitModalOpen && (
            <SubmitModal 
                isOpen={isSubmitModalOpen} 
                onClose={() => setIsSubmitModalOpen(false)} 
                onSubmit={handleSubmitPrompt}
            />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 rounded-full bg-black text-white shadow-xl hover:bg-slate-800 transition-all z-40"
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;