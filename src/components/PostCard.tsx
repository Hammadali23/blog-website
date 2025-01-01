import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow ">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className=" rounded-lg"
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <div className="text-gray-600 mb-4 prose">
        <ReactMarkdown>
          {post.content.substring(0, 200) + '...'}
        </ReactMarkdown>
      </div>
      <Link href={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700">
        Read more →
      </Link>
    </div>
  );
}
