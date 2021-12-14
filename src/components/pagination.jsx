import Pagination from "react-bootstrap/Pagination";
export default function pagination(props) {
  let active = 2;
  let items = [];

  for (let number = 1; number <= 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  );
}
