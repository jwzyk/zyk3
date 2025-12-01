"use client";
import { useState } from "react";

export default function AIPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "你好！我是游戏攻略AI助手，有什么可以帮助你的吗？", isAI: true },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = { id: Date.now(), text: inputText, isAI: false };
    setMessages([...messages, newMessage]);
    setInputText("");
    setIsTyping(true);

    // 模拟AI回复
    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        text: `这是针对"${inputText}"的AI回复。目前我正在学习更多游戏知识，后续会为你提供更准确的攻略建议！`,
        isAI: true,
      };
      setMessages([...messages, newMessage, aiReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">AI游戏助手</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI对话窗口 */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
              <h2 className="text-xl font-bold">AI对话</h2>
            </div>
            
            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.isAI ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[80%] p-4 rounded-lg ${message.isAI 
                      ? "bg-gray-100 text-gray-800" 
                      : "bg-purple-600 text-white"}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-lg bg-gray-100 text-gray-800">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="输入你的问题..." 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button 
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={handleSendMessage}
                >
                  发送
                </button>
              </div>
            </div>
          </div>

          {/* AI搜索推荐 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
              <h2 className="text-xl font-bold">AI搜索推荐</h2>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">热门搜索</h3>
                <div className="space-y-2">
                  {["王者荣耀S36最强英雄", "原神4.6新角色", "三角洲行动武器推荐", "金铲铲S11最强阵容"].map((search, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{search}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">AI推荐攻略</h3>
                <div className="space-y-3">
                  {[
                    { title: "王者荣耀S36赛季打野节奏", game: "王者荣耀" },
                    { title: "原神4.6版本深渊满星阵容", game: "原神" },
                    { title: "三角洲行动最新武器配件", game: "三角洲行动" },
                    { title: "金铲铲之战S11上分技巧", game: "金铲铲" },
                  ].map((guide, index) => (
                    <div key={index} className="p-3 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">{guide.game}</span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors cursor-pointer">
                        {guide.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}