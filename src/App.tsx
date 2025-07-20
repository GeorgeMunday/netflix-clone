import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="tvshows" element={<TvShows />}/>
      </Routes>
    </>
  )
}

export default App
