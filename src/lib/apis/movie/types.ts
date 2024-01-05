export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string
  budget: number
  genres: {
    id: number,
    name: string
  }[];
  homepage: string
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: number;
  popularity: string;
  poster_path: string;
  production_companies: {
    iso_3166_1: string
    name: string
  }[];
  production_countries: {
    name: string
  }[]
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  videos: {
    results: {
      iso_639_1: string,
      iso_3166_1: string,
      name: string,
      key: string,
      site: string,
      size: number,
      type: string,
      official: true,
      published_at: string,
      id: string

    }[]
  }
  vote_average: number
  vote_count: number
}