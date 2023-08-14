import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Favorites.module.scss";
import { useAppContext } from "../../Components/context/appContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Favorites = () => {
  const [value, setValue] = useState("");
  const { favorites, AddToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((recipe) => recipe.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      <div className={s.all}>
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div className={s.card} key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <img src={recipe.img} alt="image" />
                <p className={s.title}>{recipe.title}</p>
              </Link>
              {favoritesChecker(recipe.id) ? (
                <button
                  className={s.save_button}
                  onClick={() => removeFromFavorites(recipe.id)}
                >
                  <AiFillHeart className={s.icon} size={30} />
                </button>
              ) : (
                <button
                  className={s.save_button}
                  onClick={() => AddToFavorites(recipe)}
                >
                  <AiOutlineHeart className={s.icon} />
                </button>
              )}
            </div>
          ))
        ) : (
          <h1>You don't have any favorites</h1>
        )}
      </div>
    </div>
  );
};

export default Favorites;
