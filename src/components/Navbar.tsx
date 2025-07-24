import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- import useNavigate
import axios from 'axios';
import { baseUrl, popularShows, apiKey, popular } from '../modules/ApiLinks';
import LinksBar from './linksBar.tsx';
import {
  NavbarWrapper,
  MovieInfo,
  InfoButtons,
} from '../styles/Navbar.modules.ts';

const Navbar = () => {
  const [movieData, setMovieData] = useState({
    backdropPath: '',
    title: '',
    overview: '',
    id: null as number | null,      // <-- add id here
  });

  const navigate = useNavigate();   // <-- initialize navigate

  const fetchData = async (page: string) => {
    let url = `${baseUrl}/${page}?api_key=${apiKey}`;
    if (page === 'tv') {
      url = popularShows;
    } else {
      url = popular;
    }

    try {
      const response = await axios.get(url);
      const data = response.data;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomMedia = data.results[randomIndex];

      if (randomMedia && randomMedia.backdrop_path) {
        setMovieData({
          backdropPath: `https://image.tmdb.org/t/p/original${randomMedia.backdrop_path}`,
          title: randomMedia.title || randomMedia.name || 'Untitled',
          overview: randomMedia.overview || 'No overview available.',
          id: randomMedia.id,
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes('movies')) {
      fetchData('movie');
    } else if (currentPath.includes('tvshows')) {
      fetchData('tv');
    } else {
      fetchData('movie');
    }
  }, []);

  // Handler for More Info button
  const handleMoreInfoClick = () => {
    if (movieData.id) {
      navigate(`/item/${movieData.id}`);
    }
  };

  return (
    <NavbarWrapper backgroundImage={movieData.backdropPath}>
      <LinksBar />
      <MovieInfo>
        <h1>{movieData.title}</h1>
        <p>{movieData.overview.split(' ').slice(0, 25).join(' ')}...</p>
        <InfoButtons onClick={handleMoreInfoClick}>more info</InfoButtons>
      </MovieInfo>
    </NavbarWrapper>
  );
};

export default Navbar;
