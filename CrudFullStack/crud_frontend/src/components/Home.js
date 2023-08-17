import React from "react";

export default function Home() {
  const link = "/cruds";
  const target = "_blank";
  return (
    <div className="containerbody mt-5">
      <h1>MERN Stack CRUD</h1>
      <p>
        <b style={{ color: "red" }}>Front-end</b>: React.js v17+ with RRDv6+
      </p>
      <p>
        <b style={{ color: "red" }}>Back-end</b>: Node.js, Express.js
      </p>
      <p>
        <b style={{ color: "red" }}>Database</b>: MongoDB
      </p>
      <p>
        <b style={{ color: "red" }}>Developed By</b>: Ankit Pratyay
        <p className="mt-5">
          <a href={link} target={target}>
            @nkit.P
          </a>
        </p>
      </p>
    </div>
  );
}
