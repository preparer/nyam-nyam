import React, { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./RecipesList.module.scss";
import { useAppContext } from "../context/appContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function RecipeLists() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState("");

  const { favorites, AddToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((recipes) => recipes.id === id);
    return boolean;
  };

  useEffect(() => {
    const fetchTabData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/recipes`);
        const recipes = await response.json();
        setRecipes(recipes);
      } catch (e) {
        console.log(e, "something went wrong");
      }
    };
    fetchTabData();
  }, []);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(value.toLowerCase());
    });
  }, [recipes, value]);

  return (
    <div className="container">
      <div className="heading-line">
        <div className={s.input_wrapper}>
          <input
          type="search"
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className={s.all}>
        {filteredRecipes.map((recipe) => (
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
                <AiFillHeart className={s.icon} size={25} />
              </button>
            ) : (
              <button
                className={s.save_button}
                onClick={() => AddToFavorites(recipe)}
              >
                <AiOutlineHeart className={s.icon} size={25} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeLists;
