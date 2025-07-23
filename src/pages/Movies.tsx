
import { popular, now_playing, upcoming} from '../modules/ApiLinks';
import { createDisplayItems, type ItemCatagory } from '../modules/types_files';
import DisplayItems from '../components/displayItems'; 
import { PageContainer } from '../styles/Pages.modules';


const Movies = () => {
  const chooseWhatToDisplay: ItemCatagory[] = [
    createDisplayItems(popular, 'Popular Movies'),
    createDisplayItems(now_playing, 'Now Playing'),
    createDisplayItems(upcoming, 'Upcoming Movies')
  ];

  return (
    <PageContainer>
      <DisplayItems displayItemsTags={chooseWhatToDisplay} />
    </PageContainer>
  );
};

export default Movies
