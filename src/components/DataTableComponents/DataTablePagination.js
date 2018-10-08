import React from "react";
import PropTypes from "prop-types";
import Pagination from "../Pagination";
import PageItem from "../PageItem";
import PageLink from "../PageLink";

const DataTablePagination = props => {
  const { activePage, changeActivePage, pages, label } = props;

  return (
    <div className="col-sm-12 col-md-7">
      <div className="dataTables_paginate">
        <Pagination>
          <PageItem disabled={activePage === 0}>
            <PageLink
              className="page-link"
              aria-label={label[0]}
              onClick={() => changeActivePage(activePage - 1)}
            >
              <span>{label[0]}</span>
            </PageLink>
          </PageItem>
          {pages.map((page, index) => (
            <PageItem key={index} active={index === activePage}>
              <PageLink
                className="page-link"
                onClick={() => changeActivePage(index)}
              >
                {index + 1}{" "}
                {index === activePage && (
                  <span className="sr-only">(current)</span>
                )}
              </PageLink>
            </PageItem>
          ))}
          <PageItem disabled={activePage === pages.length - 1}>
            <PageLink
              className="page-link"
              aria-label={label[1]}
              onClick={() => changeActivePage(activePage + 1)}
            >
              <span>{label[1]}</span>
            </PageLink>
          </PageItem>
        </Pagination>
      </div>
    </div>
  );
};

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};

DataTablePagination.defaultProps = {
  label: ["Previous", "Next"]
};

export default DataTablePagination;
export { DataTablePagination as MDBDataTablePagination };
