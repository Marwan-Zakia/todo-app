import Col from "react-bootstrap/Col";
import React, { useContext, useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import ReactPaginate from "react-paginate";
import { SettingContext } from "./context/Settings";
import "./list.css";
import Auth from "./auth/auth";
export default function List({ toggleComplete, list, deleteItem }) {
  const settings = useContext(SettingContext);
  const [numberOfPages, setnumberOfPages] = useState(0);

  const usersPage = settings.numberOfshow;
  const pagesUser = numberOfPages * usersPage;
  const displayUsers = list
    .slice(pagesUser, pagesUser + usersPage)
    .map((item) => {
      return (
        <Auth capability={"read"}>
          <div key={item.id} style={{ width: "650px", margin: "15px" }}>
            <Card interactive={true} elevation={Elevation.TWO}>
              <p>{item.text}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>

              <Auth capability={"update"}>
                <Button
                  className="bp3-intent-success"
                  onClick={() => toggleComplete(item.id)}
                >
                  Complete: {item.complete.toString()}
                </Button>
              </Auth>
              <Auth capability={"delete"}>
                <Button
                  className="bp3-intent-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete: {item.complete.toString()}
                </Button>
              </Auth>
            </Card>
          </div>
        </Auth>
      );
    });

  const pageCount = Math.ceil(list.length / usersPage);
  const changePage = ({ selected }) => {
    setnumberOfPages(selected);
  };
  return (
    <>
      {displayUsers}
      <Auth capability={"read"}>
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
      </Auth>
    </>
  );
}
