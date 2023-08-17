import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/orange_auto_x2_colored_toned_light_ai.jpg'
import s from './Home.module.scss'

function HomePage() {
    return (
        <> 
        <div>
           <img src={back} alt="" className={s.soup} />
           <h1>Unearth fresh epicurean delights.</h1>
        </div>
        <div>
            {/* <h2 className={s.find}>Find your best recipe!</h2> */}
        {/* <Link to="/search">
        <input type="text" placeholder='Search' className={s.search_link} />
        </Link> */}
        </div>
        </>
    );
}

export default HomePage;