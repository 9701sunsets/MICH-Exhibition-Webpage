import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Music, BookOpen, Info, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: '首页', href: '#home', icon: Cloud },
  { name: '非遗项目', href: '#projects', icon: Music },
  { name: '数字化成果', href: '#achievements', icon: BookOpen },
  { name: '政策文献', href: '#policies', icon: Info },
  { name: 'AI问答', href: '#ai-assistant', icon: MessageSquare },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-grass rounded-full flex items-center justify-center text-white font-bold text-xl">
            蒙
          </div>
          <span className={cn(
            "font-serif font-bold text-xl tracking-tight",
            scrolled ? "text-grass" : "text-white drop-shadow-md"
          )}>
            数智草原
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                scrolled ? "text-stone-600" : "text-white drop-shadow-md"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden p-2", scrolled ? "text-grass" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-100 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-stone-600 font-medium p-2 hover:bg-stone-50 rounded-lg"
                >
                  <item.icon size={18} className="text-grass" />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
