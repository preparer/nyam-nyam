import React from "react";
import eldana from "../../assets/neww-prjct.svg";
import s from "./AboutUs.module.scss";

function AboutUs() {
  return (
    <div className={s.container}>
      <div>
        <img className={s.neww_prjct} src={eldana} alt="" />
      </div>
      <section>
        <h1 className={s.about_us}>About Us</h1>
        <p className={s.title}>
          Welcome to [préparer] – your culinary companion on a journey of
          flavors and creativity. At [préparer], we're passionate about bringing
          the joy of cooking and sharing delicious meals to your fingertips.
        </p>
        <div>
          <h2 className={s.title_header}>Our Story:</h2>
          <p className={s.title_story}>
            [préparer] was born out of a love for good food and the desire to
            make cooking an enjoyable experience for everyone, from aspiring
            home chefs to seasoned culinary experts. We believe that cooking is
            an art, a science, and a way to express love and care for oneself
            and others. Our platform is a celebration of diverse cuisines,
            culinary traditions, and the joy of bringing people together around
            the dining table.
          </p>
        </div>
      </section>

      <section className={s.section2}>
        <div>
          <h2 className={s.text_mission}>Our Mission:</h2>
          <p className={s.title_mission}>
            Our mission is to inspire and empower you to create extraordinary
            dishes in the comfort of your kitchen. We provide a curated
            collection of mouthwatering recipes, cooking tips, and interactive
            features to ignite your creativity and elevate your culinary skills.
            Whether you're looking to master the basics or embark on a gourmet
            adventure, [préparer] is here to guide you every step of the way.
          </p>
        </div>

        <div>
          <h2 className={s.text_aparat}>What Sets Us Apart:</h2>
          <p className={s.title_aparat}>
            Diverse Recipes: Our platform boasts an extensive range of recipes
            spanning various cuisines, dietary preferences, and skill levels,
            ensuring there's something for everyone. User-Friendly Interface:
            We've designed our app with you in mind, offering an intuitive and
            seamless experience that makes browsing, cooking, and sharing
            recipes a breeze. Interactive Cooking: Dive into the culinary
            process with interactive features that guide you through each
            recipe, helping you learn essential techniques and tricks along the
            way. Community & Sharing: Connect with fellow food enthusiasts,
            share your culinary creations, and discover new ways to tantalize
            taste buds together.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
