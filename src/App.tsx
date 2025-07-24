import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import SearchBar from './pages/SearchBar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="tvshows" element={<TvShows />}/>
        <Route path="searchbar" element={<SearchBar/>}></Route>
        <Route path="infomation"></Route>
      </Routes>
    </>
  )
}

export default App
