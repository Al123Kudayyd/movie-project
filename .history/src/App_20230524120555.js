import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cars from './pages/Cars';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cars' element={<Cars />}></Route>
          <Route path=':id' element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
