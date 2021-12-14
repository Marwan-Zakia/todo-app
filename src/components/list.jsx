import Col from "react-bootstrap/Col";
import React, { useContext, useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import ReactPaginate from "react-paginate";
import { SettingContext } from "./context/Settings";
import './list.css';
export default function List({ toggleComplete, list }) {
  const settings = useContext(SettingContext);
  const [numberOfPages, setnumberOfPages] = useState(0);
 
  const usersPage = settings.numberOfshow;
  const pagesUser = numberOfPages * usersPage;
  const displayUsers = list
    .slice(pagesUser, pagesUser + usersPage)
    .map((item) => {
      return (
   
          <div key={item.id} style={{ width: "650px", margin: "15px" }}>
            <Card interactive={true} elevation={Elevation.TWO}>
              <p>{item.text}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>

              <Button onClick={() => toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </Button>
            </Card>
          </div>
 
      );
    });
  

  const pageCount = Math.ceil(list.length / usersPage);
  const changePage = ({ selected }) => {
    setnumberOfPages(selected);
  };
  return (
    <>
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}
