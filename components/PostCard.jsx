import Image from 'next/image';
import Link from 'next/link';
import { postImages } from '@/lib/images';

export default function PostCard({ post }) {
  const img = postImages[post.slug];
  return (
    <Link className="post" href={`/blog/${post.slug}`} style={{ height: '100%' }}>
      {img ? (
        <span className="post-img">
          <Image src={img.src} alt={img.alt} sizes="(max-width: 860px) 100vw, 33vw" />
        </span>
      ) : null}
      <span className="post-body">
        <span className="cat">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <time dateTime={post.iso}>{post.date}</time>
      </span>
    </Link>
  );
}
