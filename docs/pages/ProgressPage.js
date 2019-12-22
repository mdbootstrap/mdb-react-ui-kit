import React from 'react';
import { MDBProgress, MDBContainer } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const ProgressPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title='Progress Bar'
        href='https://mdbootstrap.com/docs/react/components/progress-bar/'
      />

      <SectionContainer header='Material design'>
        <MDBProgress material value={100} />
        <MDBProgress material value={75} color='success' />
        <MDBProgress material value={50} color='danger' />
        <MDBProgress material value={25} color='warning' />
        <MDBProgress material animated value={100} />
        <MDBProgress material value={75} animated color='success' />
        <MDBProgress material value={50} animated color='danger' />
        <MDBProgress material value={25} animated color='warning' />
      </SectionContainer>

      <SectionContainer header='Basic design'>
        <MDBProgress value={100} />
        <br />
        <MDBProgress value={75} color='success' />
        <br />
        <MDBProgress value={50} color='danger' />
        <br />
        <MDBProgress value={25} color='warning' />
        <br />
        <MDBProgress animated value={100} />
        <br />
        <MDBProgress value={75} animated color='success' />
        <br />
        <MDBProgress value={50} animated color='danger' />
        <br />
        <MDBProgress value={25} animated color='warning' />
        <br />
      </SectionContainer>

      <SectionContainer header='Material with text'>
        <MDBProgress material value={100}>
          You did it!
        </MDBProgress>
        <MDBProgress material striped value={75} color='success'>
          Almost there
        </MDBProgress>
        <MDBProgress material value={50} color='danger'>
          Cool
        </MDBProgress>
        <MDBProgress material striped value={25} color='warning'>
          Wow!
        </MDBProgress>
      </SectionContainer>
    </MDBContainer>
  );
};

export default ProgressPage;
