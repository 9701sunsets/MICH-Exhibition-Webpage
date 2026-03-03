export interface ICHProject {
  id: string;
  category: 'music' | 'dance' | 'skill' | 'oral';
  name: string;
  intro: string;
  inheritor: string;
  digitalStatus: string;
  imageUrl: string;
  videoUrl?: string;
}

export const ichProjects: ICHProject[] = [
  {
    id: '1',
    category: 'music',
    name: '蒙古族长调',
    intro: '长调是蒙古族最具代表性的民间音乐形式，以其悠长、辽阔、深沉的旋律著称，被誉为“草原音乐活化石”。',
    inheritor: '宝音德力格尔（国家级）',
    digitalStatus: '已完成4K高清影像采集及音频数字化修复，建立多维声学数据库。',
    imageUrl: 'https://picsum.photos/seed/longsong/800/600',
  },
  {
    id: '2',
    category: 'music',
    name: '呼麦',
    intro: '呼麦是一种独特的喉音艺术，一个人可以同时发出两个或两个以上声部的声音，形成奇妙的和声。',
    inheritor: '斯琴毕力格（国家级）',
    digitalStatus: '利用AI声纹识别技术进行发声机理建模，开发交互式教学软件。',
    imageUrl: 'https://picsum.photos/seed/khoomei/800/600',
  },
  {
    id: '3',
    category: 'dance',
    name: '安代舞',
    intro: '安代舞起源于库伦旗，最初是一种带有萨满教色彩的医疗舞蹈，现已演变为群众性的广场舞蹈。',
    inheritor: '额尔登巴图（国家级）',
    digitalStatus: '通过动捕技术（Motion Capture）记录标准动作，生成3D数字化教学模型。',
    imageUrl: 'https://picsum.photos/seed/andai/800/600',
  },
  {
    id: '4',
    category: 'skill',
    name: '蒙古族毡艺',
    intro: '毡艺是蒙古族传统的手工技艺，包括擀毡、绣毡等，是游牧文化的重要组成部分。',
    inheritor: '乌云其其格（自治区级）',
    digitalStatus: '建立传统纹样数字化图库，支持AI辅助设计与文创开发。',
    imageUrl: 'https://picsum.photos/seed/felt/800/600',
  },
  {
    id: '5',
    category: 'skill',
    name: '马具制作技艺',
    intro: '马具是蒙古族马文化的核心，制作工艺复杂，集木工、皮工、金工于一体。',
    inheritor: '巴特尔（国家级）',
    digitalStatus: '采用3D扫描技术对经典马具进行高精度建模，实现云端虚拟展示。',
    imageUrl: 'https://picsum.photos/seed/saddle/800/600',
  },
  {
    id: '6',
    category: 'oral',
    name: '江格尔',
    intro: '《江格尔》是蒙古族著名的英雄史诗，与《格萨尔》、《玛纳斯》并称为中国三大英雄史诗。',
    inheritor: '扎那（国家级）',
    digitalStatus: '完成全本录音数字化转写，利用NLP技术进行多语言翻译与语义分析。',
    imageUrl: 'https://picsum.photos/seed/jangar/800/600',
  }
];

export const achievements = [
  { title: '数字图书馆资源', desc: '收录蒙古族非遗相关古籍、文献数字化副本超过5万页。', icon: 'Library' },
  { title: '非遗数据库', desc: '涵盖全区12个盟市的非遗项目元数据，支持多维检索。', icon: 'Database' },
  { title: '数字影像存档', desc: '累计拍摄高清纪录片120部，记录传承人技艺细节。', icon: 'Video' },
  { title: '在线展示平台', desc: '利用VR/AR技术打造虚拟博物馆，实现沉浸式文化体验。', icon: 'Globe' },
];

export const policies = [
  {
    id: 'p1',
    title: '国家级非遗保护政策',
    content: '《中华人民共和国非物质文化遗产法》明确了国家对非遗的保护、传承和利用原则。',
    date: '2011-06-01'
  },
  {
    id: 'p2',
    title: '内蒙古自治区非遗条例',
    content: '《内蒙古自治区非物质文化遗产保护条例》针对民族特色项目提出了专项保护措施。',
    date: '2015-10-01'
  },
  {
    id: 'p3',
    title: '数字化保护相关文件',
    content: '《关于推进文化数字化战略的意见》强调利用大数据、人工智能提升文化传承效能。',
    date: '2022-05-22'
  }
];
