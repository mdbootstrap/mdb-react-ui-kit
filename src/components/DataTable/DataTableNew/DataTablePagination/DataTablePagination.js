import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../../Pagination';
import PageItem from '../../../Pagination/PageItem';
import PageLink from '../../../Pagination/PageLink';

class DataTablePagination extends Component {
  state = {
    pages: this.props.pages,
    pGroups: []
  };

  componentDidMount() {
    this.groupPages();
  }

  componentDidUpdate = prevProps => {
    const { pages } = this.props;

    if (prevProps.pages !== pages) {
      this.setState({ pages: pages }, () => this.groupPages());
    }
  };

  pagesIndexify = () => {
    const { pages } = this.state;

    const mutablePages = [...pages];
    mutablePages.forEach((page, index) => (page.index = index));
    return mutablePages;
  };

  groupPages = () => {
    const pGroups = [];
    const pages = this.pagesIndexify();
    const { pagesAmount } = this.props;

    while (pages.length > 0) {
      pGroups.push(pages.splice(0, pagesAmount));
    }

    this.setState({ pGroups });
  };

  choosePagesGroup = () => {
    const { activePage, pagesAmount } = this.props;
    const { pGroups } = this.state;
    const pGroupNumber = Math.floor(activePage / pagesAmount);
    return pGroups.length ? pGroups[pGroupNumber] : [];
  };

  render() {
    const { activePage, changeActivePage, pages, label, fullPagination, pagesNumber } = this.props;

    return (
      <div data-test='datatable-pagination'>
        <div className='mdb-dataTables_paginate'>
          <Pagination className='m-0'>
            {fullPagination && (
              <PageItem disabled={activePage <= 0}>
                <PageLink className='page-link' aria-label={label[0]} onClick={() => changeActivePage(0)}>
                  <span>
                    <i className='fas fa-angle-double-left' />
                  </span>
                </PageLink>
              </PageItem>
            )}

            <PageItem disabled={activePage <= 0}>
              <PageLink className='page-link' aria-label={label[0]} onClick={() => changeActivePage(activePage - 1)}>
                <span>
                  <i className='fas fa-chevron-left' />
                </span>
              </PageLink>
            </PageItem>

            {pagesNumber &&
              this.choosePagesGroup().map((page, i) => (
                <PageItem key={Object.keys(page[0])[0] + page.index + i} active={page.index === activePage}>
                  <PageLink className='page-link' onClick={() => changeActivePage(page.index)}>
                    {page.index + 1}
                    {page.index === activePage && <span className='sr-only'>(current)</span>}
                  </PageLink>
                </PageItem>
              ))}

            <PageItem disabled={!pages.length || activePage === pages.length - 1}>
              <PageLink className='page-link' aria-label={label[1]} onClick={() => changeActivePage(activePage + 1)}>
                <span>
                  <i className='fas fa-chevron-right' />
                </span>
              </PageLink>
            </PageItem>

            {fullPagination && (
              <PageItem disabled={!pages.length || activePage === pages.length - 1}>
                <PageLink
                  className='page-link'
                  aria-label={label[1]}
                  onClick={() => changeActivePage(pages.length - 1)}
                >
                  <span>
                    <i className='fas fa-angle-double-right' />
                  </span>
                </PageLink>
              </PageItem>
            )}
          </Pagination>
        </div>
      </div>
    );
  }
}

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  fullPagination: PropTypes.bool,
  pagesNumber: PropTypes.bool
};

export default DataTablePagination;
export { DataTablePagination as MDBDataTablePagination };
