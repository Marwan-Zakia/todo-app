import Col from "react-bootstrap/Col";
import React, { useContext, useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import ReactPaginate from "react-paginate";
import { SettingContext } from "./context/Settings";
import "./list.css";
import Auth from "./auth/auth";
import Pagination from "./pagination";
import api from "./todo/api";
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
              <p>{item.description}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>

              <Auth capability={"update"}>
                <Button
                  className="bp3-intent-success"
                  onClick={() => {
                    api
                      .put(`/${item.id}`, { completed: !item.completed })
                      .then((res) => {
                        console.log(res.data);
                      });
                    toggleComplete(item.id);
                  }}
                >
                  Complete: {item.completed  ? "Yes" : "No"}
                </Button>
              </Auth>
              <Auth capability={"delete"}>
                <Button
                  className="bp3-intent-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete {item?.complete}
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
        {/* <Pagination           
      pageCount={pageCount}
      changePage={changePage}
      usersPage={usersPage}
      list={list}
      
      //   "homepage" :"http://https://marwan-zakia.github.io/todo-app/",
      
      /> */}
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
