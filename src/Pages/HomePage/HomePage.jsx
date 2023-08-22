import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import back from "../../assets/orange.svg";
import soup from '../../assets/soup1.svg'
import pancakes from '../../assets/pancakes.svg'
import salad from '../../assets/salad.svg'
import s from "./Home.module.scss";

function HomePage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>

        <img src={back} alt="" className={s.back} />
        <div className={`${s.animatedComponent} ${show ? s.fadeIn : ''}`}>
        <h1>Unearth fresh epicurean delights.</h1>
      </div>
      <div>
        <section>
        <div className="section2">
          <h2 className={s.find}>Find your best recipe!</h2>
          <Link to="/search">
            <input type="text" placeholder="Search" className={s.search_link} />
          </Link>
        </div>
        </section>


      <section>
        <div className={`${s.section3} ${s.animateSection ? s.animateIn : ''}`}>
          <h2 className={s.categories}>
            Popular Categories
            </h2>
          <div className={s.cards}>
            <div className={s.card}>
            <div className={s.card__title}>
                Soups
                </div>
                <div className={s.card__subtitle}>
                Perfect for a cozy night in
                </div>
                <div className={s.card__categories}>
                Tomato, Chicken Noodle
              </div>
              
              <div className={s.card__footer}>
                <a href="#" className={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={soup} alt="" className={s.soup}/>
            </div>

            <div className={s.card2}>
            <div className={s.card__title}>
                Desserts
                </div>
                <div className={s.card__subtitle}>
                The sweetest things in life
                </div>
                <div className={s.card__categories}>
                Cake, Ice Cream, Brownies
                </div>
              <div className={s.card__footer}>
                <a href="#" className={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={pancakes} alt="" className={s.pan}/>
            </div>

            <div className={s.card2}>
            <div className={s.card__title}>
                Vegeterian
                </div>
                <div className={s.card__subtitle}>
                Healthy lifestyle
                </div>
                <div className={s.card__categories}>
                Salads, healthy food
                </div>
              <div className={s.card__footer}>
                <a href="#" className={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={salad} alt="" className={s.salad}/>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
