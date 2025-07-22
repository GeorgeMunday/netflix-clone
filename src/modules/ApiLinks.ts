export const apiKey = "720a10a3f4e512b3d57cac487b631d36"; // Replace with your actual API key from The Movie Database (TMDB)
export const baseUrl = "https://api.themoviedb.org/3";




//*Movies Endpoint
export const popular = `${baseUrl}/movie/popular?api_key=${apiKey}`;
export const upcoming = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
export const now_playing = `${baseUrl}/movie/now_playing?api_key=${apiKey}`;
export const top_rated_movies = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;


//*TV SHOWS Endpoint :-
export const popularShows = `${baseUrl}/tv/popular?api_key=${apiKey}`;
export const trendingShows = `${baseUrl}/trending/tv/week?api_key=${apiKey}`;
export const top_rated_shows = `${baseUrl}/tv/top_rated?api_key=${apiKey}`;
export const airing_today = `${baseUrl}/tv/airing_today?api_key=${apiKey}`;