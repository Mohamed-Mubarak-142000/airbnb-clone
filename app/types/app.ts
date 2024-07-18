export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type LiveItem = {
  img: string;
  title: string;
};

export type SearchResultItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export type SearchResultData = SearchResultItem[];

export type LiveData = LiveItem[];

export type ExploreData = ExploreItem[];
