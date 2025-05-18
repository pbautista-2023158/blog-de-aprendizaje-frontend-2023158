import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!author.trim() || !content.trim()) {
      return alert('Por favor completa todos los campos.')
    }
    onSubmit({ author, content })
    setAuthor('')
    setContent('')
  }

  const handleSalir = () => {
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">Nombre</label>
        <input
          type="text"
          id="author"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Comentario</label>
        <textarea
          id="content"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-primary" onClick={handleSalir}>
          Salir
        </button>
        <button type="submit" className="btn btn-primary">
          Enviar Comentario
        </button>
      </div>

    </form>
  )
}
