import React, { useState, useMemo } from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { BlogCard } from '../components/BlogCard';
import { BlogReaderModal } from '../components/BlogReaderModal';
import { GlassCard } from '../components/GlassCard';
import { IconResolver } from '../components/IconResolver';
import { blogPosts } from '../data/blogPosts';
import { overallSummary } from '../data/reflections';
import { usePageTitle } from '../hooks/usePageTitle';

export const Blog = () => {
  usePageTitle('OJT Blog & Journal');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activePost, setActivePost] = useState(null);

  // Available tags for filtering
  const allTags = useMemo(() => {
    const tagsSet = new Set(['All']);
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filtered posts based on search query and tag selection
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.deepDive.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [searchQuery, selectedTag]);

  // Featured post (first featured post or week 5)
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  return (
    <PageTransition>
      <div className="pb-16">
        {/* Section Header */}
        <SectionHeader 
          title="OJT Tech Blog & Journal" 
          subtitle="Chronicles of My 324-Hour Virtual Assistant Journey"
          gradient="primary-to-secondary"
        />

        {/* Featured Article Banner (Only shown when no search filter active) */}
        {selectedTag === 'All' && !searchQuery && featuredPost && (
          <div className="mt-10 mb-12">
            <GlassCard 
              hover="glow" 
              glowColor="primary" 
              padding="none" 
              className="overflow-hidden border border-[#53ddfc]/30 group"
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                {/* Image */}
                <div className="lg:col-span-7 relative min-h-[260px] lg:min-h-[380px] overflow-hidden">
                  <img 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#001824]/40 to-[#001824]" />
                  <div className="absolute top-4 left-4 bg-[#ac8aff] text-[#001824] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    Featured Story
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#001824]/90">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#53ddfc] uppercase tracking-wider">
                        Week {featuredPost.week} Milestone
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-xs text-[#83b2c8] flex items-center gap-1">
                        <IconResolver name="Clock" size={12} className="text-[#53ddfc]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-sora text-white mb-3 group-hover:text-[#53ddfc] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-[#83b2c8] leading-relaxed mb-6 line-clamp-4">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featuredPost.tags.map((t, idx) => (
                        <span key={idx} className="text-xs text-[#83aaff] bg-[#002b3d] px-2 py-0.5 rounded border border-[#83aaff]/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActivePost(featuredPost)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#21bedc] to-[#0091b2] text-[#001824] font-bold text-sm hover:brightness-110 shadow-lg shadow-[#21bedc]/20 transition-all cursor-pointer"
                    >
                      <span>Read Complete Article</span>
                      <IconResolver name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 mt-6">
          {/* Tags Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedTag === tag
                    ? 'bg-[#53ddfc] text-[#001824] border-[#53ddfc] shadow-md shadow-[#53ddfc]/20'
                    : 'bg-[#002130]/80 text-[#83b2c8] border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <IconResolver 
              name="Search" 
              size={16} 
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4c7c90]" 
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search weekly articles..."
              className="w-full pl-10 pr-4 py-2 bg-[#002130]/90 border border-white/10 rounded-xl text-sm text-white placeholder-[#4c7c90] focus:outline-none focus:border-[#53ddfc] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <IconResolver name="X" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onSelectPost={(p) => setActivePost(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#001c27]/40 rounded-2xl border border-white/5 mb-16">
            <IconResolver name="FileText" size={40} className="mx-auto text-[#4c7c90] mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No articles found</h3>
            <p className="text-sm text-[#83b2c8]">Try adjusting your search query or tag filter.</p>
          </div>
        )}

        {/* Overall Internship Narrative Summary */}
        <div className="mt-8">
          <GlassCard padding="xl" hover="glow" glowColor="secondary" className="border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-[#ac8aff] text-xs font-bold uppercase tracking-wider block mb-1">
                  Comprehensive Retrospective
                </span>
                <h3 className="text-2xl font-bold font-sora text-white">
                  Executive OJT Summary & Reflections
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-[#001c27] px-4 py-2 rounded-xl border border-white/10">
                <IconResolver name="Award" size={24} className="text-[#53ddfc]" />
                <div>
                  <p className="text-xs text-[#83b2c8]">Total Hours Completed</p>
                  <p className="text-sm font-bold text-white">324 Hours (7 Weeks)</p>
                </div>
              </div>
            </div>

            <p className="text-base text-[#c5ebff] leading-relaxed">
              {overallSummary}
            </p>
          </GlassCard>
        </div>

        {/* Reader Modal */}
        {activePost && (
          <BlogReaderModal
            post={activePost}
            posts={blogPosts}
            onClose={() => setActivePost(null)}
            onSelectPost={(p) => setActivePost(p)}
          />
        )}
      </div>
    </PageTransition>
  );
};
