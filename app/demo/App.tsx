import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer className="my-5 py-5">
      <section className="text-center">
        <h1 className="mb-0 text-black">
          Black November{" "}
          <span className="text-danger fw-bold">Waiting List</span>
        </h1>
        <hr className="my-5" />
        <p className="text-black lead">
          All offers will be{" "}
          <span className="text-danger fw-bold">limited</span>. Don't lose your
          chance, be the <span className="text-danger fw-bold">first</span> to
          get notified.
        </p>
      </section>

      <section className="my-5">
        <div className="bg-dark text-white text-center text-xl-start rounded-6">
          <div
            className="container px-4"
            style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
          >
            <div className="row mx-xl-1 d-flex justify-content-center justify-xl-content-start align-items-center">
              <div className="col-md-10 col-lg-7 col-xl-7">
                <h2 className="fs-1" style={{ fontWeight: 900 }}>
                  Join the waiting list{" "}
                  <span className="text-danger fw-bold">NOW</span>
                </h2>
                <p className="lead fw-normal mb-4 pb-md-1 pb-xl-0 mb-xl-0">
                  You will only receive emails related to the Black November
                  promotions and after the promotion is over, you will be
                  unsubscribed. We won't spam you.
                </p>
              </div>
              <div className="col-md-10 col-lg-7 col-xl-5">
                <div className="d-md-flex mb-3 mb-md-2 ms-xl-4">
                  <div className="flex-fill me-md-1 mb-3 mb-md-0">
                    <form
                      action="https://app.convertkit.com/forms/2663020/subscriptions"
                      className="seva-form formkit-form"
                      method="post"
                      data-sv-form="2663020"
                      data-uid="30443eba65"
                      data-format="inline"
                      data-version="5"
                      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://mdbootstrap.com/confirm/"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                    >
                      <ul
                        className="text-danger fw-bold"
                        data-element="errors"
                        data-group="alert"
                      ></ul>

                      <div
                        data-element="fields"
                        data-stacked="false"
                        className="d-flex d-inline-block justify-content-center"
                      >
                        <div className="form-outline form-white w-100">
                          <input
                            type="text"
                            id="form1"
                            name="email_address"
                            required=""
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form1"
                            style={{ marginLeft: "0px" }}
                          >
                            Your email address
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: "9px" }}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{ width: "116.8px" }}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <button
                          className="btn btn-danger ms-2"
                          data-element="submit"
                        >
                          JOIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted text-center">
          <small>
            By subscribing you agree to receive Black November notifications
            from the data administrator StartupFlow s.c. Kijowska 7, Warsaw.
            <a
              href="https://mdbootstrap.com/general/privacy-policy/"
              className="text-decoration-underline text-reset"
            >
              Privacy Policy
            </a>
            .
          </small>
        </p>
      </section>

      <section className="my-5 pt-5">
        <p className="lead text-center">
          Explore products that will be discounted:
        </p>

        <div className="row">
          <div className="col-md-3">
            <div className="card shadow-2-strong">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://v1.mdbootstrap.com/wp-content/uploads/2021/10/bootstrap-standard.webp"
                  className="img-fluid"
                />
                <a
                  href="https://mdbootstrap.com/docs/standard/pro/"
                  target="_blank"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">MDB Standard PRO</h5>
                <p className="card-text">
                  Components, templates, plugins, premium support and much more
                  for the <strong>latest Bootstrap v5 as well as v4</strong>.
                </p>
                <div className="text-end">
                  <a
                    href="https://mdbootstrap.com/docs/standard/pro/"
                    type="button"
                    className="btn btn-sm btn-link text-muted"
                    target="_blank"
                  >
                    View product <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-2-strong">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://v1.mdbootstrap.com/wp-content/uploads/2021/10/angular.webp"
                  className="img-fluid"
                />
                <a
                  href="https://mdbootstrap.com/docs/b5/angular/pro/"
                  target="_blank"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">MDB Angular PRO</h5>
                <p className="card-text">
                  Components, templates, plugins, premium support and much more
                  for the <strong>latest Bootstrap v5 as well as v4</strong>.
                </p>
                <div className="text-end">
                  <a
                    href="https://mdbootstrap.com/docs/b5/angular/pro/"
                    type="button"
                    className="btn btn-sm btn-link text-muted"
                    target="_blank"
                  >
                    View product <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-2-strong">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://v1.mdbootstrap.com/wp-content/uploads/2021/10/react.webp"
                  className="img-fluid"
                />
                <a
                  href="https://mdbootstrap.com/docs/b5/react/pro/"
                  target="_blank"
                >
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">MDB React PRO</h5>
                <p className="card-text">
                  Components, templates, plugins, premium support and much more
                  for the <strong>latest Bootstrap v5 as well as v4</strong>.
                </p>
                <div className="text-end">
                  <a
                    href="https://mdbootstrap.com/docs/b5/react/pro/"
                    type="button"
                    className="btn btn-sm btn-link text-muted"
                    target="_blank"
                  >
                    View product <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow-2-strong">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://v1.mdbootstrap.com/wp-content/uploads/2021/10/vue.webp"
                  className="img-fluid"
                />
                <a href="https://mdbootstrap.com/docs/b5/vue/pro/" target="_blank">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">MDB Vue PRO</h5>
                <p className="card-text">
                  Components, templates, plugins, premium support and much more
                  for the <strong>latest Bootstrap v5 as well as v4</strong>.
                </p>
                <div className="text-end">
                  <a
                    href="https://mdbootstrap.com/docs/b5/vue/pro/"
                    type="button"
                    className="btn btn-sm btn-link text-muted"
                    target="_blank"
                  >
                    View product <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBContainer>
  );
}

export default App;
