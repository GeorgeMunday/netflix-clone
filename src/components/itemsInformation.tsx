// ItemInformation.tsx
import React from 'react';
import { type DataTypes } from '../modules/types_files';
import { InfoWrapper } from '../styles/Information.modules';


interface ItemInformationProps {
  item: DataTypes;
  onClose: () => void;
}



const ItemInformation: React.FC<ItemInformationProps> = ({ item, onClose }) => {
  return (
    <InfoWrapper>
      <button onClick={onClose}>Close</button>
      <h2>{item.title || item.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
      <p><strong>Rating:</strong> {item.vote_average.toFixed(1)}</p>
      <p><strong>Overview:</strong> {item.overview}</p>
      {/* Add more item details as needed */}
    </InfoWrapper>
  );
};

export default ItemInformation;
