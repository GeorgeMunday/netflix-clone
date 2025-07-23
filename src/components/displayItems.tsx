// DisplayItems.tsx
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

interface DisplayItemsProps {
  displayItemsTags: ItemCatagory[];
}

interface CategorySectionProps {
  apiEndpoint: string;
  itemsHeading: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ apiEndpoint, itemsHeading }) => {
  const [apiData, setApiData] = useState<DataTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setApiData(response.data.results.slice(0, 20)); // Limit to 10 items for display
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
          <ItemCard key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
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
  return (
    <Wrapper>
      {displayItemsTags.map((item, index) => (
        <CategorySection
          key={index}
          apiEndpoint={item.apiEndpoint}
          itemsHeading={item.itemHeading}
        />
      ))}
    </Wrapper>
  );
};

export default DisplayItems;
