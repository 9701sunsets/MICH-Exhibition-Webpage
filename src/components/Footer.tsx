import React from 'react';
import { motion } from 'motion/react';
import { Github, Mail, Globe, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-grass rounded-full flex items-center justify-center text-white font-bold text-xl">
                蒙
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                数智草原
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              本项目为大学社会实践成果展示，旨在通过数字化技术手段，探索蒙古族非物质文化遗产的保护、传承与创新。
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">首页</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">非遗项目</a></li>
              <li><a href="#achievements" className="hover:text-gold transition-colors">数字化成果</a></li>
              <li><a href="#policies" className="hover:text-gold transition-colors">政策文献</a></li>
              <li><a href="#ai-assistant" className="hover:text-gold transition-colors">AI问答</a></li>
            </ul>
          </div>

          <div id="about">
            <h4 className="text-white font-bold mb-6">关于我们</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users size={18} className="text-gold mt-1" />
                <div>
                  <p className="text-white text-sm font-medium">团队名称</p>
                  <p className="text-xs">“数智草原”社会实践调研团</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center text-gold mt-1">
                  <div className="w-1 h-1 bg-current rounded-full" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">项目意义</p>
                  <p className="text-xs leading-relaxed">
                    通过实地调研与技术开发，构建非遗数字化模型，为民族文化保护贡献青年力量。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-xs">
          <p>© 2024 数智草原——蒙古族非遗数字化传承平台. All Rights Reserved.</p>
          <p className="mt-2 text-stone-600 italic">大学社会实践项目成果展示</p>
        </div>
      </div>
    </footer>
  );
}
