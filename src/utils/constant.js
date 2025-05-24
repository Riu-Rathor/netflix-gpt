export const LOGIN_BACKGROUND_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/81743211?v=4";

export const API_KEY = process.env.REACT_APP_API_KEY;

export const API_ACCESS_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN;
  

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};

export const MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";

export const VIDEO_BASE_URL = "https://api.themoviedb.org/3";

export const MOVIE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  

export const OPENAI_MODEL = "gpt-3.5-turbo";
export const GEMINI_MODEL = "gemini-2.0-flash";

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
