import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { type DataTypes, type Trailer, type TrailerResponse } from '../modules/types_files';
import { PageContainer } from '../styles/Pages.modules';
import { apiKey } from '../modules/ApiLinks';
import {
  ItemWrapper,
  ImageSection,
  InfoSection,
  BackButton,
  Title,
  Rating,
  Overview,
  TrailerSection,
} from '../styles/Information.modules';

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<DataTypes | null>(null);
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        setItem(response.data);
      } catch (error) {
        console.error('Failed to fetch item:', error);
      }
    };

    const fetchTrailers = async () => {
      try {
        const response = await axios.get<TrailerResponse>(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
        );
        const officialTrailers = response.data.results.filter(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailers(officialTrailers);
      } catch (error) {
        console.error('Failed to fetch trailers:', error);
      }
    };

    if (id) {
      fetchItem();
      fetchTrailers();
    }
  }, [id]);

  if (!item) return <p>Loading...</p>;

  const visibleTrailers = showAll ? trailers : trailers.slice(0, 2);

  return (
    <PageContainer>
      <ItemWrapper>
        <ImageSection>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title || item.name}
          />
        </ImageSection>

        <InfoSection>
          <BackButton onClick={() => navigate(-1)}>←</BackButton>
          <Title>{item.title || item.name}</Title>
          <Rating><strong>Rating:</strong> {item.vote_average.toFixed(1)}</Rating>
          <Overview>{item.overview}</Overview>
          
        </InfoSection>
      </ItemWrapper>
    </PageContainer>
  );
};

export default ItemPage;
