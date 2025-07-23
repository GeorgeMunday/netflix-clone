import styled from 'styled-components';

export const NavbarWrapper = styled.div<{ backgroundImage?: string }>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  font-family: 'Arial Black', sans-serif;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LogoContainer = styled.div`
  img {
    height: 40px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #ccc;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.2s;

    &.active {
      color: #ff6600; // orange for active tab
    }

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  gap: 0.5rem;

  .searchIcon {
    color: #888;
    font-size: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  width: 150px;
`;

export const ProfileContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileIcon = styled.img`
  height: 30px;
  border-radius: 50%;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  max-width: 600px;
  color: white;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;


export const BurgerMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const infoBtn = styled.button``;


export const BurgerMenuItems = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1rem;
  position: absolute;
  top: 70px;
  right: 0;
  width: 200px;
  z-index: 1000;

  a {
    color: white;
    padding: 0.5rem 0;
    text-decoration: none;

    &.active {
      color: #ff6600;
    }
  }
`;
