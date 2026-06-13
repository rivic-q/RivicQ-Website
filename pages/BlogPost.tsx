import { useParams, Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.slug === id);

  if (!post) {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', margin: '0 0 12px' }}>Post not found</h2>
        <Link to="/blog" style={{ color: 'var(--rq-blue)' }}>← Back to blog</Link>
      </div>
    );
  }

  return (
    <article style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px' }}>
      <Link to="/blog" style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', display: 'block', marginBottom: 20 }}>← Back to blog</Link>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        {post.tags.map(t => <Badge key={t} variant="blue">{t}</Badge>)}
      </div>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, margin: '0 0 8px', lineHeight: 1.25 }}>{post.title}</h1>
      <div style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', marginBottom: 24 }}>{post.date} · {post.author}</div>
      <div style={{
        lineHeight: 1.8, fontSize: '0.95rem',
      }}>
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return <h2 key={i} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, margin: '28px 0 8px' }}>{line.replace('## ', '')}</h2>;
          if (line.startsWith('- ')) return <li key={i} style={{ color: 'var(--rq-muted)', marginLeft: 16 }}>{line.replace('- ', '')}</li>;
          if (line.trim() === '') return null;
          return <p key={i} style={{ color: 'var(--rq-muted)', margin: '0 0 12px' }}>{line}</p>;
        })}
      </div>
    </article>
  );
}
