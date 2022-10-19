import React from "react";
import "./contact.css";

const contact = (props) => {


  return (
    <div className="App">
      <form className="container mt-5">
        <h1 className="mb-3"> Lütfen Bize Yazınız</h1>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control mx-3 w-50"
            placeholder="Adınız"
          />
          <input
            type="text"
            className="form-control mx-3 w-50"
            placeholder="Soyadınız"
          />
        </div>

        <div className="mb-3 d-flex ">
          <input
            type="number"
            className="form-control mx-3 w-50"
            placeholder="Telefon Numaranız"
          />
          <input
            type="email"
            className="form-control mx-3 w-50"
            placeholder="E-Mail Adresiniz"
          />
        </div>

        <div className="">
          <textarea
            className="form-control mb-3 mx-3 "
            rows="10"
            placeholder="Lütfen Mesajınızı yazınız"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default contact;
