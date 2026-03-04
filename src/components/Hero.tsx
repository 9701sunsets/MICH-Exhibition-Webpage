import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/grassland/1920/1080" 
          alt="Inner Mongolia Grassland" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            数智草原
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 tracking-widest uppercase drop-shadow-md">
            蒙古族非遗数字化传承平台
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            以人工智能赋能传统文化，跨越时空阻隔，让古老的非遗在数字时代焕发新生。
            我们致力于通过数字化手段，记录、保护并传播蒙古族璀璨的文化遗产。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gold hover:bg-gold/90 text-white font-bold rounded-full transition-all transform hover:scale-105"
            >
              探索非遗项目
            </a>
            <a 
              href="#ai-assistant" 
              className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold rounded-full border border-white/30 transition-all"
            >
              咨询AI助手
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
