import React from "react";
import { toast, ToastContainer, MDBContainer } from "mdbreact";
import "./alerts.css";
import DocsLink from "./../components/docsLink";

const NotificationPage = () => {
  const notify = type => {
    return () => {
      switch (type) {
        case "info":
          toast.info("Info message", {
            closeButton: false
          });
          break;
        case "success":
          toast.success("Success message", {
            position: "top-left"
          });
          break;
        case "warning":
          toast.warn("Warning message");
          break;
        case "error":
          toast.error("Error message");
          break;
        default:
          toast.error("Error message");
      }
    };
  };

  return (
    <MDBContainer>
      <DocsLink
        title="Notifications"
        href="https://mdbootstrap.com/docs/react/addons/notification/"
      />
      <div>
        <button className="btn btn-info" onClick={notify("info")}>
          Info
        </button>
        <hr />
        <button className="btn btn-success" onClick={notify("success")}>
          Success
        </button>
        <hr />
        <button className="btn btn-warning" onClick={notify("warning")}>
          Warning
        </button>
        <hr />
        <button className="btn btn-danger" onClick={notify("error")}>
          Error
        </button>
        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
      </div>
    </MDBContainer>
  );
};

export default NotificationPage;
