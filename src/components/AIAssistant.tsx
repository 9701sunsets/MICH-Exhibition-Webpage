import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

const SUGGESTIONS = [
  "什么是蒙古族长调？",
  "呼麦是如何发声的？",
  "AI如何帮助非遗保护？",
  "介绍一下《江格尔》史诗。"
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: '您好！我是“数智草原”AI助手。您可以向我询问关于蒙古族非物质文化遗产的知识，或了解我们的数字化保护项目。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMsg = text;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "你是一个专门研究蒙古族非物质文化遗产的专家，名叫'数智草原AI助手'。你的任务是向用户介绍蒙古族的长调、呼麦、安代舞、传统技艺、英雄史诗等文化遗产，并解释数字化技术（如AI、3D建模、大数据）如何帮助这些文化的保护与传播。回答要专业、亲切、富有文化底蕴。如果用户问的问题与蒙古族文化或非遗无关，请礼貌地引导回主题。",
        },
      });

      setMessages(prev => [...prev, { role: 'bot', content: response.text || '抱歉，我现在无法回答这个问题。' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', content: '连接AI服务时出现了一点小问题，请稍后再试。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">AI智能问答</h2>
          <p className="text-stone-500 mt-4">探索AI如何赋能文化传播，即时获取非遗知识</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-grass/5 rounded-2xl border border-grass/10">
              <div className="flex items-center gap-2 text-grass font-bold mb-3">
                <Sparkles size={18} />
                <span>AI 赋能</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                我们利用大语言模型技术，构建了非遗知识库。AI不仅能回答问题，还能协助研究人员进行文献整理与语义分析。
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">示例问题</p>
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="w-full text-left text-sm p-3 rounded-xl border border-stone-100 hover:border-gold/50 hover:bg-stone-50 transition-all text-stone-600"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Side */}
          <div className="lg:col-span-3 flex flex-col h-[600px] bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden shadow-inner">
            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-4",
                    msg.role === 'user' ? "flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm",
                    msg.role === 'user' ? "bg-gold text-white" : "bg-grass text-white"
                  )}>
                    {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-gold text-white rounded-tr-none" 
                      : "bg-white text-stone-800 shadow-sm rounded-tl-none"
                  )}>
                    <div className="prose prose-sm max-w-none prose-stone">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-grass text-white flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-stone-400 text-sm">
                    <Loader2 size={16} className="animate-spin" />
                    AI正在思考中...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-stone-200">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="输入您想了解的非遗知识..."
                  className="w-full pl-4 pr-12 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-grass transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-grass text-white rounded-lg flex items-center justify-center hover:bg-grass/90 disabled:opacity-50 transition-all"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
