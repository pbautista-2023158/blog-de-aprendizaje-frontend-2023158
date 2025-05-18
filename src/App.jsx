import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  )
}

export default App
