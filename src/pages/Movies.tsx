
import { popular, now_playing, upcoming,airing_today } from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 
import { PageContainer } from '../styles/Pages.modules';


const Movies = () => {
  const chooseWhatToDisplay: ItemCatagory[] = [
    createDisplayItems(popular, 'Popular Movies'),
    createDisplayItems(now_playing, 'Now Playing'),
    createDisplayItems(upcoming, 'Upcoming Movies'),
    createDisplayItems(airing_today, 'Airing Today')
  ];

  return (
    <PageContainer>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </PageContainer>
  );
};

export default Movies
