import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import user from '../assets/user.png';

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
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
            Movies
          </NavLink>
          <NavLink to="/tvshows" className={({ isActive }) => (isActive ? 'active' : '')}>
            TV Shows
          </NavLink>
          <NavLink to="searchbar" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>
              Search Bar
          </NavLink>
        </NavLinks>
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
        <NavLink to="searchbar" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Search Bar</NavLink>
        <CloseButton onClick={() => setMenuOpen(false)}>&times;</CloseButton>
        </BurgerMenuItems>
      </NavbarContainer>
  )
}

export default LinksBar