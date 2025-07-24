// src/pages/ItemPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { type DataTypes } from '../modules/types_files';
import { InfoWrapper } from '../styles/Information.modules';
import { apiKey } from '../modules/ApiLinks';
import LinksBar from './linksBar'

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<DataTypes | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // You may need to adjust this endpoint to match your API
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        setItem(response.data);
      } catch (error) {
        console.error('Failed to fetch item:', error);
      }
    };

    if (id) fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <InfoWrapper>
      <LinksBar/>
      <h2>{item.title || item.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title || item.name}
      />
      <p><strong>Rating:</strong> {item.vote_average.toFixed(1)}</p>
      <p><strong>Overview:</strong> {item.overview}</p>
    </InfoWrapper>
  );
};

export default ItemPage;
