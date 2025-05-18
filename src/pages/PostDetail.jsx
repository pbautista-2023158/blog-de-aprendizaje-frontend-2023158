import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CommentForm from '../components/CommentForm'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  const getPostById = async () => {
    try {
      const response = await axios.get('http://localhost:2636/api/posts/getAllPosts')
      const allPosts = response.data.posts
      const selected = allPosts.find(p => p._id === id)
      setPost(selected)
    } catch (err) {
      console.error(err)
      alert('Error al obtener la publicación.')
    }
  }

  const handleAddComment = async (commentData) => {
    try {
      await axios.post('http://localhost:2636/api/comments/addComment', {
        post: id,
        ...commentData,
      })
      await getPostById()
    } catch (err) {
      console.error(err)
      alert('Error al agregar comentario.')
    }
  }

  useEffect(() => {
    getPostById()
  }, [id])

  if (!post) return <p className='text-center'>Cargando publicación...</p>

  return (
    <div className="container my-4">
      <h2>{post.title}</h2>
      <p><strong>Curso:</strong> {post.course}</p>
      <p><strong>Descripción:</strong> {post.description}</p>
      <p><strong>Fecha:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>

      <hr />
      <h4>Comentarios</h4>
      {
        post.comments && post.comments.length > 0 ? (
          <ul className="list-group mb-4">
            {[...post.comments].reverse().map(comment => (
              <li className="list-group-item" key={comment._id}>
                <strong>{comment.author}:</strong> {comment.content}
              </li>
            ))}
          </ul>
        ) : <p>No hay comentarios aún.</p>
      }

      <CommentForm onSubmit={handleAddComment} />
    </div>
  )
}
