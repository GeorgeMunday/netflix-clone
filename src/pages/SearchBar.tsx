import { useState, useEffect, type ChangeEvent } from "react";
import LinksBar from "../components/linksBar";
import { PageContainer } from "../styles/Pages.modules";
import { SearchContainer } from "../styles/Navbar.modules";
import { apiKey, baseUrl } from "../modules/ApiLinks";
import DisplayItems from "../components/displayItems";
import { type ItemCatagory } from "../modules/types_files";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [displayItemsTags, setDisplayItemsTags] = useState<ItemCatagory[]>([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 2) {
        const endpoint = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

        setDisplayItemsTags([
          {
            apiEndpoint: endpoint,
            itemHeading: `Search results for "${query}"`,
          },
        ]);
      } else {
        setDisplayItemsTags([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <PageContainer>
      <LinksBar />
      <SearchContainer>
        <div>
          <span className="material-symbols-outlined searchIcon">search</span>
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          />
        </div>
      </SearchContainer>

      {displayItemsTags.length > 0 && (
        <DisplayItems displayItemsTags={displayItemsTags} />
      )}
    </PageContainer>
  );
};

export default SearchBar;
