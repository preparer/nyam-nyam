import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContextProvider!");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const AddToFavorites = (recipes) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(recipes);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((recipes) => recipes.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{ favorites, AddToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
