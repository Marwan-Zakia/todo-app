import {
  Card,
  Elevation,
} from "@blueprintjs/core";

export default function List({ item,toggleComplete }) {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <div key={item.id}>
        <p>{item.text}</p>
        <p>
          <small>Assigned to: {item.assignee}</small>
        </p>
        <p>
          <small>Difficulty: {item.difficulty}</small>
        </p>
        <div onClick={() => toggleComplete(item.id)}>
          Complete: {item.complete.toString()}
        </div>
        <hr />
      </div>
    </Card>
  );
}
