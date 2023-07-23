import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import { fetchData, getRecipes } from '../../service';
import { Link } from 'react-router-dom';
import s from './RecipesList.module.scss'

function RecipeLists() {
    const [searchedTeam, setSearchedTeam] = useState('')
    const [query, setQuery] = useState('pizza')
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchTabData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/recipes`)
                const data = await response.json()
                setData(data)
            }
            catch (e) {
                console.log(e, 'something went wrong');
            }
        }

        fetchTabData()
    }, [])
    console.log(data);
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input type="text" placeholder='Search'  />
                <button ><BsSearch /></button>
       </div>
       </div>  
          <div className={s.all}>
 {
            data?.map(recipe => (
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                    <div className={s.all}>
                     <div className={s.card}>
                    <p className={s.title}>{recipe?.title}</p>
                    <img src={recipe?.img} alt="image" />
                    </div>    
                    </div>
                </Link>
            ))
        }
          </div>
       
    </div>
  )
}

export default RecipeLists