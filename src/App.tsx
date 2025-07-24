import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import SearchBar from './pages/SearchBar';
import Spinner from './components/spinner';
import ItemPage from './components/itemsInformation';

function App() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading when location changes
    setLoading(true);

    // Simulate data load delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200); // You can adjust this delay

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
    {loading && <Spinner/>}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="tvshows" element={<TvShows />}/>
        <Route path="searchbar" element={<SearchBar/>}></Route>
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </>
  )
}

export default App
