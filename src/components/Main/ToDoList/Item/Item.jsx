import React from "react";
import './Item.css'
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Item = ({ data, remove, edit }) => {
  let { stuff } = data;
  return <article className="toDoCard">
    <input type="checkbox" id="toCheck" name="toCheck" />
    <h3>{stuff}</h3>
    <div id="icons">
    <button onClick={edit} className="squareBtn"><MdEdit /></button>
    <button onClick={remove} className="squareBtn"><FaTrash /></button>
    </div>
  </article>
};

export default Item;