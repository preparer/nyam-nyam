import "./App.css";
import Header from "./Components/Layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Categories from "./Pages/Categories/Categories";
import RecipeItem from './Components/RecipeItem/RecipeItem';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes> 
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/recipes/:id' element={<RecipeItem />} />
      </Routes>
    </div>
  );
}

export default App;