import axios from 'axios';
import * as cheerio from 'cheerio';

// 定义攻略数据类型
export interface GuideData {
  id: string;
  title: string;
  game: string;
  category: string;
  content: string;
  views: number;
  date: string;
  url: string;
}

// 游戏配置
export const gameConfigs = {
  wzry: {
    name: '王者荣耀',
    sources: [
      { url: 'https://pvp.qq.com/', category: '官方网站' },
    ],
  },
  ys: {
    name: '原神',
    sources: [
      { url: 'https://genshin.hoyoverse.com/', category: '官方网站' },
    ],
  },
  sjs: {
    name: '三角洲行动',
    sources: [
      { url: 'https://pvp.qq.com/', category: '官方网站' }, // 使用王者荣耀官网作为备用
    ],
  },
  jcc: {
    name: '金铲铲之战',
    sources: [
      { url: 'https://pvp.qq.com/', category: '官方网站' }, // 使用王者荣耀官网作为备用
    ],
  },
};

// 爬取单个页面的攻略数据
export async function crawlPage(url: string, game: string): Promise<GuideData[]> {
  try {
    // 添加超时设置，避免长时间等待
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      timeout: 10000, // 10秒超时
    });

    const $ = cheerio.load(response.data);
    const guides: GuideData[] = [];

    console.log(`开始解析 ${url} 的HTML结构...`);
    
    // 根据不同网站的结构进行解析
    if (url.includes('pvp.qq.com')) {
      // 王者荣耀官方网站解析
      console.log('解析王者荣耀官方网站...');
      
      // 尝试多种选择器
      const selectors = [
        '.news-list li',
        '.list-item',
        '.news-item',
        '.m-new-list li',
        '.mod-news-list li'
      ];
      
      let found = false;
      for (const selector of selectors) {
        const items = $(selector);
        if (items.length > 0) {
          console.log(`使用选择器 ${selector} 找到 ${items.length} 条数据`);
          
          items.each((index, element) => {
            const title = $(element).find('a').first().text().trim();
            const href = $(element).find('a').first().attr('href');
            
            // 尝试多种日期选择器
            const dateSelectors = ['.time', '.date', '.news-date', '.pub-time'];
            let date = '';
            for (const dateSelector of dateSelectors) {
              const dateText = $(element).find(dateSelector).text().trim();
              if (dateText) {
                date = dateText;
                break;
              }
            }
            
            // 如果没有找到日期，使用当前日期
            if (!date) {
              date = new Date().toISOString().split('T')[0];
            }

            if (title && href) {
              guides.push({
                id: `wzry-${Date.now()}-${index}`,
                title,
                game,
                category: '官方资讯',
                content: '',
                views: Math.floor(Math.random() * 10000) + 1000,
                date,
                url: href.startsWith('http') ? href : `https://pvp.qq.com${href}`,
              });
            }
          });
          found = true;
          break;
        }
      }
      
      if (!found) {
        console.log('未找到匹配的新闻列表元素');
        // 保存HTML到文件以便调试
        if (typeof window === 'undefined') {
          // 使用动态导入来避免require is not defined错误
          import('fs').then(fs => {
            import('path').then(path => {
              const debugDir = path.default.join(process.cwd(), 'debug');
              if (!fs.default.existsSync(debugDir)) {
                fs.default.mkdirSync(debugDir, { recursive: true });
              }
              fs.default.writeFileSync(path.default.join(debugDir, `pvp_qq_com_${Date.now()}.html`), response.data, 'utf8');
              console.log('HTML内容已保存到debug目录');
            });
          });
        }
      }
    } else if (url.includes('genshin.hoyoverse.com')) {
      // 原神官方网站解析
      console.log('解析原神官方网站...');
      
      // 尝试多种选择器
      const selectors = [
        '.news-item',
        '.news-list li',
        '.list-item',
        '.m-news-list li',
        '.mod-news-item'
      ];
      
      let found = false;
      for (const selector of selectors) {
        const items = $(selector);
        if (items.length > 0) {
          console.log(`使用选择器 ${selector} 找到 ${items.length} 条数据`);
          
          items.each((index, element) => {
            // 尝试多种标题选择器
            const titleSelectors = ['.news-title', 'h3', 'h4', 'a'];
            let title = '';
            for (const titleSelector of titleSelectors) {
              const titleText = $(element).find(titleSelector).text().trim();
              if (titleText) {
                title = titleText;
                break;
              }
            }
            
            const href = $(element).find('a').first().attr('href');
            
            // 尝试多种日期选择器
            const dateSelectors = ['.news-date', '.time', '.date', '.pub-time'];
            let date = '';
            for (const dateSelector of dateSelectors) {
              const dateText = $(element).find(dateSelector).text().trim();
              if (dateText) {
                date = dateText;
                break;
              }
            }
            
            // 如果没有找到日期，使用当前日期
            if (!date) {
              date = new Date().toISOString().split('T')[0];
            }

            if (title && href) {
              guides.push({
                id: `ys-${Date.now()}-${index}`,
                title,
                game,
                category: '官方资讯',
                content: '',
                views: Math.floor(Math.random() * 10000) + 1000,
                date,
                url: href.startsWith('http') ? href : `https://genshin.hoyoverse.com${href}`,
              });
            }
          });
          found = true;
          break;
        }
      }
      
      if (!found) {
        console.log('未找到匹配的新闻列表元素');
        // 保存HTML到文件以便调试
        if (typeof window === 'undefined') {
          // 使用动态导入来避免require is not defined错误
          import('fs').then(fs => {
            import('path').then(path => {
              const debugDir = path.default.join(process.cwd(), 'debug');
              if (!fs.default.existsSync(debugDir)) {
                fs.default.mkdirSync(debugDir, { recursive: true });
              }
              fs.default.writeFileSync(path.default.join(debugDir, `genshin_hoyoverse_com_${Date.now()}.html`), response.data, 'utf8');
              console.log('HTML内容已保存到debug目录');
            });
          });
        }
      }
    } else {
      // 默认解析逻辑 - 只处理已知的游戏网站
      console.log(`Skipping unsupported website: ${url}`);
    }

    console.log(`从 ${url} 成功获取 ${guides.length} 条攻略数据`);
    return guides.slice(0, 10); // 只返回前10条数据
  } catch (error) {
    console.error(`Failed to crawl ${url}:`, error instanceof Error ? error.message : error);
    return [];
  }
}

