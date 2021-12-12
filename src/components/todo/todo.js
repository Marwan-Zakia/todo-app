import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import Header from "../header.jsx";
import Form from "../Form.jsx";
import { v4 as uuid } from "uuid";
import List from "../list.jsx";
import { SettingContext } from "../context/Settings";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);
  const Setting = useContext(SettingContext);
  return (
    <>
      <Header incomplete={incomplete} />
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      {list.map((item) => (
        <List
        incomplete={incomplete} 
          item={item}
          toggleComplete={toggleComplete}
          showen={Setting.shown}
          number={Setting.number}
        />
      ))}
    </>
  );
};

export default ToDo;
