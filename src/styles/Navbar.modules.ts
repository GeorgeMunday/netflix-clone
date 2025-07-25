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
  bottom: 2rem;
  left: 2rem;
  width: 70%;
  max-width: 70%;
  max-height: 50%;
  height: 50%;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: rgba(24, 24, 24, 0.9);
  padding: 2rem;
  border-radius: 8px;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.2;
    transition: font-size 0.7s;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    max-width: 90%;
    color: #e5e5e5;
    transition: display 0.7s;
  }

  @media (max-width: 1000px) {
    bottom: 1rem;
    max-width: 100%;
    padding: 3rem;
    background: rgba(24, 24, 24, 0.8);

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    p {
      display: none;
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
