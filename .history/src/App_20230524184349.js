import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path=':title' element={<Movies />}></Route>
          <Route path=':title/:id' element={Movie />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
