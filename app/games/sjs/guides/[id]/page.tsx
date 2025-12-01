import Link from "next/link";
import CommentSection from "../../../../components/CommentSection";
import { getGuidesFromFile } from "../../../../lib/dataStorage";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export default async function GuideDetailPage({ params }: Params) {
  const { id } = params;
  const guides = getGuidesFromFile();
  const guide = guides.find(g => g.id === id);
  
  if (!guide) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* 攻略头部 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{guide.game}</span>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{guide.category}</span>
              <span className="text-xs text-gray-500">{guide.date}</span>
              <span className="text-xs text-gray-500">{guide.views} 阅读</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{guide.title}</h1>
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
                <h2 className="text-2xl font-bold mb-4 text-gray-800">攻略详情</h2>
                <p className="text-gray-700 mb-4">
                  {guide.content || '这是一篇关于' + guide.title + '的详细攻略内容...'}
                </p>
              </div>
            </div>

            {/* 相关推荐 */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides
                  .filter(g => g.game === guide.game && g.id !== guide.id)
                  .slice(0, 2)
                  .map((relatedGuide) => (
                    <Link 
                      key={relatedGuide.id} 
                      href={`/games/${guide.game === '王者荣耀' ? 'wzry' : guide.game === '原神' ? 'ys' : guide.game === '三角洲行动' ? 'sjs' : 'jcc'}/guides/${relatedGuide.id}`} 
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-500">图</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{relatedGuide.category}</span>
                        </div>
                        <h4 className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
                          {relatedGuide.title}
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
                <p className="text-sm text-gray-500 mb-3">资深玩家</p>
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
                {guides
                  .filter(g => g.game === guide.game)
                  .slice(0, 4)
                  .map((hotGuide) => (
                    <Link 
                      key={hotGuide.id} 
                      href={`/games/${guide.game === '王者荣耀' ? 'wzry' : guide.game === '原神' ? 'ys' : guide.game === '三角洲行动' ? 'sjs' : 'jcc'}/guides/${hotGuide.id}`} 
                      className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-500">图</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors line-clamp-2">
                          {hotGuide.title}
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
