#!/usr/bin/env ts-node

/**
 * 执行一次爬取任务的脚本
 */

const { crawlAllGames } = require('../app/lib/crawler');
const { saveGuidesToFile } = require('../app/lib/dataStorage');

/**
 * 执行一次爬取任务
 */
const executeCrawlOnce = async () => {
  console.log('\n====================================');
  console.log('开始执行单次爬取任务...');
  console.log('当前时间:', new Date().toLocaleString());
  
  try {
    const guides = await crawlAllGames();
    console.log(`爬取完成，共获取 ${guides.length} 条攻略数据`);
    
    const saved = saveGuidesToFile(guides);
    if (saved) {
      console.log('数据保存成功');
    } else {
      console.log('数据保存失败');
    }
  } catch (error) {
    console.error('爬取任务执行失败:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
  
  console.log('爬取任务执行完毕');
  console.log('====================================\n');
  process.exit(0);
};

// 执行爬取任务
executeCrawlOnce();
