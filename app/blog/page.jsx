import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { posts } from '@/lib/posts';

export const metadata = {
  title: 'مقالات',
  description:
    'مقالات تخصصی حسابرسی، مالیات و حسابداری — پاسخ روشن به پرسش‌های مالی شرکت‌ها به زبان ساده.',
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="مقالات و راهنماها"
        title="مطالب تخصصی، به زبان ساده."
        lead="پاسخ روشن به پرسش‌های حسابرسی، مالیات و حسابداری — بدون اصطلاح‌بازی."
      />
      <section className="block">
        <div className="wrap">
          <div className="posts">
            {posts.map((p) => (
              <Reveal key={p.slug}>
                <Link className="post" href={`/blog/${p.slug}`} style={{ height: '100%' }}>
                  <span className="cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <time dateTime={p.iso}>{p.date}</time>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
