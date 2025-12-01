"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GuideData } from "./lib/crawler";

// 模拟热门攻略数据
const defaultHotGuides: GuideData[] = [
  { id: "1", title: "王者荣耀S36赛季最强英雄排行榜", game: "王者荣耀", views: 12345, category: "英雄攻略", content: "", date: "2024-01-15", url: "#" },
  { id: "2", title: "原神4.6版本新角色技能解析", game: "原神", views: 9876, category: "角色攻略", content: "", date: "2024-01-14", url: "#" },
  { id: "3", title: "三角洲行动最新武器配件搭配", game: "三角洲行动", views: 7654, category: "武器攻略", content: "", date: "2024-01-13", url: "#" },
  { id: "4", title: "金铲铲之战S11最强阵容推荐", game: "金铲铲", views: 5432, category: "阵容攻略", content: "", date: "2024-01-12", url: "#" },
];

export default function Home() {
  const [guides, setGuides] = useState<GuideData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 获取攻略数据
  const fetchGuides = async () => {
    try {
      setIsLoading(true);
      
      // 从API获取数据
      const response = await fetch('/api/crawl?action=getGuides');
      const data = await response.json();
      
      if (data.success && data.data) {
        setGuides(data.data.length > 0 ? data.data : defaultHotGuides);
      } else {
        // 如果API调用失败，使用默认数据
        setGuides(defaultHotGuides);
      }
    } catch (error) {
      console.error('获取攻略数据失败:', error);
      // 使用默认数据
      setGuides(defaultHotGuides);
    } finally {
      setIsLoading(false);
    }
  };

  // 触发手动爬取
  const handleManualCrawl = async () => {
    try {
      const response = await fetch('/api/crawl?action=crawlAll');
      const data = await response.json();
      
      if (data.success && data.data) {
        fetchGuides();
        alert(`爬取成功，共获取 ${data.data.length} 条攻略`);
      } else {
        alert('爬取失败');
      }
    } catch (error) {
      console.error('手动爬取失败:', error);
      alert('爬取失败');
    }
  };

  useEffect(() => {
    // 初始化获取数据
    fetchGuides();
    
    // 每5分钟刷新一次数据
    const interval = setInterval(fetchGuides, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // 获取热门攻略（前4条）
  const hotGuides = guides.slice(0, 4);
  
  // 获取最新资讯（按日期排序，前4条）
  const latestNews = [...guides]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* 轮播图 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg mb-8 h-64 md:h-96 bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">欢迎来到游戏攻略网</h2>
              <p className="text-lg md:text-xl">提供最新、最全面的游戏攻略和资讯</p>
            </div>
          </div>
          
          {/* 手动爬取按钮 */}
          <button
            onClick={handleManualCrawl}
            className="absolute top-4 right-4 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-md"
          >
            {isLoading ? '加载中...' : '手动更新数据'}
          </button>
        </div>

        {/* 游戏分类卡片 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">热门游戏</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/games/wzry" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">王者荣耀</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">王者荣耀</h3>
                <p className="text-sm text-gray-500 mt-1">S36赛季攻略</p>
              </div>
            </Link>
            
            <Link href="/games/ys" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">原神</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">原神</h3>
                <p className="text-sm text-gray-500 mt-1">4.6版本资讯</p>
              </div>
            </Link>
            
            <Link href="/games/sjs" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">三角洲行动</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">三角洲行动</h3>
                <p className="text-sm text-gray-500 mt-1">最新武器攻略</p>
              </div>
            </Link>
            
            <Link href="/games/jcc" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">金铲铲</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800">金铲铲之战</h3>
                <p className="text-sm text-gray-500 mt-1">S11最强阵容</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 热门攻略和最新资讯 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 热门攻略 */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">热门攻略</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotGuides.map((guide) => (
                <Link 
                  key={guide.id} 
                  href={`/games/${guide.game === '王者荣耀' ? 'wzry' : guide.game === '原神' ? 'ys' : guide.game === '三角洲行动' ? 'sjs' : 'jcc'}/guides/${guide.id}`} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
                >
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">{guide.game}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">{guide.game}</span>
                      <span className="text-xs text-gray-500">{guide.views} 阅读</span>
                    </div>
                    <h3 className="font-bold text-gray-800 hover:text-purple-600 transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 最新资讯 */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">最新资讯</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-4">
                {latestNews.map((news) => (
                  <li key={news.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{news.game}</span>
                      <span className="text-xs text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
                      {news.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI助手入口 */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">AI游戏助手</h3>
              <p className="mb-4">有任何游戏问题？随时问我！</p>
              <Link 
                href="/ai" 
                className="inline-block bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors"
              >
                立即咨询
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}