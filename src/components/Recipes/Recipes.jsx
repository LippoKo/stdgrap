import React from "react";
import "./Recipes.css";

function Recipes() {
  return (
    <section id="popular-recipes">
      <div className="recipes-head">
        <h3 className="recipes-h3">POPULAR</h3>

        {/* article 01 */}
        <article className="article-01">
          <div className="recipes-title">
            <h1 className="recipes-h1">RECIPES</h1>
          </div>
          <button className="button">
            <a href="#">SEE ALL</a>
          </button>
        </article>

        {/* article 02 */}
        <article className="article-02">
          <h4 className="recipes-h4">DO YOU WANT TO SHARE YOUR OWN RECIPE?</h4>
          <button className="button">
            <a href="#">SEND IT NOW</a>
          </button>
        </article>
      </div>

      {/* Chefe stamp */}
      <div className="chef-charred">
        <img src="/images/chef-stamp.png" alt="chefe-choice" />
      </div>

      <div className="chef-cheese">
        <img src="/images/chef-stamp.png" alt="chefe-choice" />
      </div>

      {/* bottom arrows */}
      <div className="back-image">
        <img src="/images/back.png" alt="back" />
      </div>

      <div className="next-image">
        <img src="/images/next.png" alt="next" />
      </div>

      {/* Block Recipes */}
      <div className="block-recipes">
        {/* Charred */}
        <div className="charred">
          <div className="charred-image">
            <figure className="main-image">
              <img
                style={{ width: "370px", heigth: "370px" }}
                src="/images/charred.jpg"
                alt="charred"
              />
            </figure>

            <div className="topLeft-image">
              <h3>4</h3>
              <h4>SERVINGS</h4>
            </div>

            <figure className="bottom-image">
              <img
                style={{ width: "60px", heigth: "60px" }}
                src="/images/go-btn.png"
                alt="button"
              />
            </figure>
          </div>

          <div className="charred-info">
            <h5>DIFFICULTY</h5>
            <h3>CHARRED BROCCOLI & CHEAT'S VEGGIE ROMESCO TOAST</h3>
            <p>
              Make a speedy version of romesco sauce with its famous almond and
              red pepper flavours. Serve on sourdough and add broccoli for a
              colourful, veget…
            </p>
          </div>
          <h5 className="bottom-info-charred">USER FULL NAME</h5>
        </div>

        {/* Pineapple */}
        <div className="pineapple">
          <div className="pineapple-image">
            <figure className="main-image">
              <img
                style={{ width: "240px", heigth: "240px" }}
                src="/images/pineapple.jpg"
                alt="pineapple"
              />
            </figure>

            <div className="topLeft-pineapple">
              <h3>2</h3>
              <h4>SERVINGS</h4>
            </div>

            <figure className="bottom-image">
              <img
                style={{ width: "60px", heigth: "60px" }}
                src="/images/go-btn.png"
                alt="button"
              />
            </figure>
          </div>

          <div className="pineapple-info">
            <h5>DIFFICULTY</h5>
            <h3>PINEAPPLE FRUIT SALAD WITH FRESH CREAM</h3>
            <p>
              The pineapple juice is the star of the dressing and what gives it
              such a refreshing and sweet taste. Pineapple juice is kno
            </p>
          </div>
          <h5 className="bottom-info-pineapple">USER FULL NAME</h5>
        </div>

        {/* Cheese */}
        <div className="cheese">
          <div className="cheese-image">
            <figure className="main-image">
              <img
                style={{ width: "240px", heigth: "240px" }}
                src="/images/base-240.png"
                alt="cheese"
              />
            </figure>

            <div className="topLeft-cheese">
              <h3>2</h3>
              <h4>SERVINGS</h4>
            </div>

            <figure className="bottom-image">
              <img
                style={{ width: "60px", heigth: "60px" }}
                src="/images/go-btn.png"
                alt="button"
              />
            </figure>
          </div>

          <div className="cheese-info">
            <h5>DIFFICULTY</h5>
            <h3>CHEESE, SPINACH & MUSHROOM STUFFED CHI...</h3>
            <p>
              Amp up this dinner party classic by stuffing three types of
              cheese, spinach and mushroom into the chicken...
            </p>
          </div>
          <h5 className="bottom-info-cheese">USER FULL NAME</h5>
        </div>

        {/* feta */}
        <div className="feta">
          <div className="feta-image">
            <figure className="main-image">
              <img
                style={{ width: "240px", heigth: "240px" }}
                src="/images/fetaa.jpg"
                alt="feta"
              />
            </figure>

            <div className="topLeft-feta">
              <h3>8</h3>
              <h4>SERVINGS</h4>
            </div>

            <figure className="bottom-image">
              <img
                style={{ width: "60px", heigth: "60px" }}
                src="/images/go-btn.png"
                alt="button"
              />
            </figure>
          </div>

          <div className="feta-info">
            <h5>DIFFICULTY</h5>
            <h3>FETA AND PEACH COUSCOUS</h3>
            <p>
              Grab just four ingredients to make this easy, light lunch and
              enjoy a taste of summer. The combination of peaches, feta...
            </p>
          </div>
          <h5 className="bottom-info-feta">USER FULL NAME</h5>
        </div>

        {/* shrimp */}
        <div className="shrimp">
          <div className="shrimp-image">
            <figure className="main-image">
              <img
                style={{ width: "240px", heigth: "240px" }}
                src="/images/base-240.png"
                alt="shrimp"
              />
            </figure>

            <div className="topLeft-shrimp">
              <h3>4</h3>
              <h4>SERVINGS</h4>
            </div>

            <figure className="bottom-image">
              <img
                style={{ width: "60px", heigth: "60px" }}
                src="/images/go-btn.png"
                alt="button"
              />
            </figure>
          </div>

          <div className="shrimp-info">
            <h5>DIFFICULTY</h5>
            <h3>SHEET PAN SHRIMP BOIL</h3>
            <p>
              All the flavors and ingredients that make a seafood boil so
              good—hello, Old Bay!—cooked on a sheet pan to make life just a
              little easier.
            </p>
          </div>
          <h5 className="bottom-info-shrimp">USER FULL NAME</h5>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
