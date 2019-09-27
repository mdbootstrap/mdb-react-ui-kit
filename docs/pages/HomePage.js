import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img
                        src="https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png"
                        alt="mdbreact-logo"
                        className="pr-2"
                      />
                      Demo App
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1 mx-2 mb-2"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">Official Documentation</span>
                    </a>
                    <a
                      className="border nav-link border-light rounded mx-2 mb-2"
                      href="https://mdbootstrap.com/products/react-ui-kit/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon far icon="gem" className="mr-2" />
                      <span className="font-weight-bold">PRO</span>
                    </a>
                    <a
                      className="border nav-link border-light rounded mx-2 mb-2"
                      href="https://mdbootstrap.com/docs/react/getting-started/download/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="download" className="mr-2" />
                      <span className="font-weight-bold">FREE</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="css3"
                              brand
                              className="pink-text pr-2"
                            />
                            <strong>CSS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="/css"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="cubes" className="blue-text pr-2" />
                            <strong>COMPONENTS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="/components"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="code" className="green-text pr-2" />
                            <strong>ADVANCED</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/advanced"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="bars" className="pink-text pr-2" />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/navigation"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="edit" className="blue-text pr-2" />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className="mb-4 pb-3">
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/forms"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="table" className="green-text pr-2" />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/tables"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories" >
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="window-restore"
                              far
                              className="pink-text pr-2"
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/modals"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInUp">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="arrows-alt"
                              className="blue-text pr-2"
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="/addons"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
