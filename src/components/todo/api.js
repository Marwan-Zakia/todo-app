import axios from "axios";
// import cookie from "js-cookie";
import cookie from 'react-cookies';
export default axios.create({
  baseURL: "https://todo-401-401.herokuapp.com/api/todos",
  headers: {
    Authorization: `bearer ${cookie.load("auth")}`,
  },
});
