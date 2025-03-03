
import React, { useContext } from "react";
import { Mydata } from "./Navbtn";
import Button from "react-bootstrap/Button";
import "./Student.css";
import Hoc from "./Hoc";

const Students = ({ about }) => {
  let { store, setStore } = useContext(Mydata);

  // Function to handle student removal
  let handleDelete = (sname) => {
    setStore((prevState) => ({
      students: prevState.students.filter((student) => student.sname !== sname),
    }));
  };

  return (
    <div>
      <h1 style={{ marginLeft: "500px" }}>Student Management System</h1>
      <h5>Global Status: {about}</h5>
      <h2>Student List</h2>
      <div className="studentlist">
        {store.students.length > 0 ? (
          store.students.map((student, index) => (
            <div key={index} id="divli">
              <li>
                Student Name: {student.sname} | Student Grade: {student.sgrade}
              </li>
              <Button variant="danger" id="button" onClick={() => handleDelete(student.sname)}>
                Remove
              </Button>
            </div>
          ))
        ) : (
          <p>No students registered.</p>
        )}
      </div>
    </div>
  );
};

export default Hoc(Students);
