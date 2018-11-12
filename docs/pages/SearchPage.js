import React from "react";
import { Input, FormInline, Container, Row, Col, Fa } from "mdbreact";
import DocsLink from "./DocsLink";
import "./Search.css";

class SearchPage extends React.Component {
  render() {
    return (
      <Container>
        <DocsLink
          title="Search"
          href="https://mdbootstrap.com/docs/react/forms/search/"
        />
        <Row>
          <Col md="6">
            <Input hint="Search" type="text" containerClass="mt-0" />
          </Col>
          <Col md="6">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </Col>
        </Row>
        <h3 className="mt-4">Search with colorful border</h3>
        <Row>
          <Col md="6">
            <Input
              hint="Search"
              type="text"
              containerClass="active-pink active-pink-2 mt-0 mb-3"
            />
            <Input
              hint="Search"
              type="text"
              containerClass="active-purple active-purple-2 mt-0 mb-3"
            />
            <Input
              hint="Search"
              type="text"
              containerClass="active-cyan active-cyan-2 mt-0 mb-3"
            />
            <Input
              hint="Search"
              type="text"
              containerClass="active-pink-2 mt-0 mb-3"
            />
            <Input
              hint="Search"
              type="text"
              containerClass="active-purple-2 mt-0 mb-3"
            />
            <Input
              hint="Search"
              type="text"
              containerClass="active-cyan-2 active-purple-2 mt-0 mb-3"
            />
          </Col>
          <Col md="6">
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
          </Col>
        </Row>
        <h3 className="mt-4">Search with icon</h3>
        <Row>
          <Col md="6">
            <FormInline className="md-form">
              <Fa icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </FormInline>
            <FormInline className="md-form active-pink active-pink-2">
              <Fa icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </FormInline>
            <FormInline className="md-form active-purple active-purple-2">
              <Fa icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </FormInline>
            <FormInline className="md-form active-cyan active-cyan-2 ">
              <Fa icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </FormInline>
            <FormInline className="md-form active-pink-2">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <Fa icon="search" />
            </FormInline>
            <FormInline className="md-form active-purple-2">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <Fa icon="search" />
            </FormInline>
            <FormInline className="md-form active-cyan-2 ">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <Fa icon="search" />
            </FormInline>
          </Col>
          <Col md="6">
            <form className="form-inline mt-4 mb-4">
              <i className="fa fa-search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-pink-3 active-pink-4 mb-4">
              <i className="fa fa-search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-purple-3 active-purple-4 mb-4">
              <i className="fa fa-search" aria-hidden="true" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <form className="form-inline active-cyan-3 active-cyan-4 mb-4">
              <i className="fa fa-search" aria-hidden="true" />
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
              <i className="fa fa-search" aria-hidden="true" />
            </form>
            <form className="form-inline active-pink-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa fa-search" aria-hidden="true" />
            </form>
            <form className="form-inline active-purple-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa fa-search" aria-hidden="true" />
            </form>
            <form className="form-inline active-cyan-4 mb-4">
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fa fa-search" aria-hidden="true" />
            </form>
          </Col>
        </Row>
        <h3 className="mt-4">Search with input group</h3>
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text purple lighten-3"
              id="basic-text1"
            >
              <Fa icon="search" className="text-grey" />
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
              <Fa icon="search" className="text-grey" />
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
              <Fa icon="search" className="text-grey" />
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
              <Fa icon="search" className="text-grey" />
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
              <Fa icon="search" className="text-grey" />
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
              <Fa icon="search" className="text-grey" />
            </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default SearchPage;
