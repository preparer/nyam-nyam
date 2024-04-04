import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./RecipeItem.module.scss";

const RecipeItem = () => {
  const router = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTabData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/recipes`);
        const data = await response.json();
        const recipe = data.filter((recipe) => recipe.id == router.id);
        setData(recipe);
      } catch (e) {
        console.log(e, "something went wrong");
      }
    };
    fetchTabData();
  }, [router.id]);
  return (
    <>
      {data?.map((recipe) => (
        <div className={s.blocks} key={recipe.id}>
          <div className="flex">
            <h2 className={s.title}>{recipe?.title}</h2>
            <span>Ingredients:</span>
            <p className={s.ingredients}>{recipe?.ingredients}</p>
            <p className={s.prepare}>{recipe?.prepare}</p>
          </div>
          <div>
            <img className={s.food} src={recipe?.img} alt="image" />
          </div>
        </div>
      ))}
    </>
  );
};

export default RecipeItem;
