"use client";
import { useState } from "react";

interface Comment {
  id: number;
  username: string;
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: "游戏爱好者",
      content: "这篇攻略写得太好了，对我帮助很大！",
      date: "2024-01-15 10:30",
      likes: 12,
      isLiked: false,
    },
    {
      id: 2,
      username: "上分达人",
      content: "感谢分享，学到了很多新技巧！",
      date: "2024-01-15 09:15",
      likes: 8,
      isLiked: false,
    },
  ]);
  
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      username,
      content: newComment,
      date: new Date().toLocaleString("zh-CN"),
      likes: 0,
      isLiked: false,
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setUsername("");
  };

  const handleLike = (id: number) => {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked,
        };
      }
      return comment;
    }));
  };

  return (
    <div className="mt-12 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">玩家评论</h3>
      
      {/* 评论表单 */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="你的用户名"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <textarea
          placeholder="写下你的评论..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          发表评论
        </button>
      </form>
      
      {/* 评论列表 */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-800">{comment.username}</span>
                  <span className="text-xs text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.content}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center gap-1 text-sm ${comment.isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-500 transition-colors`}
              >
                <svg className="w-4 h-4" fill={comment.isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{comment.likes}</span>
              </button>
              <button className="text-sm text-gray-500 hover:text-blue-500 transition-colors">
                回复
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}