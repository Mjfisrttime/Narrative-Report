import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconResolver } from './IconResolver';

export const BlogReaderModal = ({ post, posts, onClose, onSelectPost }) => {
  // Handle escape key and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Save previous overflow and lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!post) return null;

  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Use createPortal to mount directly to document.body, escaping transformed parents
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 overflow-y-auto"
      style={{ margin: 0 }}
    >
      {/* Full-screen Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container - Centered and Spread out */}
      <div 
        className="relative w-full max-w-5xl xl:max-w-6xl bg-[#001824] border border-[#53ddfc]/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={onClose}
            aria-label="Close article"
            className="p-3 rounded-full bg-black/70 hover:bg-[#53ddfc] text-white hover:text-[#001018] border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-xl flex items-center justify-center group"
          >
            <IconResolver name="X" size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Hero Banner with Full Spread Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001824] via-[#001824]/60 to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10">
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="bg-[#53ddfc] text-[#001824] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Week {post.week}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-[#c5ebff] text-xs px-3.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow">
                  <IconResolver name="Clock" size={13} className="text-[#53ddfc]" />
                  {post.readTime}
                </span>
                <span className="text-xs text-[#83b2c8] bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 shadow">
                  {post.date}
                </span>
                {post.featured && (
                  <span className="bg-[#ac8aff] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Featured Story
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sora text-white leading-tight drop-shadow-md">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Article Main Spread Grid */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Main Content Column (8 cols on large screens) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Author Bar on Mobile/Tablet */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-white/10 lg:hidden">
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

                {/* Intro Callout */}
                <div className="bg-[#002b3d]/50 p-6 rounded-2xl border border-[#53ddfc]/30 shadow-md">
                  <p className="text-base sm:text-lg text-[#c5ebff] font-medium italic leading-relaxed">
                    "{post.content.intro}"
                  </p>
                </div>

                {/* Key Deliverables & Tasks */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-4 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#53ddfc]/20 flex items-center justify-center text-[#53ddfc]">
                      <IconResolver name="CheckCircle2" size={20} />
                    </span>
                    Weekly Tasks & Key Deliverables
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {post.tasks.map((task, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-3 bg-[#002130]/70 p-4 rounded-xl border border-white/10 hover:border-[#53ddfc]/30 transition-colors"
                      >
                        <IconResolver name="Check" size={18} className="text-[#53ddfc] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#c5ebff] leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Deep Dive */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-3.5 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#ac8aff]/20 flex items-center justify-center text-[#ac8aff]">
                      <IconResolver name="BookOpen" size={20} />
                    </span>
                    Technical Deep Dive & Practical Insights
                  </h3>
                  <div className="bg-[#001c27]/40 p-5 sm:p-6 rounded-2xl border border-white/5">
                    <p className="text-sm sm:text-base text-[#c5ebff] leading-relaxed whitespace-pre-line">
                      {post.content.deepDive}
                    </p>
                  </div>
                </div>

                {/* Challenges Overcome */}
                {post.content.challenges && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-sora text-white mb-3.5 flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-[#ff716c]/20 flex items-center justify-center text-[#ff716c]">
                        <IconResolver name="Wrench" size={20} />
                      </span>
                      Challenges Encountered & Solutions
                    </h3>
                    <div className="bg-[#001c27]/40 p-5 sm:p-6 rounded-2xl border border-white/5">
                      <p className="text-sm sm:text-base text-[#83b2c8] leading-relaxed">
                        {post.content.challenges}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Column (4 cols on large screens - Spread out details) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Author Card (Desktop) */}
                <div className="hidden lg:block bg-[#002130]/80 p-5 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3.5 mb-3">
                    <img 
                      src={post.author.avatar || '/avatar.jpg'} 
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#53ddfc]/40"
                      onError={(e) => { e.currentTarget.src = '/avatar.jpg'; }}
                    />
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{post.author.name}</h3>
                      <p className="text-xs text-[#83aaff] font-medium mt-0.5">{post.author.role}</p>
                      <span className="text-[11px] text-[#4c7c90] block mt-1">BSCS • NEMSU</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#83b2c8] leading-relaxed pt-3 border-t border-white/5">
                    Documenting 324 hours of remote virtual assistance, landing page engineering, and video editing.
                  </p>
                </div>

                {/* Key Takeaway Highlight Box */}
                {post.content.takeaway && (
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#002b3d] to-[#12002f] border border-[#53ddfc]/40 shadow-xl relative overflow-hidden">
                    <div className="flex items-center gap-2 text-[#53ddfc] text-xs font-bold uppercase tracking-widest mb-2.5">
                      <IconResolver name="Lightbulb" size={16} />
                      <span>Key Takeaway</span>
                    </div>
                    <blockquote className="text-sm sm:text-base font-bold font-sora text-white leading-relaxed">
                      "{post.content.takeaway}"
                    </blockquote>
                  </div>
                )}

                {/* Article Topics & Tags */}
                <div className="bg-[#002130]/80 p-5 rounded-2xl border border-white/10 shadow-lg">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#83aaff] mb-3 flex items-center gap-1.5">
                    <IconResolver name="Tag" size={14} />
                    Article Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs text-[#53ddfc] bg-[#002b3d] px-3 py-1 rounded-full border border-[#53ddfc]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation Quick Jump */}
                <div className="bg-[#002130]/80 p-5 rounded-2xl border border-white/10 shadow-lg space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#83b2c8] mb-2">
                    Browse Weeks
                  </h4>
                  {prevPost && (
                    <button
                      onClick={() => onSelectPost(prevPost)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#001824] hover:bg-[#002b3d] border border-white/10 text-left transition-colors cursor-pointer group"
                    >
                      <IconResolver name="ChevronLeft" size={18} className="text-[#53ddfc] group-hover:-translate-x-1 transition-transform" />
                      <div>
                        <span className="text-[10px] text-[#4c7c90] uppercase tracking-wider block">Previous Week</span>
                        <span className="text-xs font-bold text-white group-hover:text-[#53ddfc] line-clamp-1">Week {prevPost.week}</span>
                      </div>
                    </button>
                  )}
                  {nextPost && (
                    <button
                      onClick={() => onSelectPost(nextPost)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#001824] hover:bg-[#002b3d] border border-white/10 text-right transition-colors cursor-pointer group"
                    >
                      <div>
                        <span className="text-[10px] text-[#4c7c90] uppercase tracking-wider block">Next Week</span>
                        <span className="text-xs font-bold text-white group-hover:text-[#53ddfc] line-clamp-1">Week {nextPost.week}</span>
                      </div>
                      <IconResolver name="ChevronRight" size={18} className="text-[#53ddfc] group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
