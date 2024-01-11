import { ReactNode, createContext, useContext, useState } from "react";

interface favorite {
  image: string;
  title: string;
}

interface favoriteState {
  favorites: favorite[];
  addFavorite: (data: favorite) => void;
  deleteFavoriteByTitle: (title: string) => void;
}
interface favoriteProps {
  children: ReactNode;
}
const initialState: favoriteState = {
  favorites: [],
  addFavorite: () => {},
  deleteFavoriteByTitle: () => {},
};

const FavoriteContext = createContext<favoriteState>(initialState);

export const FavoriteProvider = ({ children }: Readonly<favoriteProps>) => {
  const [favorites, setFavorites] = useState<favorite[]>([]);
  const addFavorite = (data: favorite) => {
    const checkDuplicate = favorites.find((value) => value.title === data.title);
    if (!checkDuplicate) {
      setFavorites([...favorites, data]);
    } else {
      return `${data.title} is already listed in favorites`;
    }
  };
  const deleteFavoriteByTitle = (title: string) => {
    const filterData = favorites.filter((value) => value.title !== title);
    setFavorites(filterData);
  };
  const contextValue = {
    favorites,
    addFavorite,
    deleteFavoriteByTitle,
  };
  return <FavoriteContext.Provider value={contextValue}>{children}</FavoriteContext.Provider>;
};

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteContext);
  return context;
};
