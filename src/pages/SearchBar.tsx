import LinksBar from "../components/linksBar";
import { PageContainer } from "../styles/Pages.modules";
import { SearchContainer } from "../styles/Navbar.modules";

const SearchBar = () => {
  return (
    <PageContainer>
    <LinksBar/>
    <SearchContainer>
      <div>
        <span className="material-symbols-outlined searchIcon">search</span>
        <input 
        type="text" 
        placeholder="Search..."
        className='searchInput'
                />
     </div>
    </SearchContainer>
    </PageContainer>
  )
};

export default SearchBar;
