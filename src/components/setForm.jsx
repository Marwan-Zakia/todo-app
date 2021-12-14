import React from "react";
import { FormGroup, Card, Elevation, Button, Switch } from "@blueprintjs/core";

import "./todo/todo";

export default function SetForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let display = e.target.disply.value;
    let numberOfItem = e.target.numberOfItem.value;
    let obj = {
      display: display,
      numberOfItem: numberOfItem,
    };
    setItem(obj);
    e.target.reset();
    window.location.href = "/";
  };
  function setItem(obj) {
    localStorage.setItem("settings", JSON.stringify(obj));
  }
  return (
    <div>
      <div className="toDo">
        <Card interactive={true} elevation={Elevation.TWO}>
          <form onSubmit={handleSubmit}>
            <h2> Settings Tab</h2>
            <FormGroup label="show completed tasks" labelFor="disply">
              <select name="disply" dir="auto" className="bp3-input .modifier">
                <option value={true}>true</option>
                <option value={false}>false</option>
              </select>
            </FormGroup>
            <FormGroup label="Number of cards " labelFor="assignee">
              <input
                className="bp3-input .modifier"
                name="numberOfItem"
                type="text"
                placeholder="Assignee Name"
                dir="auto"
              />
            </FormGroup>
            <br />
            <Button type="submit">Add Item</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
