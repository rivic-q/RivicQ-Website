import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { posts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <article className="prose prose-slate max-w-none">
        <div className="text-center py-24">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-sky-500 hover:text-sky-600 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="prose prose-slate max-w-none">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 transition-colors mb-8 not-prose">
        <ArrowLeft aria-hidden="true" size={16} /> Back to Blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6 not-prose">
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${post.categoryColor}`}>
            {post.category.replace('-', ' ')}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-6 text-sm text-slate-500 not-prose">
          <span className="flex items-center gap-2"><Calendar aria-hidden="true" size={14} /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock aria-hidden="true" size={14} /> {post.readTime} read</span>
        </div>
      </header>

      <div className="text-slate-600 leading-relaxed text-lg max-w-3xl">
        <p className="text-xl text-slate-700 font-medium mb-8">{post.excerpt}</p>
        <p>{post.content}</p>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-100 not-prose">
        <Link to="/blog" className="text-sky-500 hover:text-sky-600 font-medium">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
