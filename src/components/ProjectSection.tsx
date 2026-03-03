import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ichProjects } from '@/src/data/ichData';
import { Play, User, Info, Database } from 'lucide-react';

const categories = [
  { id: 'all', name: '全部' },
  { id: 'music', name: '民间音乐' },
  { id: 'dance', name: '传统舞蹈' },
  { id: 'skill', name: '传统技艺' },
  { id: 'oral', name: '口头传统' },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? ichProjects 
    : ichProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">非遗项目展示</h2>
          <p className="text-stone-500 mt-4">分类探索蒙古族璀璨的非物质文化遗产</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id 
                  ? 'bg-grass text-white shadow-lg' 
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Play size={20} fill="currentColor" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-stone-900">{project.name}</h3>
                    <span className="text-xs px-2 py-1 bg-stone-100 text-stone-500 rounded uppercase tracking-wider">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                  
                  <p className="text-stone-600 text-sm line-clamp-2 mb-4">
                    {project.intro}
                  </p>
                  
                  <div className="space-y-2 border-t border-stone-50 pt-4">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <User size={14} className="text-gold" />
                      <span className="font-medium">传承人:</span> {project.inheritor}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-stone-500">
                      <Database size={14} className="text-sky mt-0.5" />
                      <div>
                        <span className="font-medium">数字化现状:</span>
                        <p className="mt-1 text-stone-400 leading-relaxed italic">
                          {project.digitalStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
