import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type ItemCatagory, type DataTypes } from '../modules/types_files';

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
        setApiData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div>
      <h2>{itemsHeading}</h2>
      <div className="items-container">
        {apiData.map((item) => (
          <div key={item.id} className="item-card">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
            <h3>{item.title || item.name}</h3>
            <span>Rating: {item.vote_average.toFixed(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DisplayItems: React.FC<DisplayItemsProps> = ({ displayItemsTags }) => {
  return (
    <div>
      {displayItemsTags.map((item, index) => (
        <CategorySection
          key={index}
          apiEndpoint={item.apiEndpoint}
          itemsHeading={item.itemHeading}
        />
      ))}
    </div>
  );
};

export default DisplayItems;
