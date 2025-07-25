import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 600px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
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

    span {
      opacity: 0;
    }
  }

  img {
    width: 100%;
    display: block;
    border-radius: 6px 6px 0 0 ;
  }

  h3 {
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0.5rem 0 0.25rem 0;
    padding: 0 0.5rem;
    border-radius: 6px;
  }

  span {
    position: absolute;
    top: 0rem;
    right: 0rem;
    background-color: #ff6600;
    color: #fff;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0 6px 0 6px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity 0.2s ease;
  }

  p {
    font-size: 0.75rem;
    color: #aaa;
    padding: 0 0.5rem 0.5rem 0.5rem;
    line-height: 1.3;
  }
`;
