import React from 'react';
import { GlassCard } from './GlassCard';
import { IconResolver } from './IconResolver';

export const BlogCard = ({ post, onSelectPost }) => {
  return (
    <GlassCard 
      hover="scale" 
      padding="none" 
      className="group flex flex-col h-full overflow-hidden border border-white/10 hover:border-[#53ddfc]/40 transition-all duration-300"
    >
      {/* Cover Image */}
      <div className="relative h-48 w-full overflow-hidden bg-[#001c27]">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001824] via-transparent to-black/30" />
        
        {/* Week Badge */}
        <div className="absolute top-3 left-3 bg-[#002b3d]/90 backdrop-blur-md border border-[#53ddfc]/40 text-[#53ddfc] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
          Week {post.week}
        </div>

        {/* Read Time */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#c5ebff] text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
          <IconResolver name="Clock" size={12} className="text-[#53ddfc]" />
          <span>{post.readTime}</span>
        </div>

        {post.featured && (
          <div className="absolute bottom-3 right-3 bg-[#ac8aff]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
            Featured
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="text-[11px] font-medium text-[#83aaff] bg-[#002b3d]/60 px-2 py-0.5 rounded border border-[#83aaff]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold font-sora text-white group-hover:text-[#53ddfc] transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs md:text-sm text-[#83b2c8] line-clamp-3 leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author & Read CTA */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5">
            <img 
              src={post.author.avatar || '/avatar.jpg'} 
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-[#53ddfc]/30"
              onError={(e) => { e.currentTarget.src = '/avatar.jpg'; }}
            />
            <div>
              <p className="text-xs font-semibold text-white leading-tight">{post.author.name}</p>
              <p className="text-[10px] text-[#4c7c90]">{post.date}</p>
            </div>
          </div>

          <button
            onClick={() => onSelectPost(post)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#53ddfc] hover:text-white group-hover:translate-x-0.5 transition-all cursor-pointer"
          >
            <span>Read Story</span>
            <IconResolver name="ArrowRight" size={14} />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};
