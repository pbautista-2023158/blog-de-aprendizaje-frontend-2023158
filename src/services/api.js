import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:2636/api',
  timeout: 3000
})

export const getPostsRequest = async () => {
  try {
    return await apiClient.get('/posts/getAllPosts')
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}

export const getPostsByCourseRequest = async (course) => {
  try {
    return await apiClient.get(`/posts/getPostsByCourse?course=${course}`)
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}

export const addCommentRequest = async (data) => {
  try {
    return await apiClient.post('/comments/addComment', data)
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}
