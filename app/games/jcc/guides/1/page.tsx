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
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">金铲铲之战</span>
              <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">阵容攻略</span>
              <span className="text-xs text-gray-500">2024-01-15</span>
              <span className="text-xs text-gray-500">5432 阅读</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">金铲铲之战S11最强阵容推荐</h1>
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
                <span className="text-sm">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* 攻略内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">S11最强阵容推荐</h2>
                <p className="text-gray-700 mb-4">
                  金铲铲之战S11赛季已经开启，带来了全新的羁绊和英雄。本文将为大家推荐几套当前版本最强的阵容，帮助大家在排位赛中轻松上分。
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">阵容1：阵容名称</h3>
                <p className="text-gray-700 mb-4">
                  这是一套非常强势的阵容，拥有强大的输出能力和生存能力。以下是阵容的详细介绍：
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">阵容组成</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>英雄1：核心输出，提供主要伤害</li>
                  <li>英雄2：辅助输出，增强阵容伤害</li>
                  <li>英雄3：前排坦克，吸收伤害</li>
                  <li>英雄4：辅助控制，提供控制效果</li>
                  <li>英雄5：辅助增益，增强阵容属性</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">羁绊效果</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>羁绊1：提供XX效果，增强阵容整体实力</li>
                  <li>羁绊2：提供XX效果，增强输出能力</li>
                  <li>羁绊3：提供XX效果，增强生存能力</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">装备推荐</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>英雄1：装备1、装备2、装备3</li>
                  <li>英雄2：装备1、装备2、装备3</li>
                  <li>英雄3：装备1、装备2、装备3</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">阵容2：阵容名称</h3>
                <p className="text-gray-700 mb-4">
                  这是一套适合新手玩家的阵容，操作简单，强度稳定。以下是阵容的详细介绍：
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">阵容组成</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>英雄1：核心输出，提供主要伤害</li>
                  <li>英雄2：辅助输出，增强阵容伤害</li>
                  <li>英雄3：前排坦克，吸收伤害</li>
                  <li>英雄4：辅助控制，提供控制效果</li>
                </ul>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">运营思路</h4>
                <p className="text-gray-700 mb-4">
                  这套阵容的运营思路比较简单，前期尽量保持连胜，中期开始D牌提升阵容质量，后期追三星核心英雄。
                </p>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 2, title: "金铲铲之战S11英雄强度排行榜", category: "英雄攻略" },
                  { id: 3, title: "金铲铲之战S11羁绊效果解析", category: "羁绊攻略" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/jcc/guides/${guide.id}`} 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500">图</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">{guide.category}</span>
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
                <p className="text-sm text-gray-500 mb-3">资深金铲铲玩家</p>
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
                  { id: 1, title: "金铲铲之战S11最强阵容推荐" },
                  { id: 2, title: "金铲铲之战S11英雄强度排行榜" },
                  { id: 3, title: "金铲铲之战S11羁绊效果解析" },
                  { id: 4, title: "金铲铲之战S11上分运营思路" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/jcc/guides/${guide.id}`} 
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