import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <SectionHeader
        title="Blog & Insights"
        subtitle="Deep dives into PQC implementation, regulatory compliance, and cryptographic engineering."
        badge={<Badge variant="blue">Blog</Badge>}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {blogPosts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid var(--rq-border)', borderRadius: 12, padding: 20,
              transition: 'border-color 200ms',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rq-blue)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rq-border)'}
            >
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                {post.tags.map(t => <Badge key={t} variant="blue">{t}</Badge>)}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 700, margin: '0 0 6px' }}>{post.title}</h3>
              <p style={{ color: 'var(--rq-muted)', fontSize: '0.85rem', margin: '0 0 6px', lineHeight: 1.6 }}>{post.excerpt}</p>
              <div style={{ color: 'var(--rq-muted)', fontSize: '0.75rem' }}>{post.date} · {post.author}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
