
import {trendingShows, popularShows} from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 
import { PageContainer } from '../styles/Pages.modules';

const chooseWhatToDisplay: ItemCatagory[] = [
  createDisplayItems(trendingShows, 'Trending Shows'),
  createDisplayItems(popularShows, 'Popular Shows'),
];



const TvShows = () => {
  return (
    <PageContainer>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </PageContainer>
  )
}

export default TvShows
