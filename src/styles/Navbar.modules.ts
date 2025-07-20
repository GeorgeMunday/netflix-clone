import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: relative;
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
    z-index: -1;
  }

  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
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

  /* --- Search Input Styling --- */
  .searchContainer {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .searchInput {
  width: 100%;
  padding: 12px 18px 12px 44px;
  font-size: 16px;
  border: none;
  border-radius: 9999px;
  background-color: rgba(100, 100, 100, 0.2); /* semi-transparent gray */
  color: #e5e7eb; /* light text (gray-200) */
  backdrop-filter: blur(4px); /* optional: for glass effect */
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  outline: none;
}

.searchInput::placeholder {
  color: rgba(229, 231, 235, 0.5); /* semi-transparent placeholder */
}


  .searchIcon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: 20px;
    color: #6b7280;
    pointer-events: none;
  }
`;
