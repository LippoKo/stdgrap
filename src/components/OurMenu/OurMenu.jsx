import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./OurMenu.css";

function OurMenu() {
  const [menu, setMenu] = useState(null);

  // call to API
  const getMenu = async () => {
    try {
      let response = await axios.get(
        "https://studiographene-exercise-api.herokuapp.com/foods"
      );

      setMenu(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      {menu && (
        <div id="our-menu">
          <article className="article-menu">
            <h1 className="menu-title">OUR MENU</h1>
            <button className="button">
              <a href="#"> KNOW MORE</a>
            </button>
          </article>

          {/* dishes */}
          <section className="dishes">
            {/* Starters */}
            <motion.div
              initial={{ y: 400 }}
              animate={{ y: 0, x: 0 }}
              whileInView="visible"
              transition={{ type: "just", duration: 3 }}
              className="starters"
            >
              <h1>STARTERS</h1>
              <div className="each-dish">
                <h4>{menu[0].title.toUpperCase()}</h4>
                <p>{menu[0].description}</p>
                <div className="price">
                  <h5>£{menu[0].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[1].title.toUpperCase()}</h4>
                <p>{menu[1].description}</p>
                <div className="price">
                  <h5>£{menu[1].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[2].title.toUpperCase()}</h4>
                <p>{menu[2].description}</p>
                <div className="price">
                  <h5>£{menu[2].price}</h5>
                </div>
              </div>
            </motion.div>

            {/* Main Courses */}
            <motion.div
              initial={{ y: -500, x: 0 }}
              animate={{ y: 0, x: 0 }}
              whileInView="visible"
              transition={{ type: "just", duration: 3 }}
              className="main-courses"
            >
              <h1>
                MAIN <br />
                COURSES
              </h1>
              <div className="each-dish">
                <h4>{menu[3].title.toUpperCase()}</h4>
                <p>{menu[3].description}</p>
                <div className="price">
                  <h5>£{menu[3].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[4].title.toUpperCase()}</h4>
                <p>{menu[4].description}</p>
                <div className="price">
                  <h5>£{menu[4].price}</h5>
                </div>
              </div>
            </motion.div>

            {/* Sides */}
            <motion.div
              initial={{ y: 400 }}
              animate={{ y: 0, x: 0 }}
              whileInView="visible"
              transition={{ type: "just", duration: 3 }}
              className="sides"
            >
              <h1>SIDES</h1>
              <div className="each-dish">
                <h4>{menu[5].title.toUpperCase()}</h4>
                <p>{menu[5].description}</p>
                <div className="price">
                  <h5>£{menu[5].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[6].title.toUpperCase()}</h4>
                <p>{menu[6].description}</p>
                <div className="price">
                  <h5>£{menu[6].price}</h5>
                </div>
              </div>
            </motion.div>

            {/* Desserts */}
            <motion.div
              initial={{ y: -500 }}
              animate={{ y: 0, x: 0 }}
              whileInView="visible"
              transition={{ type: "just", duration: 3 }}
              className="desserts"
            >
              <h1>DESSERTS</h1>
              <div className="each-dish">
                <h4>{menu[7].title.toUpperCase()}</h4>
                <p>{menu[7].description}</p>
                <div className="price">
                  <h5>£{menu[7].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[8].title.toUpperCase()}</h4>
                <p>{menu[8].description}</p>
                <div className="price">
                  <h5>£{menu[8].price}</h5>
                </div>
              </div>
              <div className="each-dish">
                <h4>{menu[9].title.toUpperCase()}</h4>
                <p>{menu[9].description}</p>
                <div className="price">
                  <h5>£{menu[9].price}</h5>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      )}
    </>
  );
}

export default OurMenu;
