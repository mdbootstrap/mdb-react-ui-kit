import React from 'react';
import { MDBTooltip, MDBContainer, MDBBtn } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const TooltipsPage = () => {
  const style = { display: 'inline-block', maxWidth: '50vh' };
  return (
    <MDBContainer>
      <DocsLink
        title='Tooltips'
        href='https://mdbootstrap.com/docs/react/advanced/tooltips/'
      />

      <SectionContainer header='Basic'>
        Tight pants next level keffiyeh{' '}
        <MDBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> you probably </span>
          <span>Default tooltip</span>
        </MDBTooltip>
        haven't heard of them. Photo booth beard raw denim letterpress vegan
        messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
        sustainable quinoa 8-bit american apparel{' '}
        <MDBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> have a </span>
          <span>Another tooltip</span>
        </MDBTooltip>{' '}
        terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo
        thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's
        cleanse vegan chambray. A really ironic artisan
        <MDBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> whatever keytar </span>
          <span>Another one here too</span>
        </MDBTooltip>
        , scenester farm-to-table banksy Austin{' '}
        <MDBTooltip
          domElement
          tag='span'
          style={{ display: 'inline' }}
          placement='top'
        >
          <span className='blue-text'> twitter handle </span>
          <span>The last tip!</span>
        </MDBTooltip>
        freegan cred raw denim single-origin coffee viral.
      </SectionContainer>

      <SectionContainer header='Four tooltips' className='text-center p-5'>
        <MDBTooltip placement='top'>
          <MDBBtn color='primary'>Top tooltip</MDBBtn>
          <div>MDBTooltip on top</div>
        </MDBTooltip>

        <div>
          <div style={style} className='text-right'>
            <MDBTooltip placement='left'>
              <MDBBtn color='primary'>Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>

          <div style={style} className='text-left'>
            <MDBTooltip placement='right'>
              <MDBBtn color='primary'>Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip placement='bottom'>
          <MDBBtn color='primary'>Bottom tooltip</MDBBtn>
          <div>MDBTooltip on bottom</div>
        </MDBTooltip>
      </SectionContainer>

      <SectionContainer header='Custom HTML' className='text-center p-5'>
        <MDBTooltip placement='bottom' clickable>
          <MDBBtn color='primary' >Tooltip with HTML</MDBBtn>
          <span><em>Tooltip</em> <u>with</u> <b>HTML</b></span>
        </MDBTooltip>
      </SectionContainer>
    </MDBContainer>
  );
};

export default TooltipsPage;
