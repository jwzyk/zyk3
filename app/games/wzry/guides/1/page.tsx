import Link from "next/link";
import CommentSection from "../../../../components/CommentSection";

export default function GuideDetailPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* 攻略头部 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">王者荣耀</span>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">英雄攻略</span>
              <span className="text-xs text-gray-500">2024-01-15</span>
              <span className="text-xs text-gray-500">12345 阅读</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">王者荣耀S36赛季最强英雄排行榜</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">作</span>
                </div>
                <span className="text-sm font-medium">攻略作者</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm">4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* 攻略内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">S36赛季英雄强度分析</h2>
                <p className="text-gray-700 mb-4">
                  随着S36赛季的更新，英雄强度发生了较大变化。本文将为大家详细分析当前版本最强的英雄，帮助大家在排位赛中选择合适的英雄上分。
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">T0级英雄</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>李白：野区霸主，爆发伤害高，机动性强</li>
                  <li>诸葛亮：中路法王，后期伤害爆炸</li>
                  <li>后羿：射手一哥，持续输出能力强</li>
                  <li>牛魔：辅助神坦，控制能力出色</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">T1级英雄</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>韩信：野区节奏大师，带线能力强</li>
                  <li>貂蝉：中路万花筒，灵活机动</li>
                  <li>鲁班七号：射手爆发王，后期伤害恐怖</li>
                  <li>张飞：辅助坦度高，保护能力强</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">上分建议</h3>
                <p className="text-gray-700 mb-4">
                  建议玩家根据自己的擅长位置选择对应的T0或T1级英雄，配合队友进行游戏。同时，要注意版本更新带来的英雄调整，及时调整自己的英雄池。
                </p>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 2, title: "王者荣耀S36赛季打野节奏教学", category: "玩法技巧" },
                  { id: 3, title: "王者荣耀S36赛季最新装备解析", category: "装备攻略" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/wzry/guides/${guide.id}`} 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500">图</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{guide.category}</span>
                      </div>
                      <h4 className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
                        {guide.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 评论区 */}
            <CommentSection />
          </div>

          {/* 侧边栏 */}
          <div>
            {/* 作者信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">作者信息</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-600 text-xl">作</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">攻略作者</h4>
                <p className="text-sm text-gray-500 mb-3">资深游戏玩家</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                    关注作者
                  </button>
                </div>
              </div>
            </div>

            {/* 热门攻略 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">热门攻略</h3>
              <div className="space-y-4">
                {[
                  { id: 1, title: "王者荣耀S36赛季最强英雄排行榜" },
                  { id: 2, title: "王者荣耀S36赛季打野节奏教学" },
                  { id: 3, title: "王者荣耀S36赛季最新装备解析" },
                  { id: 4, title: "王者荣耀S36赛季上分英雄推荐" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/wzry/guides/${guide.id}`} 
                    className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500">图</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}