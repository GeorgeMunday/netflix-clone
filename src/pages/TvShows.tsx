
import {trendingShows, popularShows} from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 

const chooseWhatToDisplay: ItemCatagory[] = [
  createDisplayItems(trendingShows, 'Trending Shows'),
  createDisplayItems(popularShows, 'Popular Shows'),
];



const TvShows = () => {
  return (
    <DisplayItems displayItemsTags={chooseWhatToDisplay} />
  )
}

export default TvShows
