import { useState, useEffect } from 'react';
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
  });



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

  return (
    <NavbarWrapper backgroundImage={movieData.backdropPath}>
      <LinksBar/>
        <MovieInfo>
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <InfoButtons>more info</InfoButtons>
        </MovieInfo>
    </NavbarWrapper>
  );
};

export default Navbar;
