import Link from "next/link";

export default async function YSPage() {
  // 从 API 获取原神攻略数据
  const response = await fetch('/api/crawl?action=getGuides', {
    cache: 'no-store' // 禁用缓存，确保每次都获取最新数据
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch guides: ${response.status}`);
  }
  
  const data = await response.json();
  // 确保allGuides是一个数组
  const allGuides = Array.isArray(data?.data) ? data.data : [];
  // 简化过滤逻辑，确保类型安全
  const guides = allGuides.filter((guide: any) => {
    return guide && typeof guide === 'object' && guide.game === "原神";
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* 游戏头部 */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg p-6 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">原神</h1>
          <p className="text-lg">4.6版本资讯 | 最新攻略</p>
        </div>

        {/* 导航标签 */}
        <div className="flex gap-4 mb-8">
          <Link href="/games/ys" className="px-4 py-2 bg-purple-600 text-white rounded-full font-medium">
            最新攻略
          </Link>
          <Link href="/games/ys/characters" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            角色攻略
          </Link>
          <Link href="/games/ys/weapons" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            武器攻略
          </Link>
          <Link href="/games/ys/maps" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            地图攻略
          </Link>
        </div>

        {/* 攻略列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 确保guides是数组且不为空 */}
          {Array.isArray(guides) && guides.length > 0 ? (
            guides.map((guide: any) => (
              <div key={guide.id || Math.random()} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{guide.category || '攻略'}</span>
                    <span className="text-xs text-gray-500">{guide.date || '2024-01-01'}</span>
                    <span className="text-xs text-gray-500">{guide.views || 0} 阅读</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors mb-3">
                    {guide.title || '攻略标题'}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    这是一篇关于{guide.title || '游戏'}的详细攻略，包含最新的角色分析、武器评测和地图探索技巧...
                  </p>
                  <Link href={`/games/ys/guides/${guide.id || '1'}`} className="inline-block text-purple-600 font-medium hover:underline">
                    阅读全文 →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">暂无攻略数据</p>
            </div>
          )}
        </div>

        {/* 分页 */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition-colors">
              上一页
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition-colors">
              下一页
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}