import { NextResponse } from 'next/server';
import { crawlAllGames, crawlPage } from '../../lib/crawler';
import { saveGuidesToFile, getGuidesFromFile } from '../../lib/dataStorage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const game = searchParams.get('game');
    const url = searchParams.get('url');

    if (action === 'crawlAll') {
      // 爬取所有游戏数据
      const guides = await crawlAllGames();
      
      // 保存到文件
      const saved = saveGuidesToFile(guides);
      
      return NextResponse.json({
        success: true,
        message: saved ? '爬取成功并保存' : '爬取成功但保存失败',
        data: guides,
        count: guides.length,
        saved,
      });
    } else if (action === 'crawlSingle' && url && game) {
      // 爬取单个页面数据
      const guides = await crawlPage(url, game);
      
      // 保存到文件
      const saved = saveGuidesToFile(guides);
      
      return NextResponse.json({
        success: true,
        message: saved ? '爬取成功并保存' : '爬取成功但保存失败',
        data: guides,
        count: guides.length,
        saved,
      });
    } else if (action === 'getGuides') {
      // 获取所有攻略数据
      const guides = getGuidesFromFile();
      
      return NextResponse.json({
        success: true,
        message: '获取成功',
        data: guides,
        count: guides.length,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: '参数错误',
      }, { status: 400 });
    }
  } catch (error) {
    console.error('API爬取错误:', error);
    return NextResponse.json({
      success: false,
      message: '爬取失败',
      error: (error as Error).message,
    }, { status: 500 });
  }
}

// 支持POST请求，用于手动触发爬取
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, game, url } = body;

    if (action === 'crawlAll') {
      // 爬取所有游戏数据
      const guides = await crawlAllGames();
      
      // 保存到文件
      const saved = saveGuidesToFile(guides);
      
      return NextResponse.json({
        success: true,
        message: saved ? '爬取成功并保存' : '爬取成功但保存失败',
        data: guides,
        count: guides.length,
        saved,
      });
    } else if (action === 'crawlSingle' && url && game) {
      // 爬取单个页面数据
      const guides = await crawlPage(url, game);
      
      // 保存到文件
      const saved = saveGuidesToFile(guides);
      
      return NextResponse.json({
        success: true,
        message: saved ? '爬取成功并保存' : '爬取成功但保存失败',
        data: guides,
        count: guides.length,
        saved,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: '参数错误',
      }, { status: 400 });
    }
  } catch (error) {
    console.error('API爬取错误:', error);
    return NextResponse.json({
      success: false,
      message: '爬取失败',
      error: (error as Error).message,
    }, { status: 500 });
  }
}