import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EmpDetails(props) {
  const [emp, setEmp] = useState({});

  const { _id } = useParams();
  const navigate = useNavigate();
  useEffect(
    function () {
      async function getCrudById() {
        try {
           await axios.get(`http://localhost:5000/api/cruds/${_id}`).then((response)=>{console.log(response)
            setEmp(response.data)});
         /*  const enpDetails= response.data;
          console.log("Empdetails",enpDetails)
          setEmp(enpDetails); */
          console.log(emp)
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/cruds/${_id}`);
      navigate("/cruds");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container m-5">
    
      <h2 style={{color:"red"}}>{emp.companyName}</h2>

      <p>
        <b>Phone</b>: <a href={`tel:+${emp.phone}`}> {emp.phone} </a>
      </p>

      <p>
        <b>Email</b>: {emp.email}
      </p>
      <p>
        <b>Location</b>: {emp.location}
      </p>
      <p>
        <b>Description</b>: {emp.description}
      </p>
      <p>
        <small>
          <b>ID</b>: {emp._id}
        </small>
      </p>
      <div className="btn-group ">
        <Link to={`/cruds/${emp._id}/edit`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/cruds" className="btn btn-secondary">
          Close
        </Link>
      </div>
      <hr />
    </div>
  );
}
