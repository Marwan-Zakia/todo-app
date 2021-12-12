import {
  Navbar,
  Alignment,
  Button,
  FormGroup,
  Card,
  Elevation,
  InputGroup,
} from "@blueprintjs/core";



export default function Form({ handleSubmit, handleChange }) {
  return (
    
   
      <Card interactive={true} elevation={Elevation.ONE}>
        <FormGroup>
          <h2>Add To Do Item</h2>
          <label>
            <span>To Do Item</span>
            <InputGroup
              className={"bp3-intent-primary"}
              onChange={handleChange}
              name="text"
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
            <Button
              onClick={handleSubmit}
              className={"bp3-intent-primary"}
              type="submit"
            >
              Add Item
            </Button>
          </label>
        </FormGroup>
      </Card>

  );

}


