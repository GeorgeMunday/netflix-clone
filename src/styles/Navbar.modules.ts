import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: relative; /* normal flow for the navbar wrapper */
  z-index: 10;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: ${(props) => props.style?.backgroundImage || 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.5);
    z-index: -1;  /* behind everything */
  }

  .navbar {
    position: sticky; /* sticks at top on scroll */
    top: 0;
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: rgba(0,0,0,0.4); /* slight translucent bg for visibility */
    backdrop-filter: blur(5px); /* nice glass effect for readability */
    z-index: 10;
  }

  .logo img {
    height: 40px;
    object-fit: contain;
  }

  .navLinks {
    display: flex;
    gap: 1.5rem;
  }

  .navLinks a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    position: relative;
  }

  .navLinks a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -6px;
    background: #ff3c3c;
    transition: width 0.3s ease;
  }

  .navLinks a:hover::after,
  .navLinks a.active::after {
    width: 100%;
  }

  .navLinks a.active {
    color: #ff3c3c;
  }
`;
