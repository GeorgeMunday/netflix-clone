import React, {useState} from 'react';
import { NavbarWrapper } from '../styles/Navbar.modules';
import axios from 'axios';
import {baseUrl, popularShows  , apiKey , popular} from '../modules/ApiLinks';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [movieData, setMovieData] = useState({
        backdropPath: '',
        title: '',
        overview: '',
    });
    const fetchDate = async (page:string) => {
        let url = `${baseUrl}/${page}?api_key=${apiKey}`;
        if(url === "tv"){
            url = `${popularShows}`;
        } else {
            url = `${popular}`;
        }
        try {
            const response = await axios.get(url)
            const date = await response.data;
            const randomIndex = Math.floor(Math.random() * date.results.length);
            const randomMedia = date.results[randomIndex];

            if (randomMedia && randomMedia.backdrop_path) {
                setMovieData({
                    backdropPath: `https://image.tmdb.org/t/p/original${randomMedia.backdrop_path}`,
                    title: randomMedia.title || randomMedia.name || 'Untitled',
                    overview: randomMedia.overview || 'No overview available.',
                });
            }
        } catch(error)
        {
            console.error("Error fetching data:", error);
        }
    }

    React.useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.includes('movies')) {
            fetchDate('movie');
        } else if (currentPath.includes('tvshows')) {
            fetchDate('tv');
        } else {
            fetchDate('movie');
        }
    }, []);
  return (
    <NavbarWrapper style={{ backgroundImage: `url(${movieData.backdropPath})` }}>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navLinks">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Movies
                </NavLink>
                <NavLink to="/tvshows" className={({ isActive }) => (isActive ? 'active' : '')}>
                    TV Shows
                </NavLink>
            </div>
            <div>
                <span className="material-symbols-outlined searchIcon">search</span>
                <input 
                type="text" 
                placeholder="Search..."
                className='searchInput'
                />
            </div>
        </div>
    </NavbarWrapper>
  );
}

export default Navbar;