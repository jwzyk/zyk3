import Link from "next/link";

export default function GamesPage() {
  const games = [
    { id: "wzry", name: "王者荣耀", description: "S36赛季攻略", color: "from-red-500 to-orange-500" },
    { id: "ys", name: "原神", description: "4.6版本资讯", color: "from-teal-500 to-blue-500" },
    { id: "sjs", name: "三角洲行动", description: "最新武器攻略", color: "from-green-500 to-emerald-500" },
    { id: "jcc", name: "金铲铲之战", description: "S11最强阵容", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">游戏分类</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <Link 
              key={game.id} 
              href={`/games/${game.id}`} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className={`h-56 bg-gradient-to-br ${game.color} flex items-center justify-center`}>
                <span className="text-white text-3xl font-bold">{game.name}</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{game.name}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  查看攻略 →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}