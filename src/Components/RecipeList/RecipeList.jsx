import React, { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./RecipesList.module.scss";

function RecipeLists() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState("");

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
    return recipes.filter(recipe => { 
      return recipe
      .title
      .toLowerCase() 
      .includes(value.toLowerCase()); 
    });
  }, [recipes, value]);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search</strong>
        <div className="input-wrapper">
          <input
            type="search"
            placeholder="Search"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className={s.all}>
        {filteredRecipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <div className={s.all}>
              <div className={s.card}>
                <p className={s.title}>{recipe.title}</p>
                <img src={recipe.img} alt="image" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeLists;
