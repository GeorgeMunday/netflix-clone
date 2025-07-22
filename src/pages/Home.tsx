import React from 'react';
import { popular, now_playing, upcoming, trendingShows, popularShows, airing_today } from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 

const Home = () => {
  const chooseWhatToDisplay: ItemCatagory[] = [
    createDisplayItems(popular, 'Popular Movies'),
    createDisplayItems(now_playing, 'Now Playing'),
    createDisplayItems(upcoming, 'Upcoming Movies'),
    createDisplayItems(trendingShows, 'Trending Shows'),
    createDisplayItems(popularShows, 'Popular Shows'),
    createDisplayItems(airing_today, 'Airing Today')
  ];

  return (
    <>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </>
  );
};

export default Home;
