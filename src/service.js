import axios from 'axios';

export const getRecipes = async () => {
   try {
	const response = await axios.get("http://localhost:3002/recipes");
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}