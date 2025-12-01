import Link from "next/link";

export default async function JCCPage() {
  // 从 API 获取金铲铲之战攻略数据
  const response = await fetch('/api/crawl?action=getGuides', {
    cache: 'no-store' // 禁用缓存，确保每次都获取最新数据
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch guides: ${response.status}`);
  }
  
  const data = await response.json();
  const allGuides = data.success && Array.isArray(data.data) ? data.data : [];
  const guides = allGuides.filter(guide => {
    // 确保guide是GuideData类型
    return typeof guide === 'object' && guide !== null && guide.game === "金铲铲之战";
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* 游戏头部 */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">金铲铲之战</h1>
          <p className="text-lg">S11赛季攻略 | 最强阵容</p>
        </div>

        {/* 导航标签 */}
        <div className="flex gap-4 mb-8">
          <Link href="/games/jcc" className="px-4 py-2 bg-purple-600 text-white rounded-full font-medium">
            最新攻略
          </Link>
          <Link href="/games/jcc/lineups" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            阵容攻略
          </Link>
          <Link href="/games/jcc/heroes" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            英雄攻略
          </Link>
          <Link href="/games/jcc/bonds" className="px-4 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            羁绊攻略
          </Link>
        </div>

        {/* 攻略列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">{guide.category}</span>
                  <span className="text-xs text-gray-500">{guide.date}</span>
                  <span className="text-xs text-gray-500">{guide.views} 阅读</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  这是一篇关于{guide.title}的详细攻略，包含最新的阵容推荐、英雄强度分析和羁绊效果解析...
                </p>
                <Link href={`/games/jcc/guides/${guide.id}`} className="inline-block text-purple-600 font-medium hover:underline">
                  阅读全文 →
                </Link>
              </div>
            </div>
          ))}
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