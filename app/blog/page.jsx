import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import PostCard from '@/components/PostCard';
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
        title="مطالب تخصصی، به زبان ساده."
        lead="پاسخ روشن به پرسش‌های حسابرسی، مالیات و حسابداری — بدون اصطلاح‌بازی."
      />
      <section className="block">
        <div className="wrap">
          <div className="posts">
            {posts.map((p) => (
              <Reveal key={p.slug}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
