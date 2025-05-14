import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:2636/api", 
  timeout: 2000
});

// POST endpoints
export const createPost = (data) => apiClient.post("/posts/addPost", data);
export const getAllPosts = () => apiClient.get("/posts/getAllPosts");
export const getPostsByCourse = (course) =>
  apiClient.get("/posts/getPostsByCourse", { params: { course } });

// COMMENT endpoints
export const createComment = (data) => apiClient.post("/comments/addComment", data);
export const getCommentsByPost = async (postId) => {
  const post = await getPostById(postId);
  return { data: { comments: post.data.post.comments } };
};

export const getPostById = (id) => apiClient.get(`/posts/getAllPosts`)
  .then(res => {
    const post = res.data.posts.find(p => p._id === id);
    if (!post) throw new Error("No encontrado");
    return { data: { post } };
  });
