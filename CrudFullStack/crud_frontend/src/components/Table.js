import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Table() {
  const [cruds, setCruds] = useState([]);

  useEffect(function () {
    async function getCruds() {
      try {
        const response = await axios.get("http://localhost:5000/api/cruds");
        setCruds(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getCruds();
  }, []);

  return (
    <div className="container m-5">
      <div>
        <h2>
          CRUD - Table View
          <div>
          <p>
            <Link to="/cruds/new" className="btn btn-primary float-right">
              Create CRUD
            </Link>
          </p>
          </div>
        </h2>
        <hr />
      </div>

      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cruds &&
              cruds.map((crud) => {
                return (
                  <tr key={crud._id}>
                    <td>
                      <Link to={`/cruds/${crud._id}`} className="link-line">
                        {crud.companyName}
                      </Link>
                    </td>
                    <td>{crud.phone}</td>
                    <td>{crud.email}</td>
                    <td>{crud.location}</td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}`}
                        className="btn btn-warning"
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}/edit`}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/cruds/${crud._id}/delete`}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
