export interface DataTypes {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    media_type: string;
}

export interface Trailer {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface TrailerResponse {
  id: number;
  results: Trailer[];
}



export interface ItemCatagory {
    apiEndpoint: string;
    itemHeading: string;
}



export const createDisplayItems = (apiEndpoint: string, itemHeading: string) : ItemCatagory => {
    return {
      apiEndpoint : `${apiEndpoint}`,
      itemHeading,
    };
  }