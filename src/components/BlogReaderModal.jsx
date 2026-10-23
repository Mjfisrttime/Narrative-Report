import React, { useEffect } from 'react';
import { IconResolver } from './IconResolver';

export const BlogReaderModal = ({ post, posts, onClose, onSelectPost }) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!post) return null;

  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#001018]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-[#001824] border border-[#53ddfc]/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Header / Close button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            aria-label="Close article"
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#53ddfc] text-white hover:text-[#001018] border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-lg"
          >
            <IconResolver name="X" size={20} />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Hero Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001824] via-[#001824]/60 to-black/40" />

            <div className="absolute bottom-6 left-6 right-6">
              {/* Category & Read Time */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-[#53ddfc] text-[#001824] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Week {post.week}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-[#c5ebff] text-xs px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <IconResolver name="Clock" size={13} className="text-[#53ddfc]" />
                  {post.readTime}
                </span>
                <span className="text-xs text-[#83b2c8] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Author Byline */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <img 
                  src={post.author.avatar || '/avatar.jpg'} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#53ddfc]/40"
                  onError={(e) => { e.currentTarget.src = '/avatar.jpg'; }}
                />
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">{post.author.name}</h3>
                  <p className="text-xs text-[#83aaff] font-medium">{post.author.role}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="hidden sm:flex flex-wrap gap-1.5 max-w-sm justify-end">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs text-[#53ddfc] bg-[#002b3d] px-2.5 py-1 rounded-full border border-[#53ddfc]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Intro Excerpt */}
            <div className="bg-[#002b3d]/40 p-5 rounded-xl border border-[#53ddfc]/20">
              <p className="text-base sm:text-lg text-[#c5ebff] font-medium italic leading-relaxed">
                "{post.content.intro}"
              </p>
            </div>

            {/* Tasks & Deliverables Executed */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#53ddfc]/20 flex items-center justify-center text-[#53ddfc]">
                  <IconResolver name="CheckCircle2" size={18} />
                </span>
                Weekly Tasks & Key Deliverables
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {post.tasks.map((task, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 bg-[#002130]/60 p-3.5 rounded-xl border border-white/5"
                  >
                    <IconResolver name="Check" size={16} className="text-[#53ddfc] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#c5ebff] leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep Dive / Reflections */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#ac8aff]/20 flex items-center justify-center text-[#ac8aff]">
                  <IconResolver name="BookOpen" size={18} />
                </span>
                Technical Deep Dive & Insights
              </h3>
              <p className="text-sm sm:text-base text-[#c5ebff] leading-relaxed whitespace-pre-line">
                {post.content.deepDive}
              </p>
            </div>

            {/* Challenges Overcome */}
            {post.content.challenges && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#ff716c]/20 flex items-center justify-center text-[#ff716c]">
                    <IconResolver name="Wrench" size={18} />
                  </span>
                  Challenges & Troubleshooting
                </h3>
                <p className="text-sm sm:text-base text-[#83b2c8] leading-relaxed">
                  {post.content.challenges}
                </p>
              </div>
            )}

            {/* Key Takeaway Highlight Box */}
            {post.content.takeaway && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#002b3d] to-[#12002f] border border-[#53ddfc]/40 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <IconResolver name="Sparkles" size={120} className="text-white" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#53ddfc] text-xs font-bold uppercase tracking-widest mb-2">
                    <IconResolver name="Lightbulb" size={16} />
                    <span>Key Takeaway</span>
                  </div>
                  <blockquote className="text-base sm:text-lg font-bold font-sora text-white leading-relaxed">
                    "{post.content.takeaway}"
                  </blockquote>
                </div>
              </div>
            )}

            {/* Post Navigation (Previous / Next) */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevPost ? (
                <button
                  onClick={() => onSelectPost(prevPost)}
                  className="w-full sm:w-auto flex items-center gap-3 p-3 rounded-xl bg-[#002130] hover:bg-[#002b3d] border border-white/10 text-left transition-colors cursor-pointer group"
                >
                  <IconResolver name="ChevronLeft" size={20} className="text-[#53ddfc] group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="text-[10px] text-[#4c7c90] uppercase tracking-wider block">Previous Week</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#53ddfc] line-clamp-1">Week {prevPost.week}: {prevPost.title.split(':')[1] || prevPost.title}</span>
                  </div>
                </button>
              ) : <div className="hidden sm:block" />}

              {nextPost && (
                <button
                  onClick={() => onSelectPost(nextPost)}
                  className="w-full sm:w-auto flex items-center justify-end gap-3 p-3 rounded-xl bg-[#002130] hover:bg-[#002b3d] border border-white/10 text-right transition-colors cursor-pointer group ml-auto"
                >
                  <div>
                    <span className="text-[10px] text-[#4c7c90] uppercase tracking-wider block">Next Week</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#53ddfc] line-clamp-1">Week {nextPost.week}: {nextPost.title.split(':')[1] || nextPost.title}</span>
                  </div>
                  <IconResolver name="ChevronRight" size={20} className="text-[#53ddfc] group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
