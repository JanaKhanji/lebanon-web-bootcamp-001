const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
/*
for movies :: path = "search/movie" 
for genre :: path =  "genre/movie/list"
for trending :: path = "trending/movie/day"
for movie path = "movie/movieId"  and query =''
    https://api.themoviedb.org/3/movie/ {movie_id}/credits?api_key=<<api_key>>&language=en-US
https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
*/

export const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};

export const constructGenreUrl = (query) => {
  return `${TMDB_BASE_URL}/discover/movie?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&language=en-US&with_genres=${query}`;
};

export default { constructUrl, constructGenreUrl };
