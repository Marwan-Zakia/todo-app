import React, { useState } from "react";
import axios from "axios";
import superagent from "superagent";
export default function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let url = "https://todo-401-401.herokuapp.com/signup";
    setPassword(e.target.password.value);
    setUsername(e.target.username.value);
    setRole(e.target.role.value);

    let obj = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    axios.post(url, obj).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <form onSubmit={handleChange}>
        Username
        <br />
        <input
          className="form-control"
          placeholder="username"
          type="text"
          name="username"
        />
        Password
        <br />
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          name="password"
        />
        Role
        <br />
        <input
          className="form-control"
          placeholder="Role"
          type="text"
          name="role"
        />
        <button className="btn btn-primary" type="submit">
          sign up
        </button>
      </form>
    </>
  );
}
