import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import Header from "../header.jsx";
import Form from "../Form.jsx";
import { v4 as uuid } from "uuid";
import List from "../list.jsx";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Auth from "..//auth/auth";
import axios from "axios";
import api from "./api.js";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  async function addItem(item) {
    item.id = uuid();
    item.complete = false;
    await api.post("/", item).then((res) => {
      console.log(res);
    });
    setList([...list, item]);
  }

  function deleteItem(id) {
    setList(list.filter((item) => item.id !== id));
    api.delete(`/${id}`).then((res) => {
      // setList(items);
    });
  }

  function toggleComplete(id) {
    let items = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  useEffect(() => {
    api.get("/").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <h1> To Do List: {incomplete} items pending</h1>
      <Container fluid={"md"}>
        <Row>
          <Col xs={4} xs={{ order: "first" }}>
            <Auth>
              <Form handleSubmit={handleSubmit} handleChange={handleChange} />
            </Auth>
          </Col>

          <Col xs={4} xs={{ order: "last" }}>
            <Auth>
              <List
                incomplete={incomplete}
                toggleComplete={toggleComplete}
                list={list}
                deleteItem={deleteItem}
              />
            </Auth>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;
