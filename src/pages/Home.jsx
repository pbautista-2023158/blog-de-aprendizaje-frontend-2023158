import { useEffect, useState } from "react";
import { getAllPosts, getPostsByCourse } from "../services/api";
import PostList from "../components/PostList";
import CourseFilter from "../components/CourseFilter.jsx";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("Todos");

  const loadPosts = async () => {
    if (selectedCourse === "Todos") {
      const res = await getAllPosts();
      setPosts(res.data.posts);
    } else {
      const res = await getPostsByCourse(selectedCourse);
      setPosts(res.data.posts);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [selectedCourse]);

  return (
    <div className="container">
      <h1 className="title">Blog de Aprendizaje</h1>
      <CourseFilter selected={selectedCourse} onChange={setSelectedCourse} />
      <PostList posts={posts} />
    </div>
  );
}
