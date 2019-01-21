import React, { Component } from "react";
import { MDBInput, MDBFormInline, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdbreact";
import DocsLink from "../components/docsLink";
import "./Search.css";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic (CAR)",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (UAE)",
  "United Kingdom (UK)",
  "United States of America (USA)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City (Holy See)",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

class SearchPage extends Component {
  state = {
    dataSet: countries,
    filteredSet: countries, 
    searchValue: "",
    modalOpen: false
  }

  handleSearch = event => this.setState({ searchValue: event.target.value }, () => this.searchForCountry());

  searchForCountry = () => {
    this.setState(prevState => {
      const filteredSet = prevState.dataSet.filter(item => item.toLowerCase().match(this.state.searchValue.toLowerCase()));
      return { filteredSet };
    });
  }

  toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Search"
          href="https://mdbootstrap.com/docs/react/forms/search/"
        />
        <MDBRow>
          <MDBCol md="6">
            <MDBBtn onClick={this.toggleModal}>Search for country example</MDBBtn>
          </MDBCol>
          <MDBCol md="6">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </MDBCol>
        </MDBRow>
        <h3 className="mt-4">Search with colorful border</h3>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-pink active-pink-2 mt-0 mb-3"
            />
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-purple active-purple-2 mt-0 mb-3"
            />
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-cyan active-cyan-2 mt-0 mb-3"
            />
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-pink-2 mt-0 mb-3"
            />
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-purple-2 mt-0 mb-3"
            />
            <MDBInput
              hint="Search"
              type="text"
              containerClass="active-cyan-2 active-purple-2 mt-0 mb-3"
            />
          </MDBCol>
          <MDBCol md="6">
            <div className="active-pink-3 active-pink-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="active-purple-3 active-purple-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="active-cyan-3 active-cyan-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="active-pink-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="active-purple-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="active-cyan-4 mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </MDBCol>
        </MDBRow>
        <h3 className="mt-4">Search with icon</h3>
        <MDBRow>
          <MDBCol md="6">
            <MDBFormInline className="md-form">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            <MDBFormInline className="md-form active-pink active-pink-2">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            <MDBFormInline className="md-form active-purple active-purple-2">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            <MDBFormInline className="md-form active-cyan active-cyan-2 ">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBFormInline>
            <MDBFormInline className="md-form active-pink-2">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" />
            </MDBFormInline>
            <MDBFormInline className="md-form active-purple-2">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" />
            </MDBFormInline>
            <MDBFormInline className="md-form active-cyan-2 ">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" />
            </MDBFormInline>
          </MDBCol>
          <MDBCol md="6">
            <form className="form-inline mt-4 mb-4">
              <MDBIcon icon="search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-pink-3 active-pink-4 mb-4">
              <MDBIcon icon="search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-purple-3 active-purple-4 mb-4">
              <MDBIcon icon="search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-cyan-3 active-cyan-4 mb-4">
              <MDBIcon icon="search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" aria-hidden="true" />
            </form>
            <form className="form-inline active-pink-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" aria-hidden="true" />
            </form>
            <form className="form-inline active-purple-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" aria-hidden="true" />
            </form>
            <form className="form-inline active-cyan-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBIcon icon="search" aria-hidden="true" />
            </form>
          </MDBCol>
        </MDBRow>
        <h3 className="mt-4">Search with input group</h3>
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text purple lighten-3"
              id="basic-text1"
            >
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text cyan lighten-2" id="basic-text1">
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text pink lighten-3" id="basic-text1">
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control my-0 py-1 amber-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <span className="input-group-text amber lighten-3" id="basic-text1">
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
        </div>
        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control my-0 py-1 lime-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <span className="input-group-text lime lighten-2" id="basic-text1">
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
        </div>
        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control my-0 py-1 red-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <span className="input-group-text red lighten-3" id="basic-text1">
              <MDBIcon icon="search" className="text-grey" />
            </span>
          </div>
        </div>

        <MDBModal isOpen={this.state.modalOpen} toggle={this.toggleModal} backdrop={false} size="sm" side position="top-right">
          <MDBModalHeader toggle={this.toggleModal}>Modal title</MDBModalHeader>
          <MDBModalBody>
            <MDBInput value={this.state.searchValue} onChange={this.handleSearch} hint="Search for country" type="text" containerClass="mt-0" />
            <MDBListGroup>
              {
                this.state.filteredSet.map(item => (
                  <MDBListGroupItem key={item}>{item}</MDBListGroupItem>
                ))
              }
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleModal}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SearchPage;
