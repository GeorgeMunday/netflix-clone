// Add to your existing styled-components file
import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  margin: 4rem 2rem;
  background-color: #141414;
  padding: 2rem;
  border-radius: 10px;
  color: white;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 1.2rem;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  margin: 0;
`;

export const Rating = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin: 0;

  strong {
    color: white;
    font-weight: bold;
  }
`;

export const Overview = styled.p`
  font-size: 1.1rem;
  color: #e5e5e5;
  line-height: 1.6;
  max-width: 100%;
`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid #e50914;
  color: #e50914;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  align-self: flex-end;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e50914;
    color: white;
  }
`;

export const TrailerSection = styled.section`
  margin: 3rem 2rem;
  padding: 2rem;
  background-color: #1c1c1c;
  border-radius: 10px;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #fff;
    border-bottom: 2px solid #e50914;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  div {
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.8rem;
    color: #e5e5e5;
  }

  iframe {
    width: 100%;
    height: 360px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  }

  button {
    margin-top: 1rem;
  }
`;
