import React from "react";
import { MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const SpinnerPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Loader/Spinner"
        href="https://mdbootstrap.com/docs/react/components/spinners/"
      />

      <h2>Colorful</h2>
      <div className="my-5 d-flex justify-content-around">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Growing loader</h2>
      <div className="my-5 d-flex justify-content-around">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Sizing</h2>
      <div className="my-5 d-flex justify-content-around">
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm" role="status">
          <span className="sr-only">Loading...</span>
        </div>

        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <hr />

      <h2 className="mt-5">Crazy speed</h2>
      <div className="my-5 d-flex justify-content-around">
        <div className="spinner-border fast" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow fast" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </MDBContainer>
  );
};

export default SpinnerPage;
