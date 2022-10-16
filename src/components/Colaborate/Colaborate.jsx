import React from "react";
import Form from "../Form/Form";
import "./Colaborate.css";

function Colaborate() {
  return (
    <section className="colaborate">
      <Form />
      <div className="detail-04">
        <img src="/images/detail02.png" alt="detail-04" />
      </div>
      <div className="before-with"></div>
      <div className="colaborate-info">
        <div className="with-us">
          <h3>COLABORATE</h3>
          <h1>WITH US</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est
          dignissimos facere repellat ipsum! Officia repellendus excepturi nemo
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          quibusdam eveniet eius aliquam iure vero sapiente quis? Veniam,
          delectus exercitationem ad cupiditate, eveniet optio repudiandae
          facilis est labore ducimus iste.
        </p>
      </div>
    </section>
  );
}

export default Colaborate;
