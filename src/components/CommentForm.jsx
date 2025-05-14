import { useState } from "react";
import { createComment } from "../services/api";

export default function CommentForm({ postId, onCommentAdded }) {
  const [form, setForm] = useState({ author: "", content: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.author || !form.content) {
      return setError("Completa todos los campos.");
    }

    try {
      await createComment({ ...form, post: postId });
      setForm({ author: "", content: "" });
      onCommentAdded(); // Recarga comentarios
    } catch (err) {
      setError("Hubo un error al enviar el comentario.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h4>Agregar un comentario</h4>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="author"
        placeholder="Tu nombre"
        value={form.author}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Escribe tu comentario..."
        value={form.content}
        onChange={handleChange}
      />
      <button type="submit">Comentar</button>
    </form>
  );
}
