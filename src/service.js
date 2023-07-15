import axios from 'axios';

const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}
// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=56a5ac81&app_key=154724cec88c42afb1b71ee4a47cdc95

export const getRecipes = async () => {
   try {
	const response = await axios.get("http://localhost:3002/recipes");
	console.log(response.data);
} catch (error) {
	console.error(error);
}
 
}

export const fetchTabData = async (defaultQuery) => {
    const {app_id,app_key} = queryStrings;
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json()
        return response
    }
    catch (e) {
        console.log(e, 'something went wrong');
        return e
    }
}