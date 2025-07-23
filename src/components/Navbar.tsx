import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { baseUrl, popularShows, apiKey, popular } from '../modules/ApiLinks';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import {
  NavbarWrapper,
  NavbarContainer,
  LogoContainer,
  NavLinks,
  SearchContainer,
  SearchInput,
  ProfileContainer,
  ProfileIcon,
  BurgerMenuButton,
  BurgerMenuItems,
  CloseButton,
  MovieInfo,
  InfoButtons
} from '../styles/Navbar.modules.ts';

const Navbar = () => {
  const [movieData, setMovieData] = useState({
    backdropPath: '',
    title: '',
    overview: '',
  });

  const [menuOpen, setMenuOpen] = useState(false);

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
      <NavbarContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
            Movies
          </NavLink>
          <NavLink to="/tvshows" className={({ isActive }) => (isActive ? 'active' : '')}>
            TV Shows
          </NavLink>
        </NavLinks>

        <SearchContainer>
          <span className="material-symbols-outlined searchIcon">search</span>
          <SearchInput type="text" placeholder="Search..." />
        </SearchContainer>

        <ProfileContainer>
          <ProfileIcon src={user} alt="User" />
        </ProfileContainer>

        <BurgerMenuButton onClick={() => setMenuOpen(prev => !prev)}>
        ☰
        </BurgerMenuButton>

        <BurgerMenuItems open={menuOpen}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Movies</NavLink>
        <NavLink to="/tvshows" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>TV Shows</NavLink>
        <CloseButton onClick={() => setMenuOpen(false)}>&times;</CloseButton>
        </BurgerMenuItems>
      </NavbarContainer>
        <MovieInfo>
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <InfoButtons>more info</InfoButtons>
        </MovieInfo>
    </NavbarWrapper>
  );
};

export default Navbar;
