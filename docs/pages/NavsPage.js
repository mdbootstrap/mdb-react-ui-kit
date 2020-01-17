import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBLink
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class NavsPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title='Navs'
          href='https://mdbootstrap.com/docs/react/navigation/navs/'
        />

        <SectionContainer title='Basic examples' noBorder>
          <SectionContainer header='Left'>
            <MDBNav>
              <MDBNavItem>
                <MDBLink active to='#!'>
                  Active
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink disabled to='#!'>
                  Disabled
                </MDBLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Center'>
            <MDBNav className='justify-content-center'>
              <MDBNavItem>
                <MDBLink active to='#!'>
                  Active
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink disabled to='#!'>
                  Disabled
                </MDBLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Right'>
            <MDBNav className='justify-content-end'>
              <MDBNavItem>
                <MDBLink active to='#!'>
                  Active
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink disabled to='#!'>
                  Disabled
                </MDBLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Vertical'>
            <MDBNav className='flex-column'>
              <MDBNavItem>
                <MDBLink active to='#!'>
                  Active
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to='#!'>Link</MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink disabled to='#!'>
                  Disabled
                </MDBLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With bold font' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBNav className='font-weight-bold'>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                  <MDBLink to='#!'>Link</MDBLink>
                  <MDBLink to='#!'>Link</MDBLink>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBNav className='flex-column font-weight-bold'>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                  <MDBLink to='#!'>Link</MDBLink>
                  <MDBLink to='#!'>Link</MDBLink>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With various font and background color'>
          <MDBRow>
            <MDBCol>
              <MDBNav color='grey' className='flex-column font-weight-bold'>
                <MDBLink className='white-text' active to='#!'>
                  Active
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 1
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 2
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color='amber' className='flex-column font-weight-bold'>
                <MDBLink active to='#!' className='dark-grey-text'>
                  Active
                </MDBLink>
                <MDBLink to='#!' className='dark-grey-text'>
                  Link 1
                </MDBLink>
                <MDBLink to='#!' className='dark-grey-text'>
                  Link 2
                </MDBLink>
                <MDBLink to='#!' className='dark-grey-text'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color='cyan' className='flex-column font-weight-bold'>
                <MDBLink active to='#!' className='indigo-text'>
                  Active
                </MDBLink>
                <MDBLink to='#!'>Link 1</MDBLink>
                <MDBLink to='#!'>Link 2</MDBLink>
                <MDBLink to='#!'>Link 3</MDBLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With gradient background'>
          <MDBRow>
            <MDBCol md='6'>
              <MDBNav
                color='peach-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <MDBLink className='white-text' active to='#!'>
                  Active
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 1
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 2
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='purple-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <MDBLink className='white-text' active to='#!'>
                  Active
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 1
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 2
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='aqua-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <MDBLink className='white-text' active to='#!'>
                  Active
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 1
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 2
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='blue-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <MDBLink className='white-text' active to='#!'>
                  Active
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 1
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 2
                </MDBLink>
                <MDBLink className='white-text' to='#!'>
                  Link 3
                </MDBLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer title='Wtih tabs & pills' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer header='Tabs'>
                <MDBNav className='nav-tabs'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer header='Pills'>
                <MDBNav className='nav-pills'>
                  <MDBNavItem>
                    <MDBLink active to='#!'>
                      Active
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 1</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 2</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link 3</MDBLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
          <SectionContainer header='Fill & justify'>
            <MDBContainer className='mt-4'>
              <MDBNav className='nav-pills nav-fill'>
                <MDBNavItem>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Longer nav link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
            <MDBContainer className='mt-4'>
              <MDBNav className='nav-tabs nav-fill'>
                <MDBNavItem>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Longer nav link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className='mt-4'>
              <MDBNav className='nav-pills nav-justified'>
                <MDBNavItem>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Longer nav link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className='mt-4'>
              <MDBNav className='nav-tabs nav-justified'>
                <MDBNavItem>
                  <MDBLink active to='#!'>
                    Active
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Longer nav link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Link</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink disabled to='#!'>
                    Disabled
                  </MDBLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
          </SectionContainer>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavsPage;
