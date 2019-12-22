import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const MasksPage = () => {
  return (
    <MDBContainer className='mt-5'>
      <DocsLink
        title='Masks'
        href='https://mdbootstrap.com/docs/react/css/masks/'
      />

      <MDBRow className='justify-content-center'>
        <MDBCol md='8'>
          <SectionContainer header='pattern={1}'>
            <MDBView>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask pattern={1} className='flex-center' />
            </MDBView>
          </SectionContainer>
        </MDBCol>

        <MDBCol md='8'>
          <SectionContainer header='pattern={2}'>
            <MDBView>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask pattern={2} className='flex-center' />
            </MDBView>
          </SectionContainer>
        </MDBCol>

        <MDBCol md='8'>
          <SectionContainer header='pattern={3}, waves'>
            <MDBView waves>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask pattern={3} className='flex-center' />
            </MDBView>
          </SectionContainer>
        </MDBCol>

        <MDBCol md='8'>
          <SectionContainer header='overlay="blue-light"'>
            <MDBView>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask className='flex-center' overlay='blue-light' />
            </MDBView>
          </SectionContainer>
        </MDBCol>

        <MDBCol md='8'>
          <SectionContainer header='overlay="blue-strong"'>
            <MDBView>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask className='flex-center' overlay='blue-strong' />
            </MDBView>
          </SectionContainer>
        </MDBCol>

        <MDBCol md='8'>
          <SectionContainer header='overlay="blue-slight", waves'>
            <MDBView waves>
              <img
                src='https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg'
                className='img-fluid'
                alt=''
              />
              <MDBMask className='flex-center' overlay='blue-slight' />
            </MDBView>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MasksPage;
