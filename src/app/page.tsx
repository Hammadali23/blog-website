import { posts } from '@/app/lib/data'; // Replace with your posts data source
import PostCard from '@/components/PostCard';

export default function BlogPage() {
  return (
    <div className="container mx-auto  py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Website</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
