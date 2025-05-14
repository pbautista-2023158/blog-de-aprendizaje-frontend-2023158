import { useEffect, useState } from "react";
import { getPostById, getCommentsByPost } from "../services/api";
import CommentForm from "./CommentForm";

export default function PostDetail({ postId, onClose }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const loadData = async () => {
    const postRes = await getPostById(postId);
    setPost(postRes.data.post);

    const commentRes = await getCommentsByPost(postId);
    setComments(commentRes.data.comments);
  };

  useEffect(() => {
    loadData();
  }, [postId]);

  if (!post) return <p>Cargando publicación...</p>;

  return (
    <div className="detail">
      <button className="back-btn" onClick={onClose}>← Volver</button>
      <h2>{post.title}</h2>
      <p className="meta">{post.course} | {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>{post.description}</p>

      <h3>Comentarios</h3>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c._id} className="comment-item">
              <strong>{c.author}</strong>
              <p>{c.content}</p>
              <span>{new Date(c.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}

      <CommentForm postId={postId} onCommentAdded={loadData} />
    </div>
  );
}
