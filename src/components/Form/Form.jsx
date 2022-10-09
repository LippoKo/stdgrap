import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <div>
        <form className="form-origin">
          <label htmlFor="NAME">
            NAME
            <input placeholder="Name" type="text" name="NAME" />
          </label>

          <label htmlFor="SURNAME">
            SURNAME
            <input placeholder="Surname" type="text" name="SURNAME" />
          </label>

          <label htmlFor="PHONE">
            PHONE
            <input placeholder="Phone" type="text" name="PHONE" />
          </label>

          <label htmlFor="EMAIL-ADDRESS">
            EMAIL ADDRESS
            <input
              placeholder="Email Address"
              type="text"
              name="EMAIL-ADDRESS"
            />
          </label>

          <label htmlFor="EXPERIENCE">
            EXPERIENCE
            <input
              placeholder="Select"
              type=""
              name="EXPERIENCE"
              list="list01"
            />
            <datalist id="list01">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </datalist>
          </label>

          <label htmlFor="WHERE">
            WHERE DID YOU HEAR ABOUT US?
            <input placeholder="Select" type="" name="WHERE" list="list02" />
            <datalist id="list02">
              <option>FACEBOOK</option>
              <option>INSTAGRAM</option>
              <option>TWITTER</option>
              <option>OTHER</option>
            </datalist>
          </label>

          <button className="form-button">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
