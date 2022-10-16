import "./App.css";
import Colaborate from "./components/Colaborate/Colaborate";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import OurMenu from "./components/OurMenu/OurMenu";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <div className="container">
        <div className="food-image">
          <img
            src="/public/images/fruits-removebg-preview.png"
            alt="food-image"
          />
        </div>
        <div className="header">
          <Navbar />
          <figure className="logo">
            <img style={{ width: "50%" }} src="/images/stamp.png" alt="logo" />
          </figure>
          <h2 className="slogan slogan-h2">THE BEST FOODIE</h2>
          <article className="slogan">
            <h1>EXPERIENCIE</h1>
            <p style={{ fontWeight: "100" }}>NOW IN LONDON</p>
          </article>
        </div>
      </div>

      <Community />

      <Location />

      <OurMenu />

      <Recipes />

      <Colaborate />

      <Footer />
    </>
  );
}

export default App;
