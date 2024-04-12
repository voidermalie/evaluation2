import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PostDetail from './pages/PostDetail/PostDetail';
import AddPost from './pages/AddPost/AddPost';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:id' element={<PostDetail />}/>
        <Route path='/add-post' element={<AddPost />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
