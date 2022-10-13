import { motion } from "framer-motion";
import React from "react";
import "./Community.css";

function Community() {
  return (
    <section className="community">
      {/* creating moviment with motion */}
      <h1 className="meet-h1">MEET OUR </h1>
      <article className="meet">
        <h2>COMMUNITY</h2>
        <button className="button">
          <a href="#"> KNOW MORE</a>
        </button>
        <h6 className="meet-h6">
          LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
          ENTALTO
        </h6>
      </article>

      {/* tacos */}
      <motion.div
        initial="hidden"
        isInView="visible"
        viewport={{ once: false }}
        animate={{ y: -240 }}
        transition={{ type: "spring", duration: 3 }}
        className="tacos"
      >
        <div className="tacos-imgage">
          <figure className="image-space">
            <img
              style={{ width: "222px", height: "221px" }}
              src="/images/tacos.png"
              alt="tacos"
            />
          </figure>
        </div>
        <div className="image-space feed">
          <h3>@buzzfeedfood</h3>
          <p style={{ margin: "0" }}>
            It's taco Tuesday! These tacos from @jesseszewczyk have no added
            sugars and are SO good 🌮. Find the recipe from the link in our bio!
            📸: @taylormillerphoto
          </p>
          <div className="icons-svg">
            <img src="/images/Path 80.svg" alt="comment" />
            <span>60</span>
            <img src="/images/Group 126.svg" alt="heart" />
            <span>14,7K</span>
          </div>
        </div>
        <figure className="detail-01">
          <img src="/images/detail01.png" alt="detail-01" />
        </figure>
        <figure className="detail-02">
          <img src="/images/detail02.png" alt="detail-02" />
        </figure>
      </motion.div>

      {/* wafles */}
      <motion.div
        initial="hidden"
        isInView="visible"
        viewport={{ once: false }}
        animate={{ y: -630 }}
        transition={{ type: "spring", duration: 4 }}
        className="wafles"
      >
        <div className="image-space feed">
          <h3>@love_food</h3>
          <p style={{ margin: "0" }}>
            Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
            dark chocolate with coconut and milk chocolate with peanuts! [📷:
            @foodwithmichel] #lovefood
          </p>
          <div className="icons-svg">
            <img src="/images/Path 80.svg" alt="comment" />
            <span>709</span>
            <img src="/images/Group 126.svg" alt="heart" />
            <span>99,7K</span>
          </div>
        </div>
        <figure className="detail-03">
          <img src="/images/detail03.png" alt="detail-03" />
        </figure>
        <figure className="image-space">
          <img
            style={{ width: "222px", height: "221px" }}
            src="/images/wafles.png"
            alt="wafles"
          />
        </figure>
        <p>
          Amet consectetur adipisicing elit. Enim, minima, illo laudantium ut
          cumque est id voluptate sint Lorem ipsum dolor sit amet consectetur,
          porro blanditiis at odit, voluptatem perspiciatis. Ea qui at ratione
          obcaecati, ab sint veritatis nesciunt.
        </p>
      </motion.div>

      {/* calamari */}
      <div className="calamari">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          repudiandae numquam dolores, sed nulla voluptas consequatur, nostrum
          natus, id aliquam consectetur delectus facere nemo reprehenderit
        </p>

        <div className="image-space feed">
          <h3>@buzzfeedfood</h3>
          <p style={{ margin: "0" }}>
            Getting into long weekend mode like 🍤 #pancitpalabok (📷
            @jeepneynyc)
          </p>
          <div className="icons-svg">
            <img src="/images/Path 80.svg" alt="comment" />
            <span>152</span>
            <img src="/images/Group 126.svg" alt="heart" />
            <span>18,2K</span>
          </div>
        </div>
        <figure className="image-space">
          <img
            style={{ width: "222px", height: "221px" }}
            src="/images/calamari.png"
            alt="calamari"
          />
        </figure>
      </div>
    </section>
  );
}

export default Community;
