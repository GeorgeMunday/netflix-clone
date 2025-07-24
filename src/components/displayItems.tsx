import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type ItemCatagory, type DataTypes } from '../modules/types_files';
import {
  Wrapper,
  Section,
  Heading,
  ItemsContainer,
  ItemCard,
} from '../styles/displayItems.modules';
import fallbackImage from '../assets/no-result.png';
import { useNavigate } from 'react-router-dom';

interface DisplayItemsProps {
  displayItemsTags: ItemCatagory[];
}

interface CategorySectionProps {
  apiEndpoint: string;
  itemsHeading: string;
  onItemClick: (item: DataTypes) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  apiEndpoint,
  itemsHeading,
  onItemClick,
}) => {
  const [apiData, setApiData] = useState<DataTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setApiData(response.data.results.slice(0, 20)); // Limit to 20 items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <Section>
      <Heading>{itemsHeading}</Heading>
      <ItemsContainer>
        {apiData.map((item) => (
          <ItemCard key={item.id} onClick={() => onItemClick(item)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
                e.currentTarget.onerror = null;
              }}
            />
            <h3>{item.title || item.name}</h3>
            <span>Rating {item.vote_average.toFixed(1)}</span>
          </ItemCard>
        ))}
      </ItemsContainer>
    </Section>
  );
};

const DisplayItems: React.FC<DisplayItemsProps> = ({ displayItemsTags }) => {
  const navigate = useNavigate();

  const handleItemClick = (item: DataTypes) => {
    navigate(`/item/${item.id}`);
  };

  return (
    <Wrapper>
      {displayItemsTags.map((item, index) => (
        <CategorySection
          key={index}
          apiEndpoint={item.apiEndpoint}
          itemsHeading={item.itemHeading}
          onItemClick={handleItemClick}
        />
      ))}
    </Wrapper>
  );
};

export default DisplayItems;
