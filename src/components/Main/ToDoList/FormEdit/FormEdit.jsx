import React, { useState, useEffect } from "react";

const FormEdit = ({ valueToEdit }) => {

  const handleSubmit = (e) => {
    console.log("SUBMITEADO")
  }

  const handleChange = (e) => {
    console.log("CAMBIADO")
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" name="stuff" value={valueToEdit} onChange={handleChange} />
      <button type="submit" className="btnSubmit">EDIT</button>
    </form>
  </>;
};

export default FormEdit;
