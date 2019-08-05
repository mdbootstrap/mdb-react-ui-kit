import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../Pagination';
import PageItem from '../../Pagination/PageItem';
import PageLink from '../../Pagination/PageLink';

class DataTablePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: props.pages,
      pGroups: []
    };
  }

  componentDidMount() {
    this.groupPages();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.pages !== this.props.pages) {
      this.setState({ pages: this.props.pages }, () => this.groupPages());
    }
  };

  pagesIndexify = () => {
    let mutablePages = [...this.state.pages];
    mutablePages.forEach((page, index) => (page.index = index));
    return mutablePages;
  };

  groupPages = () => {
    let pGroups = [];
    let pages = this.pagesIndexify();

    while (pages.length > 0) {
      pGroups.push(pages.splice(0, this.props.pagesAmount));
    }

    this.setState({ pGroups });
  };

  choosePagesGroup = () => {
    const pGroupNumber = Math.floor(
      this.props.activePage / this.props.pagesAmount
    );
    return this.state.pGroups.length ? this.state.pGroups[pGroupNumber] : [];
  };

  render() {
    const { activePage, changeActivePage, pages, label } = this.props;

    return (
      <div className='col-sm-12 col-md-7'>
        <div className='dataTables_paginate'>
          <Pagination>
            <PageItem disabled={activePage <= 0}>
              <PageLink
                className='page-link'
                aria-label={label[0]}
                onClick={() => changeActivePage(activePage - 1)}
              >
                <span>{label[0]}</span>
              </PageLink>
            </PageItem>

            {this.choosePagesGroup().map(page => (
              <PageItem
                key={Object.keys(page[0])[0] + page.index}
                active={page.index === activePage}
              >
                <PageLink
                  className='page-link'
                  onClick={() => changeActivePage(page.index)}
                >
                  {page.index + 1}
                  {page.index === activePage && (
                    <span className='sr-only'>(current)</span>
                  )}
                </PageLink>
              </PageItem>
            ))}

            <PageItem
              disabled={!pages.length || activePage === pages.length - 1}
            >
              <PageLink
                className='page-link'
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
  }
}

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DataTablePagination;
export { DataTablePagination as MDBDataTablePagination };
