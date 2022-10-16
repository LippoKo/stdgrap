import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-section">
        <div className="section">
          <h2>SECTION 1</h2>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
        </div>

        <div className="section">
          <h2>SECTION 2</h2>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
        </div>

        <div className="section">
          <h2>SECTION 3</h2>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
        </div>

        <div className="section">
          <h2>SECTION 4</h2>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
        </div>

        <div className="section">
          <h2>SECTION 5</h2>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
          <p>Subsection</p>
        </div>
        <div className="company">
          <p>
            2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor .
          </p>
        </div>
      </div>

      <div className="side-footer">
        <h1 className="logo-bottom">LOGO</h1>
        <div className="logo-footer">
          <h3>THIS IS THE</h3>
        </div>

        <div className="social-media">
          <figure className="social-images">
            <img src="/images/facebook-icon.svg" alt="facebook" />
            <img src="/images/twitter-icon.svg" alt="twitter" />
            <img src="/images/instagram-icon.svg" alt="instagram" />
            <img src="/images/Linkedin-icon.svg" alt="linkdin" />
            <img src="/images/facebook-icon.svg" alt="..." />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Footer;
