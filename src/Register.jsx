import React, { useRef, useContext } from "react";
import { Mydata } from "./Navbtn";
import Button from "react-bootstrap/Button";
import "./Register.css";

const Register = () => {
  let { setStore } = useContext(Mydata);
  let Myref1 = useRef();
  let Myref2 = useRef();

  let handleEvent = (e) => {
    e.preventDefault();

    let sname = Myref1.current.value;
    let sgrade = Myref2.current.value;

    if (sname && sgrade) {
      setStore((prevState) => ({
        students: [...prevState.students, { sname, sgrade }],
      }));

      Myref1.current.value = "";
      Myref2.current.value = "";

      alert(`Student Registered: Name: ${sname}, Grade: ${sgrade}`);
    } else {
      alert("Please enter both name and grade.");
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: "500px" }}>Student Management System</h1>
      <h3>Register A New Student</h3>
      <form onSubmit={handleEvent}>
        <input type="text" ref={Myref1} placeholder="Enter Student Name" />
        <input type="text" ref={Myref2} placeholder="Enter Student Grade" />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
