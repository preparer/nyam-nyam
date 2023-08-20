import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/Снимок экрана 2023-08-17 200602.png";
import soup from '../../assets/soup1.svg'
import pancakes from '../../assets/pancakes.svg'
import salad from '../../assets/salad.svg'
import s from "./Home.module.scss";

function HomePage() {
  return (
    <>
      <div>
        <img src={back} alt="" className={s.back} />
        <h1>Unearth fresh epicurean delights.</h1>
      </div>
      <div>
        <div className="section2">
          <h2 className={s.find}>Find your best recipe!</h2>
          <Link to="/search">
            <input type="text" placeholder="Search" className={s.search_link} />
          </Link>
        </div>

        <div className={s.section3}>
          <h2 className={s.categories}>
            Popular Categories
            </h2>
          <div className={s.cards}>
            <div class={s.card}>
            <div class={s.card__title}>
                Soups
                </div>
                <div class={s.card__subtitle}>
                Perfect for a cozy night in
                </div>
                <div class={s.card__categories}>
                Tomato, Chicken Noodle
              </div>
              
              <div class={s.card__footer}>
                <a href="#" class={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={soup} alt="" className={s.soup}/>
            </div>

            <div class={s.card2}>
            <div class={s.card__title}>
                Desserts
                </div>
                <div class={s.card__subtitle}>
                The sweetest things in life
                </div>
                <div class={s.card__categories}>
                Cake, Ice Cream, Brownies
                </div>
              <div class={s.card__footer}>
                <a href="#" class={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={pancakes} alt="" className={s.pan}/>
            </div>

            <div class={s.card2}>
            <div class={s.card__title}>
                Vegeterian
                </div>
                <div class={s.card__subtitle}>
                Healthy lifestyle
                </div>
                <div class={s.card__categories}>
                Salads, healthy food
                </div>
              <div class={s.card__footer}>
                <a href="#" class={s.card__link}>
                  See More &gt;
                </a>
              </div>
              <img src={salad} alt="" className={s.salad}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
