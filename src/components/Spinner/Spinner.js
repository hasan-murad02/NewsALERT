import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
