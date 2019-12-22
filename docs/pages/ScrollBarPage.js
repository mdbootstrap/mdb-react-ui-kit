import React from 'react';
import { MDBContainer } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';
import './ScrollbarPage.css';

const ScrollBarPage = () => {
  const scrollContainerStyle = { width: '800px', maxHeight: '400px' };
  return (
    <MDBContainer>
      <DocsLink title='ScrollBar' href='https://mdbootstrap.com/docs/react/' />

      <SectionContainer header='Default' className='py-5'>
        <div className='scrollbar mx-auto' style={scrollContainerStyle}>
          <img
            alt=''
            src='https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg'
          />
        </div>
      </SectionContainer>

      <SectionContainer header='Primary' className='py-5'>
        <div
          className='scrollbar scrollbar-primary m-auto'
          style={scrollContainerStyle}
        >
          <img
            alt=''
            src='https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg'
          />
        </div>
      </SectionContainer>
    </MDBContainer>
  );
};

export default ScrollBarPage;
