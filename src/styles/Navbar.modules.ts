import styled from 'styled-components';

export const NavbarWrapper = styled.div<{ backgroundImage?: string }>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  font-family: 'Arial Black', sans-serif;
  background-color: black;
`;

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background-color: rgba(24, 24, 24, 1); /* semi-transparent */
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LogoContainer = styled.div`
  img {
    height: 45px;
    filter: brightness(1.2);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;

    &.active {
      color: #ff6600;
    }

    &:hover {
      color: #fff;
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
  background: #333;
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  gap: 0.5rem;

  .searchIcon {
    color: #aaa;
    font-size: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  color: white;
  width: 150px;

  &::placeholder {
    color: #aaa;
  }
`;

export const ProfileContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileIcon = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  cursor: pointer;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 2rem;
  width: fit-content;
  max-width: 50%;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: rgba(24, 24, 24, 0.9);
  padding: 2rem;
  border-radius: 8px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    max-width: 90%;
    color: #e5e5e5;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    max-width: 90%;
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.95rem;
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

export const InfoButtons = styled.div`
  background-color: #ff6600;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: #e65c00;
  }
`;


export const BurgerMenuItems = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 1rem;
  position: absolute;
  top: 70px;
  right: 0;
  width: 200px;
  z-index: 1000;

  a {
    color: white;
    padding: 0.75rem 0;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;

    &.active {
      color: #ff6600;
    }

    &:hover {
      color: #ff6600;
    }
  }
`;
