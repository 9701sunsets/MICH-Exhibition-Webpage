import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '@/src/data/ichData';
import { Library, Database, Video, Globe } from 'lucide-react';

const iconMap: Record<string, any> = {
  Library,
  Database,
  Video,
  Globe,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">数字化成果专区</h2>
          <p className="text-stone-500 mt-4">利用现代科技手段构建的蒙古族文化数字资产库</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-grass group-hover:bg-grass group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <button className="mt-4 text-sm font-bold text-gold hover:text-gold/80 flex items-center gap-1">
                    查看详情 <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
