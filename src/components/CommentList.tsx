import { Comment } from '@/types';

interface CommentListProps {
  comments: Comment[];
  onDelete: (id: number) => void;
}

export default function CommentList({ comments, onDelete }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <div key={comment.id} className="border p-4 rounded">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-600">{comment.text}</p>
            </div>
            <button
              onClick={() => onDelete(comment.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}