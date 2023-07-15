import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RecipeItem = () => {
    const router = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchTabData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/recipes`)
                const data = await response.json()
                const recipe = data.filter(recipe => recipe.id == router.id)
                setData(recipe)
            }
            catch (e) {
                console.log(e, 'something went wrong');
            }
        }
        fetchTabData()
    }, [router.id])
    return (
        <>
                    {
            data?.map(recipe => (
                    <div key={recipe.id}>
                    <h1>{recipe?.title}</h1>
                    <p>{recipe?.ingredients}</p>
                    <p>{recipe?.prepare}</p>
                    <a href="https://www.youtube.com/watch?v=sv3TXMSv6Lw&t=430s">Click here to see full video!</a>
                    <img src={recipe?.img} alt="image" />
                    </div>
            ))
        }
        </>
    )
}

export default RecipeItem