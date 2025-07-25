import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/github.png';

import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  ProfileContainer,
  ProfileIcon,
  BurgerMenuButton,
  BurgerMenuItems,
  CloseButton,
} from '../styles/Navbar.modules';


const LinksBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
          <NavbarContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault(); // Prevent React Router navigation
              window.location.href = '/'; // Force full-page reload
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            onClick={(e) => {
              e.preventDefault(); // Prevent React Router navigation
              window.location.href = '/movies'; // Force full-page reload
            }}
          >
            Movies
          </NavLink>
          <NavLink
            to="/tvshows"
            onClick={(e) => {
              e.preventDefault(); // Prevent React Router navigation
              window.location.href = '/tvshows'; // Force full-page reload
            }}
          >
            Tv Shows
          </NavLink>   
          <NavLink
            to="/searchbar"
            onClick={(e) => {
              e.preventDefault(); // Prevent React Router navigation
              window.location.href = '/searchbar'; // Force full-page reload
            }}
          >
            Search
          </NavLink>
          
        </NavLinks>
        <ProfileContainer>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <ProfileIcon src={user} alt="User" />
          </a>
        </ProfileContainer>


        <BurgerMenuButton onClick={() => setMenuOpen(prev => !prev)}>
        ☰
        </BurgerMenuButton>

        <BurgerMenuItems open={menuOpen}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Movies</NavLink>
        <NavLink to="/tvshows" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>TV Shows</NavLink>
        <NavLink to="searchbar" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Search Bar</NavLink>
        <CloseButton onClick={() => setMenuOpen(false)}>&times;</CloseButton>
        </BurgerMenuItems>
      </NavbarContainer>
  )
}

export default LinksBar