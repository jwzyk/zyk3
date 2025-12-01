import { GuideData } from './crawler';
import fs from 'fs';
import path from 'path';

// 数据存储路径
const DATA_DIR = path.join(process.cwd(), 'data');
const GUIDES_FILE = path.join(DATA_DIR, 'guides.json');

// 确保数据目录存在
const ensureDataDir = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
};

// 保存攻略数据到文件
export const saveGuidesToFile = (guides: GuideData[]) => {
  try {
    ensureDataDir();
    fs.writeFileSync(GUIDES_FILE, JSON.stringify(guides, null, 2), 'utf8');
    console.log(`成功保存 ${guides.length} 条攻略数据到文件`);
    return true;
  } catch (error) {
    console.error('保存攻略数据失败:', error);
    return false;
  }
};

// 从文件读取攻略数据
export const getGuidesFromFile = (): GuideData[] => {
  try {
    ensureDataDir();
    if (fs.existsSync(GUIDES_FILE)) {
      const data = fs.readFileSync(GUIDES_FILE, 'utf8');
      const guides = JSON.parse(data);
      console.log(`成功从文件读取 ${guides.length} 条攻略数据`);
      return guides;
    }
    console.log('攻略数据文件不存在，返回空数组');
    return [];
  } catch (error) {
    console.error('读取攻略数据失败:', error);
    return [];
  }
};

// 保存单条攻略数据
export const saveGuideToFile = (guide: GuideData) => {
  try {
    const guides = getGuidesFromFile();
    const existingIndex = guides.findIndex(g => g.id === guide.id);
    
    if (existingIndex >= 0) {
      // 更新现有攻略
      guides[existingIndex] = guide;
    } else {
      // 添加新攻略
      guides.push(guide);
    }
    
    return saveGuidesToFile(guides);
  } catch (error) {
    console.error('保存单条攻略数据失败:', error);
    return false;
  }
};

// 删除攻略数据
export const deleteGuideFromFile = (id: string) => {
  try {
    const guides = getGuidesFromFile();
    const filteredGuides = guides.filter(g => g.id !== id);
    return saveGuidesToFile(filteredGuides);
  } catch (error) {
    console.error('删除攻略数据失败:', error);
    return false;
  }
};

// 根据游戏类型获取攻略
export const getGuidesByGame = (game: string): GuideData[] => {
  const guides = getGuidesFromFile();
  return guides.filter(guide => guide.game === game);
};

// 根据分类获取攻略
export const getGuidesByCategory = (category: string): GuideData[] => {
  const guides = getGuidesFromFile();
  return guides.filter(guide => guide.category === category);
};