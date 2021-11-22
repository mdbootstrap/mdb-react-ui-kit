import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer>
      <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
        <div className="text-center">
          <img className='mb-2' src='https://bf-sale.mdbgo.io/bf.png' width='800' height='450' />
          <h2 className='fw-bold'>Black Friday Sale</h2>
          <h5 className='mb-3'>
            Get MDB Pro with discounts{" "}
            <span className='text-danger'>up to 95%</span>
          </h5>
          <p className="mb-3 fw-bold">Hurry up the offer is limited!</p>
          <a className='btn btn-black btn-lg mt-2' target='_blank' role='button' href="https://mdbootstrap.com/bf/sale/">
            {" "}
            <MDBIcon fas icon='shopping-cart' /> Get the offer
          </a>
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
