
import {trendingShows, popularShows , airing_today} from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 
import { PageContainer } from '../styles/Pages.modules';
import Navbar from '../components/Navbar';

const chooseWhatToDisplay: ItemCatagory[] = [
  createDisplayItems(trendingShows, 'Trending Shows'),
  createDisplayItems(popularShows, 'Popular Shows'),
  createDisplayItems(airing_today, 'Airing Today')
];



const TvShows = () => {
  return (
    <>
    <Navbar/>
    <PageContainer>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </PageContainer>
    </>
  )
}

export default TvShows
