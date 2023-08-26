import React from "react";
import partners from "../../assets/partners.jpg";
import line from "../../assets/DASH-YbNNe93ZWzt7Jwxo.svg";
import whiteline from "../../assets/whiteline.svg";
import tasty from "../../assets/tasty.webp";
import bonAppetite from '../../assets/ba.jpg'
import blackLine from '../../assets/black-line.svg'
import jamie from '../../assets/jamie-oliver.jpg'
import s from "./Partners.module.scss";

function Partners() {
  return (
    <div>
      <h3 className={s.partners}>Our Partners</h3>
      <img src={line} alt="" className={s.line} />
      <p className={s.work}>
        We work with the best specialists in the field to ensure the best
        quality for our recipes.
      </p>
      <img src={partners} alt="" className={s.girls} />

      <section className={s.section1}>
        <div className={s.back_1}>
          <div className={s.side1}>
            <h3 className={s.tasty}>
                Tasty
                </h3>
            <p className={s.tasty_des1}>
              Tasty, a division of BuzzFeed, revolutionized online cooking
              content with its visually engaging approach. Famed for short
              recipe videos, Tasty offers step-by-step instructions and close-up
              shots that make cooking accessible and entertaining. The platform
              covers diverse cuisines, from comfort food to international
              dishes, encouraging experimentation.
            </p>
            <p className={s.tasty_des2}>
              Its impact extends beyond videos, including cookbooks and kitchen
              gadgets. Tasty's influence is seen in the widespread adoption of
              its visual style, reshaping how we engage with cooking content
              globally.
            </p>
            <img src={whiteline} alt="" className={s.whiteline} />
          </div>

          <img src={tasty} alt="" className={s.tasty_img}/>
        </div>
      </section>

      <section className={s.section1}>
        <div className={s.back2}>
        <img src={bonAppetite} alt="" className={s.bon_img}/>
          <div className={s.side2}>
            <h3 className={s.bon_appetit}>
            Bon Appétit
                </h3>
            <p className={s.bon_des1}>
            Bon Appétit gained fame through its YouTube channel, where magazine editors and chefs created captivating cooking videos. With a focus on education and entertainment, hosts showcased recipes and techniques in an approachable manner. 
            </p>
            <p className={s.bon_des2}>
            The channel's engaging dynamic and charismatic presenters, like Claire Saffitz, garnered a devoted following. However, the brand also faced controversies and staff departures that impacted its reputation. Despite this, Bon Appétit's impact on modern cooking content and its role in popularizing culinary exploration remains significant.
            </p>
            <img src={blackLine} alt="" className={s.blackline} />
          </div> 
        </div>
      </section>

      <section className={s.section1}>
        <div className={s.back_3}>
          <div className={s.side1}>
            <h3 className={s.tasty}>
            Jamie Oliver 
                </h3>
            <p className={s.tasty_des1}>
            Jamie Oliver, a renowned British chef, rose to fame through his TV shows and cookbooks that emphasize simple, healthy recipes. He became a household name with his approachable style and passion for promoting nutritious eating. Oliver's advocacy efforts led to initiatives like improving school meals and addressing childhood obesity.
            </p>
            <p className={s.tasty_des2}>
            His YouTube channel and various TV programs further expanded his global reach. While praised for his culinary influence, Oliver also faced criticism for certain aspects of his campaigns and approaches to food policy. Overall, he remains a prominent figure in the culinary world, known for his commitment to making cooking accessible and enjoyable for everyone.
            </p>
            <img src={whiteline} alt="" className={s.whiteline2} />
          </div>

          <img src={jamie} alt="" className={s.jamie_img}/>
        </div>
      </section>
    </div>
  );
}

export default Partners;
