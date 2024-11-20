import React, { useState, useEffect } from "react";
import Item from './Item';
import data from "./data";
import FormEdit from "./FormEdit"
import { v4 as uuidv4 } from 'uuid';
import "./ToDoList.css"

const ToDoList = () => {

  // ESTADO DE LOS ITEMS Y DEL MENSAJE -------------------------------
  const [items, setItems] = useState(data);
  // Estado para mostrar el mensaje
  const [message, setMessage] = useState('');

  const [values, setValues] = useState({
    stuff: '',
    isDone: false
  });

  const [valueToEdit, setValueToEdit] = useState({
    stuff: ''
  });

  const renderItems = () => {
    return items.map((item, i) => <Item data={item} key={uuidv4()} remove={() => removeItem(i)} edit={() => editItem(i)} />)
  }

  const renderFormEdit = () => {
    return <FormEdit valueToEdit={valueToEdit.stuff}/>
  }

  // Actualiza el estado items
  const addItem = (new_item) => {
    setItems([...items, new_item]);
    // Mostrar mensaje "tarea añadida"
    setMessage('Tarea añadida');
    // El mensaje desaparece a los 5 segs.
    setTimeout(() => {
      setMessage('');
    }, 500000);
  }

  // Cargar con los datos iniciales
  const resetItems = () => {
    setItems(data)
  }

  // Borrar todos
  const removeAllItems = () => {
    setItems([])
  }

  // Borrar un elemento
  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i);
    setItems(remainingItems);
  }

  // Estado de editMode (true/false)
  const [editMode, setEditMode] = useState(false);
  
  const editItem = (i) => {
    // const itemToEdit = prompt(`Item a editar: ${items[i].title}`)//cambiar por componente formulario precargado. Hermano de TODOItem
    // setValues({ title: itemToEdit })
    // items[i].title = itemToEdit;
    const itemToEdit = items[i].stuff;
    console.log(itemToEdit)
    setValueToEdit({stuff: itemToEdit});
    setEditMode(true);
  }

  const checkItem = (i) => {
    const actualItem = items.filter((item, index) => index === i)
    setItems({isDone: true});
  }
  // ESTADO DEL FORMULARIO ---------------------------------

  const handleChange = (e) => {
    setValues({
      ...values, // Conserva las claves anteriores
      [e.target.name]: e.target.value // Si cambia el título, guardarlo
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.stuff.length < 6) {
      setMessage('Mínimo 6 caracteres, por favor');
      // El mensaje desaparece a los 5 segs.
      setTimeout(() => {
        setMessage('');
      }, 500000);
    } else {
      addItem(values)
      setValues({ stuff: '' })
    }
  }
  // useEffect mira si hay cambios en el estado values
  // A los 20 segundos de esos cambios reinicia el estado de values
  // useEffect(() => {
  //   setTimeout(() => {
  //     setValues({ stuff: '' })
  //   }, 200000);
  // }, [values]);

  return <section>
    <h2>TO DO LIST</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={values.stuff} id="name" placeholder="Put some stuff here" name="stuff" onChange={handleChange} />
      {values.stuff ? <button type="submit" className="btnSubmit">ADD</button> : items.includes({stuff: values.stuff}) ? <button type="submit" className="btnEdit">EDIT</button> : ""  }
      {message ? <p id="message">{message} 😊</p> : ""}
    </form>
    {editMode ? renderFormEdit() : ""}
    {/* {renderFormEdit()} */}

    <section id="sectionItems">{renderItems()}</section>
    {/* <section id="sectionItems">{renderFormEdit()}</section> */}
    <button onClick={() => removeAllItems()}>Borrar todo</button>
    <button onClick={() => resetItems()}>Recargar</button>

  </section>

};

export default ToDoList;
