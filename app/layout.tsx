import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "游戏攻略网",
  description: "提供王者荣耀、原神、三角洲行动、金铲铲等游戏的最新攻略和资讯",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* 导航栏 */}
        <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">游戏攻略网</h1>
            </div>
            
            {/* 导航链接 */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="hover:text-yellow-300 transition-colors">首页</Link>
              <Link href="/games/wzry" className="hover:text-yellow-300 transition-colors">王者荣耀</Link>
              <Link href="/games/ys" className="hover:text-yellow-300 transition-colors">原神</Link>
              <Link href="/games/sjs" className="hover:text-yellow-300 transition-colors">三角洲行动</Link>
              <Link href="/games/jcc" className="hover:text-yellow-300 transition-colors">金铲铲</Link>
              <Link href="/ai" className="hover:text-yellow-300 transition-colors">AI助手</Link>
            </nav>
            
            {/* 搜索框 */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="搜索攻略..." 
                className="pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-40 md:w-60 bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </header>
        
        {/* 移动端导航 */}
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-around">
            <Link href="/" className="flex flex-col items-center text-xs">
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              首页
            </Link>
            <Link href="/games/wzry" className="flex flex-col items-center text-xs">
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              王者荣耀
            </Link>
            <Link href="/games/ys" className="flex flex-col items-center text-xs">
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              原神
            </Link>
            <Link href="/ai" className="flex flex-col items-center text-xs">
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI助手
            </Link>
          </div>
        </div>
        
        {/* 主要内容 */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        {/* 页脚 */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">游戏攻略网</h3>
                <p className="text-gray-400">提供最新、最全面的游戏攻略和资讯</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">热门游戏</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/games/wzry" className="hover:text-white transition-colors">王者荣耀</Link></li>
                  <li><Link href="/games/ys" className="hover:text-white transition-colors">原神</Link></li>
                  <li><Link href="/games/sjs" className="hover:text-white transition-colors">三角洲行动</Link></li>
                  <li><Link href="/games/jcc" className="hover:text-white transition-colors">金铲铲</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">功能导航</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/ai" className="hover:text-white transition-colors">AI助手</Link></li>
                  <li><Link href="/search" className="hover:text-white transition-colors">攻略搜索</Link></li>
                  <li><Link href="/community" className="hover:text-white transition-colors">玩家社区</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">联系我们</h4>
                <p className="text-gray-400">邮箱：contact@gameguides.com</p>
                <p className="text-gray-400">微信：GameGuides</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
              © 2024 游戏攻略网. 保留所有权利.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
