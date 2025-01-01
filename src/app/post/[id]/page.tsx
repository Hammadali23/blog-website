'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { posts } from '@/app/lib/data';
import { Comment } from '@/types';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';

export default function PostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = posts.find(p => p.id === postId);

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: 'Great post!', author: 'User1' },
  ]);

  const addComment = (text: string, author: string) => {
    const newComment: Comment = {
      id: comments.length + 1,
      text,
      author,
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="relative w-full h-96 mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="prose max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          <CommentForm onSubmit={addComment} />
          <CommentList comments={comments} onDelete={deleteComment} />
        </div>
      </div>
    </div>
  );
}
