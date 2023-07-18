import axios from 'axios';

const queryStrings = {
    app_id: process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}

export const getRecipes = async () => {
   try {
	const response = await axios.get("http://localhost:3002/recipes");
	console.log(response.data);
} catch (error) {
	console.error(error);
}
 
}