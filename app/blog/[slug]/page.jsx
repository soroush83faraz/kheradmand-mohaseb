import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaBand from '@/components/CtaBand';
import { posts, getPost } from '@/lib/posts';
import { postImages } from '@/lib/images';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function Block({ block }) {
  if (block.t === 'h2') return <h2>{block.c}</h2>;
  if (block.t === 'ul')
    return (
      <ul>
        {block.c.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return <p>{block.c}</p>;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="article">
        <div className="meta">
          <span className="cat">{post.category}</span>
          <time dateTime={post.iso}>{post.date}</time>
        </div>
        <h1>{post.title}</h1>
        {postImages[post.slug] ? (
          <div className="article-img">
            <Image
              src={postImages[post.slug].src}
              alt={postImages[post.slug].alt}
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 100vw, 720px"
            />
          </div>
        ) : null}
        <div className="article-body">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
        <div className="article-foot">
          <Link className="btn btn-ghost" href="/blog">
            ← بازگشت به مقالات
          </Link>
        </div>
      </article>
      <CtaBand title="درباره موضوع این مقاله سؤال دارید؟ مشاوره اولیه رایگان است." />
    </>
  );
}
