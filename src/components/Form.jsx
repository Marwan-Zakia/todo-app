import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import Auth from './auth/auth'
import Card from "react-bootstrap/Card";
export default function Form({ handleSubmit, handleChange }) {
  return (
      <Card interactive={true} style={{ width: "20rem", height: "20rem" }}>
        <FormGroup>
          <h2>Add To Do Item</h2>
          <label>
            <span>To Do Item</span>
            <InputGroup
              className={"bp3-intent-primary"}
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Item Details"
            />
          </label>
          <label>
            <span>Assigned To</span>
            <InputGroup
              className={"bp3-intent-primary"}
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>

          <label>
            <span>Difficulty</span>
            <InputGroup
              onChange={handleChange}
              className={"bp3-intent-primary"}
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>

          <label>
          <Auth capability={'create'}>
            <Button
              onClick={handleSubmit}
              className={"bp3-intent-primary"}
              type="submit"
            >
              Add Item
            </Button>
            </Auth>
          </label>
        </FormGroup>
      </Card>

  );
}
