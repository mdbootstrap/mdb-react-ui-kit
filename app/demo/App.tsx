import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <img
            className="mb-4"
            src="https://v1.mdbootstrap.com/wp-content/uploads/2022/11/mdb-sale.png"
          />
          <h5 className="mb-4">
            Only now, you can get all premium features & more with the best
            discounts of the year.
          </h5>
          ​<p className="mb-4 fw-bold">All offers are LIMITED!</p>
          <a
            className="btn btn-lg btn-danger fw-bold mb-3"
            style={{ backgroundColor: "#e70808" }}
            href="https://mdbootstrap.com/sale/november/"
            target="_blank"
            role="button"
          >
            Check insane offers
          </a>
          <hr />
          <p className="mt-4 lead fw-bold">
            Publish your project with a single command.
          </p>
          <p className="mt-2">
            Use{" "}
            <a href="https://mdbgo.com/" className="fw-bold" target="_blank">
              <u>MDB GO</u>
            </a>{" "}
            for a free hosting & deployment tool
          </p>
        </div>
      </div>
    </div>
  );
}
