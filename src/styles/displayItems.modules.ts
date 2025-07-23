// styles/displayItems.modules.ts
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
`;

export const ItemCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: #f8f8f8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  span {
    display: block;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
`;
