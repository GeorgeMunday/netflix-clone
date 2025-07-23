
import {trendingShows, popularShows , airing_today} from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 
import { PageContainer } from '../styles/Pages.modules';

const chooseWhatToDisplay: ItemCatagory[] = [
  createDisplayItems(trendingShows, 'Trending Shows'),
  createDisplayItems(popularShows, 'Popular Shows'),
  createDisplayItems(airing_today, 'Airing Today')
];



const TvShows = () => {
  return (
    <PageContainer>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </PageContainer>
  )
}

export default TvShows
