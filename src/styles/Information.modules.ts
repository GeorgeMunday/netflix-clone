import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  margin: 2rem 0;
  color: white;
`;

export const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const InfoSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  color: white;
`;

export const BackButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-size: 1rem;
  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const Rating = styled.p`
  font-size: 1.2rem;
  strong {
    font-weight: bold;
  }
`;

export const Overview = styled.p`
  line-height: 1.6;
  max-width: 600px;
  color: #eaeaea;
`;

export const TrailerSection = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  iframe {
    margin-top: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  }
`;
