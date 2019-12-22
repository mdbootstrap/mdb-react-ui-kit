import React from 'react';
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBadge
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class DatatableApiPage extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Rotarepmi/exjson/db')
      .then(res => res.json())
      .then(json => {
        let data = json;
        let { columns, rows } = json;

        columns.push({
          label: 'Own Data',
          field: 'id',
          sort: 'asc',
          width: 150
        });

        rows = rows.map((row, key) => ({
          ...row,
          id: (
            <MDBBadge
              color='info'
              className='w-100'
              searchvalue={key}
              key={key}
            >
              {key}
            </MDBBadge>
          )
        }));

        data = {
          columns,
          rows
        };
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <MDBContainer className='mt-3'>
        <DocsLink
          title='Datatable'
          href='https://mdbootstrap.com/docs/react/tables/datatables/'
        />
        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer header='Datatable with data from API' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer
              header='With scrollX and scrollY properties'
              noBorder
            >
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    scrollX
                    scrollY
                    maxHeight='300xp'
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer
              header='Datatable with data from API + custom data'
              noBorder
            >
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                    sortRows={['id']}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default DatatableApiPage;
