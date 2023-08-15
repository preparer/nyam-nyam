import React from 'react';
import { Link } from 'react-router-dom';
// import soup from '../../assets/soup-svg.svg'
import s from './Home.module.scss'

function HomePage() {
    return (
        <>
        <div>
           {/* <img src={soup} alt="" className={s.soup} /> */}
           <h1>Unearth fresh epicurean delights.</h1>
        </div>
        <div>
            <h2 className={s.find}>Find your best recipe!</h2>
        {/* <Link to="/search">
        <input type="text" placeholder='Search' className={s.search_link} />
        </Link> */}
        </div>
        </>
    );
}

export default HomePage;