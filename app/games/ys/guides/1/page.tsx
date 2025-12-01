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
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">原神</span>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">角色攻略</span>
              <span className="text-xs text-gray-500">2024-01-15</span>
              <span className="text-xs text-gray-500">9876 阅读</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">原神4.6版本新角色技能解析</h1>
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
                <span className="text-sm">4.7</span>
              </div>
            </div>
          </div>
        </div>

        {/* 攻略内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">4.6版本新角色分析</h2>
                <p className="text-gray-700 mb-4">
                  原神4.6版本即将上线，带来了全新的角色和内容。本文将为大家详细解析新角色的技能、定位和使用方法，帮助大家更好地了解和使用这些新角色。
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">新角色1：角色名称</h3>
                <p className="text-gray-700 mb-4">
                  这是一个全新的角色，拥有独特的技能机制和战斗风格。她的元素属性是XX，定位是XX，适合在队伍中担任XX位置。
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">技能解析</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>普通攻击：进行多段攻击，造成XX伤害</li>
                  <li>元素战技：释放XX效果，造成XX伤害并附加XX状态</li>
                  <li>元素爆发：召唤XX，对敌人造成大量XX伤害</li>
                  <li>固有天赋：提供XX加成，增强队伍整体实力</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">新角色2：角色名称</h3>
                <p className="text-gray-700 mb-4">
                  这是另一个全新的角色，拥有强大的辅助能力。她的元素属性是XX，定位是XX，能够为队伍提供强大的增益效果。
                </p>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800">技能解析</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>普通攻击：进行多段攻击，造成XX伤害</li>
                  <li>元素战技：为队友提供XX护盾和XX加成</li>
                  <li>元素爆发：创造XX领域，持续为队伍提供XX效果</li>
                  <li>固有天赋：减少队友技能冷却时间，提高队伍循环效率</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">使用建议</h3>
                <p className="text-gray-700 mb-4">
                  建议将新角色与以下角色搭配使用，以发挥最大效果：
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                  <li>角色1 + 角色2 + 角色3 + 角色4</li>
                  <li>角色1 + 角色5 + 角色6 + 角色7</li>
                </ul>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 2, title: "原神4.6版本新武器强度分析", category: "武器攻略" },
                  { id: 3, title: "原神4.6版本新地图探索指南", category: "地图攻略" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/ys/guides/${guide.id}`} 
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
                <p className="text-sm text-gray-500 mb-3">资深原神玩家</p>
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
                  { id: 1, title: "原神4.6版本新角色技能解析" },
                  { id: 2, title: "原神4.6版本新武器强度分析" },
                  { id: 3, title: "原神4.6版本新地图探索指南" },
                  { id: 4, title: "原神4.6版本深渊满星阵容推荐" },
                ].map((guide) => (
                  <Link 
                    key={guide.id} 
                    href={`/games/ys/guides/${guide.id}`} 
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