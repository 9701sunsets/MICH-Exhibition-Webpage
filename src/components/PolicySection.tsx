import React from 'react';
import { motion } from 'motion/react';
import { policies } from '@/src/data/ichData';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

export default function PolicySection() {
  return (
    <section id="policies" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="section-title">政策与文献</h2>
            <p className="text-stone-600 mb-8">
              系统梳理国家及地方关于非物质文化遗产保护的法律法规，为数字化传承提供政策指引与学术支撑。
            </p>
            <div className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <h4 className="font-bold text-stone-900 mb-4">相关学术研究摘要</h4>
              <ul className="space-y-4 text-sm text-stone-500">
                <li className="flex gap-2">
                  <span className="text-gold font-bold">01</span>
                  <span>《基于深度学习的蒙古族长调旋律特征提取研究》</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold">02</span>
                  <span>《虚拟现实技术在游牧文化博物馆中的应用探索》</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold">03</span>
                  <span>《非遗数字化保护中的知识图谱构建：以蒙古族传统技艺为例》</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {policies.map((policy) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-stone-50 rounded-lg text-stone-400">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-stone-900">{policy.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-400">
                    <Calendar size={14} />
                    {policy.date}
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {policy.content}
                </p>
                <button className="text-xs font-bold text-sky flex items-center gap-1 hover:underline">
                  阅读全文 <ExternalLink size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
