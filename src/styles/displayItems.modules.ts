import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  background: linear-gradient(to bottom, #111, #000);
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 2rem 1rem 2rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 2rem;
  gap: 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff6600;
    border-radius: 4px;
  }
`;

export const ItemCard = styled.div`
  min-width: 180px;
  max-width: 220px;
  flex: 0 0 auto;
  border-radius: 6px;
  background-color: #181818;
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.08);
    z-index: 2;
  }

  img {
    width: 100%;
    border-radius: 6px;
    display: block;
  }

  h3 {
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0.5rem 0 0.25rem 0;
    padding: 0 0.5rem;
  }

  span {
    display: none; // Hidden to match Netflix simplicity
  }

  p {
    font-size: 0.75rem;
    color: #aaa;
    padding: 0 0.5rem 0.5rem 0.5rem;
    line-height: 1.3;
  }
`;
