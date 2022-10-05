import "./App.css";
import Community from "./components/Community/Community";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="header">
        <article className="title slogan">
          <h2>THE BEST FOOD</h2>
          <h1>EXPERIENCIE</h1>
          <h5>NOW IN LONDON</h5>
        </article>
      </div>
      <div>
        <Community />
      </div>
    </div>
  );
}

export default App;
