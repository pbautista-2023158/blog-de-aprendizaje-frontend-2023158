import { useEffect, useState } from 'react'
import { getPostsRequest, getPostsByCourseRequest } from '../../services/api'

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const getPosts = async () => {
    setIsFetching(true)
    const response = await getPostsRequest()
    if (response.error) {
      console.error(response.err)
      alert('Error al obtener publicaciones')
    } else {
      setPosts(response.data.posts)
    }
    setIsFetching(false)
  }

  const getPostsByCourse = async (course) => {
    setIsFetching(true)
    const response = await getPostsByCourseRequest(course)
    if (response.error) {
      console.error(response.err)
      alert('Error al filtrar publicaciones')
    } else {
      setPosts(response.data.posts)
    }
    setIsFetching(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return {
    posts,
    isFetching,
    getPosts,
    getPostsByCourse
  }
}
