import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmp(props) {
  const initialState = {
    companyName: "",
    phone: "",
    email: "",
    location: "",
    description: "",
  };
  const [crud, setCrud] = useState(initialState);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    //if (!crud.companyName || !crud.email) return;
    async function postCrud() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/cruds/",
          crud
        );
        navigate(`http://localhost:5000/api/cruds/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
    //navigate("/cruds")
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
    console.log(crud);
  }

  function handleCancel() {
    navigate("/cruds");
  }

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Create CRUD</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> Name</label>
          <input
            name="companyName"
            type="text"
            required
            value={crud.companyName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            pattern="+91-[0-9]{10}"
            required
            value={crud.phone}
            onChange={handleChange}
            className="form-control"
          />
          <small>Format: +91-XXXXXXXXXX</small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
            required
            value={crud.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            name="location"
            type="text"
            required
            value={crud.location}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            row="10"
            value={crud.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="btn-group mt-3">
          <button
            type="button"
            onClick={() => {
              navigate("/cruds");
            }}
            className="btn btn-primary"
          >
            ADD
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
