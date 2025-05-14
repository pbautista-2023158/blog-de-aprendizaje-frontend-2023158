import { useState } from "react";
import PostDetail from "./PostDetail";

export default function PostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  if (posts.length === 0) return <p>No hay publicaciones disponibles.</p>;

  return (
    <>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post._id} className="post-item" onClick={() => setSelectedPost(post._id)}>
            <h3>{post.title}</h3>
            <p className="meta">{post.course} | {new Date(post.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      {selectedPost && <PostDetail postId={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
}
