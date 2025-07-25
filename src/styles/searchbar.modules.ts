import styled from 'styled-components';

export const SearchContainer = styled.div`
  color: #fff;
  padding: 12px 16px;
  width: fit-content;
  background: #222;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;


  .searchIcon {
    color: #bbb;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    transform: translateY(4px);
  }

  .searchInput {
    background: transparent;
    border: none;
    color: #eee;
    font-size: 1rem;
    width: 200px;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: none;
      color: #fff;
    }
  }

  &:hover .searchIcon {
    color: #e65c00;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  padding: 16px;
`;

export const ItemCard = styled.div`
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;