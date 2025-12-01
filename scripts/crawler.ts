#!/usr/bin/env ts-node

/**
 * 服务器端定时爬取脚本
 * 用于定期从游戏官方网站爬取攻略数据
 */

const { crawlAllGames } = require('../app/lib/crawler');
const { saveGuidesToFile } = require('../app/lib/dataStorage');

// 爬取间隔时间（毫秒）
const CRAWL_INTERVAL = 60 * 60 * 1000; // 1小时

/**
 * 执行爬取任务
 */
const executeCrawl = async () => {
  console.log('\n====================================');
  console.log('开始执行爬取任务...');
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
  }
  
  console.log('爬取任务执行完毕');
  console.log('====================================\n');
};

/**
 * 启动定时爬取
 */
const startCrawlingSchedule = () => {
  console.log('启动定时爬取服务...');
  console.log(`爬取间隔: ${CRAWL_INTERVAL / 1000 / 60} 分钟`);
  
  // 立即执行一次爬取
  executeCrawl();
  
  // 设置定时任务
  setInterval(executeCrawl, CRAWL_INTERVAL);
};

// 启动服务
startCrawlingSchedule();
