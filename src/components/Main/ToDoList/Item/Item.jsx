import React from "react";
import './Item.css'
import { FaTrash } from "react-icons/fa";

const Item = ({data, remove}) => {
  let {stuff} = data;
  return <article className="toDoCard">
      <h3>{stuff}</h3>
      <button onClick={remove} className="squareBtn"><FaTrash /></button>
    </article>
};

export default Item;