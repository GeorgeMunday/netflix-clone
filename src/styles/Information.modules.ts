import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  margin: 5rem auto;
  padding: 3rem;
  background-color: #141414;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const ImageSection = styled.div`
  flex: 0 0 40%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.9);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 40px #ff6600;
    }
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1.5rem;

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const Rating = styled.p`
  font-size: 1.3rem;
  color: #ccc;
  margin: 0;

  strong {
    color: #fff;
    font-weight: bold;
  }
`;

export const Overview = styled.p`
  font-size: 1.1rem;
  color: #e5e5e5;
  line-height: 1.7;
  max-width: 90%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: 2px solid #ff6600;
  color: #ff6600;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6600;
    color: #fff;
  }

  @media (max-width: 900px) {
    align-self: center;
  }
`;

export const TrailerSection = styled.section`
  margin: 4rem auto 2rem;
  padding: 2rem 3rem;
  background-color: #1c1c1c;
  border-radius: 12px;
  color: white;
  max-width: 1200px;

  h3 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #fff;
    border-bottom: 3px solid #ff6600;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  div {
    margin-bottom: 3rem;
  }

  h4 {
    font-size: 1.3rem;
    margin: 0.5rem 0 1rem;
    color: #e5e5e5;
  }

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
  }

  button {
    background: transparent;
    border: 2px solid #ff6600;
    color: #ff6600;
    padding: 0.5rem 1.3rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff6600;
      color: white;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;

    iframe {
      height: 220px;
    }
  }
`;
