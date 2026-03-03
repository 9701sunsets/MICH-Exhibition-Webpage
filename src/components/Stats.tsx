import React from 'react';
import { motion } from 'motion/react';
import { Users, FileText, MapPin, Award } from 'lucide-react';

const stats = [
  { label: '国家级非遗项目', value: '48', icon: Award, color: 'text-gold' },
  { label: '自治区级非遗项目', value: '500+', icon: MapPin, color: 'text-sky' },
  { label: '数字化存档量', value: '12TB', icon: FileText, color: 'text-grass' },
  { label: '覆盖传承人', value: '1200+', icon: Users, color: 'text-orange-500' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl bg-white shadow-sm mb-4 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-stone-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="section-title">数字化传承的意义</h2>
          <p className="text-stone-600 leading-relaxed">
            在全球化与现代化的冲击下，许多古老的蒙古族非物质文化遗产面临着传承断层、受众萎缩的困境。
            数字化传承不仅是记录，更是激活。通过AI技术、3D建模、大数据分析，我们将静态的文化碎片转化为动态的、可交互的数字资产，
            让传统文化在互联网时代找到新的表达方式，实现跨地域、跨代际的永续传播。
          </p>
        </div>
      </div>
    </section>
  );
}
