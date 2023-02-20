import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const login = () => {
    let data = {
      email: email,
      password: password,
    };
    // console.log(data);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            fullWidth
            type="email"
            id="outlined-basic"
            label="Email ID"
            variant="outlined"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={(e) => {
              if (email == null || password == "") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                });
              } else {
                login();
                // e.preventDefault();
                navigate("/home");
              }
            }}
          >
            Login
          </Button>
        </div>
      </Box>
      {/* <Form
        onSubmit={(e) => {
          if (email == null || password == "") {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          } else {
            login();
            e.preventDefault();
            navigate("/home");
          }
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {}}>
          Submit
        </Button>
      </Form> */}
    </>
  );
}
