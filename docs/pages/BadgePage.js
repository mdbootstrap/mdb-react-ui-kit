import React from 'react';
import { MDBBadge, MDBContainer, MDBIcon } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const BadgePage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title='Badges'
        href='https://mdbootstrap.com/docs/react/components/badges/'
      />

      <SectionContainer
        header={
          <>
            Using <code>Headings</code> tag
          </>
        }
      >
        <table className='m-2'>
          <thead>
            <tr>
              <th>
                <h4>Header</h4>
              </th>
              <th>
                <h4 className='ml-2'>MDBBadge</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h1>H1:</h1>
              </td>
              <td>
                <h1>
                  <MDBBadge>Default</MDBBadge>
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h2>H2:</h2>
              </td>
              <td>
                <h2>
                  <MDBBadge color='primary'>Primary</MDBBadge>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <h3>H3:</h3>
              </td>
              <td>
                <h3>
                  <MDBBadge pill color='success'>
                    Success pill
                  </MDBBadge>
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h4>H4:</h4>
              </td>
              <td>
                <h4>
                  <MDBBadge color='info'>Info</MDBBadge>
                </h4>
              </td>
            </tr>
            <tr>
              <td>
                <h5>H5:</h5>
              </td>
              <td>
                <h5>
                  <MDBBadge color='warning'>warning</MDBBadge>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h6>H6:</h6>
              </td>
              <td>
                <h6>
                  <MDBBadge color='danger'>danger</MDBBadge>
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </SectionContainer>


      <SectionContainer header='Customization' className='text-center'>
        <h5>
          <MDBBadge className='mr-3' color='default'>
            Default
          </MDBBadge>
          <MDBBadge className='mr-3' color='primary'>
            Primary
          </MDBBadge>
          <MDBBadge className='mr-3' color='success'>
            Success
          </MDBBadge>
          <MDBBadge className='mr-3' color='info'>
            Info
          </MDBBadge>
          <MDBBadge className='mr-3' color='warning'>
            Warning
          </MDBBadge>
          <MDBBadge className='mr-3' color='danger'>
            Danger
          </MDBBadge>
          <MDBBadge className='mr-3' color='light'>
            Light
          </MDBBadge>
          <MDBBadge className='mr-3' color='dark'>
            Dark
          </MDBBadge>
        </h5>
        <h5 className='mt-4'>
          <MDBBadge className='mr-2 mt-2' pill color='default'>
            Default
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='primary'>
            Primary
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='success'>
            Success
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='info'>
            Info
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='warning'>
            Warning
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='danger'>
            Danger
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='light'>
            Light
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='dark'>
            Dark
          </MDBBadge>
        </h5>
        <h5 className='mt-4'>
          <MDBBadge className='mr-2 mt-2' color='default'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='primary'>
            <MDBIcon fab icon='instagram' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='success'>
            <MDBIcon fab icon='snapchat-ghost' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='info'>
            <MDBIcon icon='anchor' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='warning'>
            <MDBIcon far icon='sun' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='danger'>
            <MDBIcon icon='battery-three-quarters' />
          </MDBBadge>
        </h5>
        <h5 className='mt-4'>
          <MDBBadge className='mr-2 mt-2' color='pink'>
            <MDBIcon icon='wheelchair' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='light-blue'>
            <MDBIcon far icon='heart' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='purple'>
            <MDBIcon icon='bullhorn' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='orange'>
            <MDBIcon fab icon='btc' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='purple'>
            <MDBIcon far icon='comments' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='orange'>
            <MDBIcon icon='coffee' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' color='green'>
            <MDBIcon icon='user' />
          </MDBBadge>
        </h5>
        <h5 className='mt-4'>
          <MDBBadge className='mr-2 mt-2' pill color='indigo'>
            <MDBIcon fab icon='android' size='2x' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='cyan'>
            <MDBIcon icon='cog' size='2x' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='orange'>
            <MDBIcon fab icon='btc' size='2x' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='teal'>
            <MDBIcon icon='heart' size='2x' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='green'>
            <MDBIcon fab icon='apple' size='2x' />
          </MDBBadge>
          <MDBBadge className='mr-2 mt-2' pill color='purple'>
            <MDBIcon icon='users' size='2x' />
          </MDBBadge>
        </h5>
      </SectionContainer>
    </MDBContainer>
  );
};

export default BadgePage;