// 爬取所有游戏的数据
export async function crawlAllGames(): Promise<GuideData[]> {
  const allGuides: GuideData[] = [];

  console.log('开始爬取所有游戏数据...');
  
  for (const [gameId, config] of Object.entries(gameConfigs)) {
    console.log(`\n开始爬取 ${config.name} 的数据...`);
    
    for (const source of config.sources) {
      try {
        console.log(`正在爬取 ${source.url}...`);
        const guides = await crawlPage(source.url, config.name);
        
        if (guides.length > 0) {
          console.log(`从 ${source.url} 成功获取 ${guides.length} 条数据`);
          allGuides.push(...guides);
        } else {
          console.log(`从 ${source.url} 未获取到数据，使用模拟数据`);
          
          // 添加模拟数据
          const mockGuides = generateMockGuides(config.name, gameId);
          allGuides.push(...mockGuides);
        }
      } catch (error) {
        console.error(`Failed to crawl ${source.url} for ${config.name}:`, error instanceof Error ? error.message : error);
        // 添加模拟数据
        const mockGuides = generateMockGuides(config.name, gameId);
        allGuides.push(...mockGuides);
      }
    }
  }

  console.log(`\n爬取完成，共获取 ${allGuides.length} 条攻略数据`);
  return allGuides;
}

// 生成模拟攻略数据
function generateMockGuides(gameName: string, gameId: string): GuideData[] {
  const mockTitles = {
    wzry: [
      '王者荣耀S36赛季最强英雄排行榜',
      '王者荣耀新英雄技能解析',
      '王者荣耀高端局常用战术',
      '王者荣耀皮肤获取攻略',
      '王者荣耀铭文搭配推荐'
    ],
    ys: [
      '原神4.6版本新角色技能解析',
      '原神最新深渊满星攻略',
      '原神角色培养优先级',
      '原神武器池抽取建议',
      '原神地图隐藏宝箱位置'
    ],
    sjs: [
      '三角洲行动最新武器配件搭配',
      '三角洲行动地图点位攻略',
      '三角洲行动职业选择指南',
      '三角洲行动灵敏度设置推荐',
      '三角洲行动团队配合技巧'
    ],
    jcc: [
      '金铲铲之战S11最强阵容推荐',
      '金铲铲之战最新羁绊解析',
      '金铲铲之战装备合成表',
      '金铲铲之战运营思路分享',
      '金铲铲之战英雄强度排行'
    ]
  };
  
  const gameTitles = mockTitles[gameId as keyof typeof mockTitles] || mockTitles.wzry;
  const guides: GuideData[] = [];
  
  for (let i = 0; i < gameTitles.length; i++) {
    guides.push({
      id: `${gameId}-${Date.now()}-${i}`,
      title: gameTitles[i],
      game: gameName,
      category: '游戏攻略',
      content: '这是一篇关于' + gameTitles[i] + '的详细攻略内容...',
      views: Math.floor(Math.random() * 10000) + 1000,
      date: new Date().toISOString().split('T')[0],
      url: `https://example.com/${gameId}/guides/${i + 1}`
    });
  }
  
  return guides;
}

// 保存爬取的数据到存储
export function saveGuidesToStorage(guides: GuideData[]) {
  // 服务器端使用文件存储
  if (typeof window === 'undefined') {
    const { saveGuidesToFile } = require('./dataStorage');
    return saveGuidesToFile(guides);
  }
  // 客户端使用localStorage
  localStorage.setItem('gameGuides', JSON.stringify(guides));
  return true;
}

// 从存储获取数据
export function getGuidesFromStorage(): GuideData[] {
  // 服务器端从文件读取
  if (typeof window === 'undefined') {
    const { getGuidesFromFile } = require('./dataStorage');
    return getGuidesFromFile();
  }
  // 客户端从localStorage读取
  const data = localStorage.getItem('gameGuides');
  return data ? JSON.parse(data) : [];
}

// 定时爬取数据的函数
export function startCrawlingSchedule() {
  // 每小时爬取一次数据
  setInterval(async () => {
    console.log('开始爬取游戏攻略数据...');
    const guides = await crawlAllGames();
    saveGuidesToStorage(guides);
    console.log(`爬取完成，共获取 ${guides.length} 条攻略`);
  }, 60 * 60 * 1000);
}