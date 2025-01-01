import { useState } from "react";

interface CommentFormProps {
  onSubmit: (text: string, author: string, email: string) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [text, setText] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [email, setEmail] = useState(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !author.trim() || !email.trim()) return;

    onSubmit(text, author, email);

    setText("");
    setAuthor("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {/* Name Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <input
          type="email" // Email input type for validation
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Comment Textarea */}
      <div className="mb-4">
        <textarea
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  );
}
