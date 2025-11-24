import { CategoryType, Prompt } from './types';
import React from 'react';
import { Briefcase, Code, PenTool, Zap, Globe, HeartPulse, GraduationCap, TrendingUp, AlertTriangle } from 'lucide-react';

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  [CategoryType.ROLE]: <Briefcase className="w-4 h-4" />,
  [CategoryType.INDUSTRY]: <Globe className="w-4 h-4" />,
  [CategoryType.OCCASION]: <Zap className="w-4 h-4" />,
  [CategoryType.USE_CASE]: <PenTool className="w-4 h-4" />,
};

export const CATEGORIES = {
  [CategoryType.ROLE]: ['Executive', 'Product', 'Engineering', 'Marketing', 'Sales', 'HR', 'Legal'],
  [CategoryType.INDUSTRY]: ['Healthcare', 'Finance', 'Tech', 'Real Estate', 'Retail', 'Education'],
  [CategoryType.OCCASION]: ['Crisis', 'Holidays', 'Launch', 'Onboarding', 'Meeting', 'Retreat'],
  [CategoryType.USE_CASE]: ['Writing', 'Brainstorming', 'Career', 'Coding', 'Analysis', 'Strategy']
};

export const SAMPLE_PROMPTS: Prompt[] = [
  // --- ROLES ---
  {
    id: '1',
    title: 'CEO: Strategic Vision Announcement',
    description: 'Draft a compelling vision statement for company-wide distribution.',
    content: "Act as the CEO of a [Company Type] company. Write a strategic vision announcement to be sent to all employees. The tone should be inspiring, transparent, and confident. Focus on three core pillars: [Pillar 1], [Pillar 2], and [Pillar 3]. Acknowledge recent challenges but pivot quickly to the opportunities ahead. End with a strong call to action that encourages unity and innovation.",
    categoryType: CategoryType.ROLE,
    categoryValue: 'Executive',
    tags: ['Leadership', 'Communication', 'Strategy'],
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: '2',
    title: 'Product Manager: Feature Prioritization',
    description: 'Framework for prioritizing features using the RICE method.',
    content: "Act as a Senior Product Manager. I have a list of potential features: [List Features]. Help me prioritize them using the RICE (Reach, Impact, Confidence, Effort) scoring model. For each feature, estimate a score based on [Target Audience Data] and suggest which one should be the MVP candidate. Output the result in a table format.",
    categoryType: CategoryType.ROLE,
    categoryValue: 'Product',
    tags: ['Productivity', 'Analysis', 'RICE'],
    gradient: 'from-emerald-400 to-teal-600'
  },
  {
    id: '3',
    title: 'Teacher: Complex Topic Simplification',
    description: 'Explain difficult concepts to specific age groups.',
    content: "Act as an expert educator. Explain the concept of [Complex Topic, e.g., Quantum Entanglement] to a [Target Audience, e.g., 5th Grader]. Use analogies related to [Interest, e.g., Video Games] to make it relatable. Verify understanding by providing three quiz questions at the end.",
    categoryType: CategoryType.ROLE,
    categoryValue: 'Education',
    tags: ['Teaching', 'Simplification', 'Learning'],
    gradient: 'from-orange-400 to-amber-600'
  },
  {
    id: '4',
    title: 'Developer: Code Refactoring Expert',
    description: 'Clean up and optimize legacy code blocks.',
    content: "Act as a Senior Software Engineer. I will provide you with a snippet of code in [Language]. Your goal is to refactor it for better readability, performance, and maintainability. Explain the changes you made and why. Here is the code: [Paste Code].",
    categoryType: CategoryType.ROLE,
    categoryValue: 'Engineering',
    tags: ['Coding', 'Refactoring', 'Optimization'],
    gradient: 'from-slate-700 to-slate-900'
  },

  // --- INDUSTRIES ---
  {
    id: '5',
    title: 'Healthcare: Patient Care Plan',
    description: 'Generate a structured care plan based on symptoms.',
    content: "Act as a medical administrative assistant. Based on the following patient symptoms and doctor's notes: [Insert Notes], draft a clear, empathetic, and structured Patient Care Plan summary for the patient to take home. Include sections for 'Immediate Actions', 'Medication Schedule', and 'When to Call the Doctor'.",
    categoryType: CategoryType.INDUSTRY,
    categoryValue: 'Healthcare',
    tags: ['Medical', 'Patient Care', 'Admin'],
    gradient: 'from-rose-400 to-pink-600'
  },
  {
    id: '6',
    title: 'Finance: Market Trend Analysis',
    description: 'Analyze financial data points for trends.',
    content: "Act as a Financial Analyst. Review the following dataset of quarterly earnings: [Insert Data]. Identify the top three trends, potential risks involving [Specific Market Factor], and forecast the trajectory for the next Q based on historical performance. Keep the language formal and suitable for an investor report.",
    categoryType: CategoryType.INDUSTRY,
    categoryValue: 'Finance',
    tags: ['Analysis', 'Reporting', 'Data'],
    gradient: 'from-cyan-500 to-blue-700'
  },
  {
    id: '7',
    title: 'Marketing: Viral Campaign Ideation',
    description: 'Brainstorm creative angles for a product launch.',
    content: "Act as a Creative Director. We are launching [Product Name], which helps [Target Audience] do [Benefit]. Brainstorm 10 unconventional, high-potential viral marketing campaign ideas. Focus on platforms like TikTok and LinkedIn. For each idea, describe the 'hook', the 'content', and the expected 'reaction'.",
    categoryType: CategoryType.INDUSTRY,
    categoryValue: 'Marketing',
    tags: ['Creativity', 'Social Media', 'Strategy'],
    gradient: 'from-violet-500 to-purple-700'
  },

  // --- OCCASIONS ---
  {
    id: '8',
    title: 'Crisis Management: Public Apology',
    description: 'Draft a sincere apology for a service outage or error.',
    content: "Act as a PR Crisis Manager. Draft a public statement addressing [Specific Issue/Outage]. The tone must be sincere, accountable, and transparent without being defensive. Structure it as: Acknowledgment of the issue, Explanation of root cause (briefly), Steps taken to fix it, and Compensation/Prevention measures.",
    categoryType: CategoryType.OCCASION,
    categoryValue: 'Crisis',
    tags: ['PR', 'Communications', 'Urgent'],
    gradient: 'from-red-500 to-red-700'
  },
  {
    id: '9',
    title: 'Holiday: Seasonal Email Campaign',
    description: 'Warm, engaging copy for holiday promotions.',
    content: "Act as a Copywriter. Write a 3-email sequence for a [Holiday Name] promotion for our [Store Type]. Email 1: Tease the sale. Email 2: The main offer (Urgency). Email 3: Last chance. Use emotional storytelling related to [Theme] rather than just hard selling.",
    categoryType: CategoryType.OCCASION,
    categoryValue: 'Holidays',
    tags: ['Email Marketing', 'Sales', 'Seasonal'],
    gradient: 'from-green-400 to-emerald-600'
  },

  // --- USE CASES ---
  {
    id: '10',
    title: 'Writing: Blog Post Outline',
    description: 'Create a SEO-optimized outline for long-form content.',
    content: "Act as an SEO Specialist and Content Writer. Create a detailed outline for a blog post titled '[Title]'. The target keyword is '[Keyword]'. Include H2 and H3 headings, bullet points for key arguments to cover under each section, and a suggestion for a featured snippet. Ensure the flow leads to a CTA about [Product/Service].",
    categoryType: CategoryType.USE_CASE,
    categoryValue: 'Writing',
    tags: ['Content', 'SEO', 'Structure'],
    gradient: 'from-fuchsia-500 to-pink-500'
  },
  {
    id: '11',
    title: 'Brainstorming: Startup Name Generator',
    description: 'Generate unique names based on brand values.',
    content: "Act as a Brand Consultant. Generate 20 unique startup names for a business that does [Function]. The brand values are: [Value 1], [Value 2], [Value 3]. Categorize the names into: 'Abstract', 'Descriptive', 'Compound', and 'Playful'. Check for domain availability potential mentally and prioritize unique spellings.",
    categoryType: CategoryType.USE_CASE,
    categoryValue: 'Brainstorming',
    tags: ['Naming', 'Branding', 'Creative'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: '12',
    title: 'Career: Salary Negotiation Script',
    description: 'Professional script to negotiate a higher offer.',
    content: "Act as a Career Coach. I have received a job offer for [Role] at [Salary]. I want to negotiate for [Target Salary]. Write a script for a phone conversation or email response. Highlight my leverage points: [Skill/Experience 1] and [Skill/Experience 2]. Keep the tone professional, grateful, yet firm.",
    categoryType: CategoryType.USE_CASE,
    categoryValue: 'Career',
    tags: ['Negotiation', 'Jobs', 'Personal'],
    gradient: 'from-indigo-400 to-purple-500'
  }
];

export const FILTERS = [
  'All',
  'Executive',
  'Product',
  'Engineering',
  'Marketing',
  'Healthcare',
  'Finance',
  'Writing',
  'Brainstorming'
];

// --- MOCK GENERATOR FOR "10 MILLION" PROMPTS ---
const ADJECTIVES = ['Advanced', 'Strategic', 'Creative', 'Rapid', 'Detailed', 'Executive', 'Automated', 'Viral', 'Empathetic'];
const NOUNS = ['Analysis', 'Workflow', 'Draft', 'Script', 'Plan', 'Framework', 'Audit', 'Pitch', 'Roadmap'];
const GRADIENTS = [
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-green-600',
    'from-purple-500 to-indigo-600',
    'from-orange-400 to-red-500', 
    'from-pink-500 to-rose-600',
    'from-slate-600 to-slate-800'
];

export const generateMockPrompts = (count: number): Prompt[] => {
    const generated: Prompt[] = [];
    const keys = Object.keys(CATEGORIES) as CategoryType[];
    
    for (let i = 0; i < count; i++) {
        const type = keys[Math.floor(Math.random() * keys.length)];
        const values = CATEGORIES[type];
        const value = values[Math.floor(Math.random() * values.length)];
        const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
        const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
        
        generated.push({
            id: `gen-${i}`,
            title: `${value}: ${adjective} ${noun}`,
            description: `A ${adjective.toLowerCase()} template to generate a ${noun.toLowerCase()} for ${value.toLowerCase()} contexts.`,
            content: `Act as an expert in ${value}. Create a ${adjective.toLowerCase()} ${noun.toLowerCase()} that addresses [Specific Problem]. Ensure the output includes [Requirement 1] and [Requirement 2]. Tone should be professional and actionable.`,
            categoryType: type,
            categoryValue: value,
            tags: [value, noun, 'Generated'],
            gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]
        });
    }
    return generated;
};