import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryType, Prompt } from '../types';
import { CATEGORIES } from '../constants';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (prompt: Omit<Prompt, 'id' | 'gradient'>) => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryType: CategoryType.ROLE,
    categoryValue: CATEGORIES[CategoryType.ROLE][0],
    content: '',
    tags: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as CategoryType;
    setFormData({
        ...formData,
        categoryType: newType,
        categoryValue: CATEGORIES[newType][0]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
    
    onSubmit({
        title: formData.title,
        description: formData.description,
        content: formData.content,
        categoryType: formData.categoryType,
        categoryValue: formData.categoryValue,
        tags: tagArray
    });

    setStep('success');
    
    // Reset after delay or wait for user to close
    setTimeout(() => {
        setFormData({
            title: '',
            description: '',
            categoryType: CategoryType.ROLE,
            categoryValue: CATEGORIES[CategoryType.ROLE][0],
            content: '',
            tags: ''
        });
    }, 500);
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="absolute top-6 right-6 z-10 flex gap-2">
            <button 
                onClick={handleClose}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Close"
            >
                <X className="w-5 h-5 text-slate-600" />
            </button>
        </div>

        {/* Back button logic if needed, currently reusing close as back for single page modal, 
            but adding explicit back visual if user considers 'Cancel' as back */}

        <AnimatePresence mode="wait">
        {step === 'form' ? (
            <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col h-full"
            >
                <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
                    <button onClick={handleClose} className="md:hidden p-1 -ml-2 text-slate-400">
                        <ChevronLeft />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                            Submit a Prompt
                        </h2>
                        <p className="text-slate-500 mt-1">Share your best workflows with 10M+ users.</p>
                    </div>
                </div>

                <div className="p-8 overflow-y-auto">
                    <form id="prompt-form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                                <input 
                                    required
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. CEO: Strategic Vision" 
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                                    <select 
                                        name="categoryType"
                                        value={formData.categoryType}
                                        onChange={handleTypeChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-black outline-none bg-white"
                                    >
                                        {Object.values(CategoryType).map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Sub-Category</label>
                                    <select 
                                        name="categoryValue"
                                        value={formData.categoryValue}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-black outline-none bg-white"
                                    >
                                        {CATEGORIES[formData.categoryType].map(val => (
                                            <option key={val} value={val}>{val}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                            <input 
                                required
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Briefly describe what this prompt achieves..." 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Prompt Content</label>
                            <textarea 
                                required
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Paste your prompt here. Use [Brackets] for placeholders." 
                                className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none font-mono text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Tags <span className="text-slate-400 font-normal">(comma separated)</span></label>
                            <input 
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="Leadership, Email, Sales..." 
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                            />
                        </div>
                    </form>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                    <button 
                        type="button" 
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        form="prompt-form"
                        className="px-6 py-2.5 rounded-xl font-bold text-white bg-black hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Submit Prompt
                    </button>
                </div>
            </motion.div>
        ) : (
            <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full p-12 text-center"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Prompt Submitted!</h3>
                <p className="text-slate-500 max-w-sm mb-8">
                    Your prompt has been added to the marketplace. It is now instantly available to millions of users.
                </p>
                <button 
                    onClick={handleClose}
                    className="px-8 py-3 rounded-full font-bold text-white bg-black hover:bg-slate-800 shadow-lg transition-all"
                >
                    Back to Marketplace
                </button>
            </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};