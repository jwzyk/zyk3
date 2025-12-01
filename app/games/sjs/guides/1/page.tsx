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
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">三角洲行动</span>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">武器攻略</span>
              <span className="text-xs text-gray-500">2024-01-15</span>
              <span className="text-xs text-gray-500">7654 阅读</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">三角洲行动最新武器配件搭配</h1>
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
                <span className="text-sm">4.6</span>
              </div>
            </div>
          </div>
        </div>

        {/* 攻略内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">最新武器配件搭配指南</h2>
                <p className="text-gray-700 mb-4">
                  三角洲行动最新版本更新了多种武器配件，本文将为大家详细介绍各种武器的最佳配件搭配方案，帮助大家在游戏中获得更好的战斗体验。
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">突击步枪配件搭配</h3>
                <p className="text-gray-700 mb-4">
                  突击步枪是游戏中最常用的武器类型，具有良好的平衡性和适应性。以下是几种主流突击步枪的配件搭配推荐：
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">武器1：步枪名称</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>枪口：消音器，提供更好的隐蔽性</li>
                  <li>枪管：长枪管，增加射程和精度</li>
                  <li>握把：垂直握把，减少后坐力</li>
                  <li>弹匣：扩容弹匣，增加子弹容量</li>
                  <li>瞄准镜：全息瞄准镜，适合中近距离战斗</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">狙击步枪配件搭配</h3>
                <p className="text-gray-700 mb-4">
                  狙击步枪适合远距离精确打击，以下是狙击步枪的配件搭配推荐：
                </p>
                
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>枪口：消音器，减少枪声暴露位置</li>
                  <li>枪管：重型枪管，增加射程和精度</li>
                  <li>枪托：折叠枪托，增加稳定性</li>
                  <li>弹匣：扩容弹匣，增加子弹容量</li>
                  <li>瞄准镜：高倍瞄准镜，适合远距离射击</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">冲锋枪配件搭配</h3>
                <p className="text-gray-700 mb-4">
                  冲锋枪适合近距离战斗，以下是冲锋枪的配件搭配推荐：
                </p>
                
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>枪口：消焰器，减少后坐力和火光</li>
                  <li>枪管：短枪管，增加机动性</li>
                  <li>握把：激光握把，提高腰射精度</li>
                  <li>弹匣：快速弹匣，减少换弹时间</li>
                  <li>瞄准镜：红点瞄准镜，适合近距离快速瞄准</li>
                </ul>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 2, title: "三角洲行动新地图战术指南", category: "战术攻略" },
                  { id: 3, title: "三角洲行动职业技能加点推荐", category: "职业攻略" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/sjs/guides/${guide.id}`} 
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500">图</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{guide.category}</span>
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
                <p className="text-sm text-gray-500 mb-3">资深三角洲行动玩家</p>
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
                  { id: 1, title: "三角洲行动最新武器配件搭配" },
                  { id: 2, title: "三角洲行动新地图战术指南" },
                  { id: 3, title: "三角洲行动职业技能加点推荐" },
                  { id: 4, title: "三角洲行动排位赛上分技巧" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/sjs/guides/${guide.id}`} 
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