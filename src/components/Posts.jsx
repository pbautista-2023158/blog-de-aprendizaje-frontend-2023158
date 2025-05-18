import { useState } from 'react'
import { usePosts } from '../shared/hooks/usePosts'
import { Card } from '../components/Card'
import { PacmanLoader } from 'react-spinners'

export const Posts = () => {
  const { posts, isFetching, getPosts, getPostsByCourse } = usePosts()
  const [filtro, setFiltro] = useState('Todos')

  const cursos = ['Todos', 'Taller III', 'Tecnologia III', 'Practica Supervisada']

  const handleFiltro = (curso) => {
    setFiltro(curso)
    if (curso === 'Todos') {
      getPosts()
    } else {
      getPostsByCourse(curso)
    }
  } 

  if (isFetching) return <p className="text-center"><PacmanLoader /></p>

  return (
    <div className="container">

      <div className="my-4 text-center">
        <h2>Publicaciones</h2>
        <select className="form-select w-50 mx-auto" value={filtro} onChange={(e) => handleFiltro(e.target.value)}>
          {cursos.map(curso => <option key={curso}>{curso}</option>)}
        </select>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {posts.map(post => (
          <div className="m-3" key={post._id}>
            <Card
              title={post.title}
              description={post.description}
              course={post.course}
              id={post._id}
            />
          </div>
        ))}
      </div>

    </div>
  )
}
