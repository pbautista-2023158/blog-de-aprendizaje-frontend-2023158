import { useNavigate } from 'react-router-dom'

export const Card = ({ title, description, course, id }) => {
  const navigate = useNavigate()

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{course}</h6>
        <p className="card-text">{description}</p>
        <button className="btn btn-success" onClick={() => navigate(`/post/${id}`)}>
          Ver detalles
        </button>
      </div>
    </div>
  )
}
