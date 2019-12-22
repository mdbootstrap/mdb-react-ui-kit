import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const CarouselPage = () => {
  return (
    <MDBContainer className='pb-5'>
      <DocsLink
        title='Carousel'
        href='https://mdbootstrap.com/docs/react/advanced/carousel/'
      />

      <SectionContainer header='Slides Only'>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className='z-depth-1'
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>

      <SectionContainer header='With Captions'>
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls
          showIndicators
          className='z-depth-1'
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
                  alt='First slide'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Light mask</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg'
                  alt='Second slide'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'
                  alt='Third slide'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Slight mask</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='4'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'
                  alt="Mattonit's item"
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>

      <SectionContainer header='Fade effect'>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(92).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(90).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(91).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>

      <SectionContainer header='With Controls'>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators={false}
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>

      <SectionContainer header='With Indicators'>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>

      <SectionContainer header='Stop when mouse is on the carousel'>
        <MDBCarousel
          interval={1500}
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className='z-depth-1'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </SectionContainer>
    </MDBContainer>
  );
};

export default CarouselPage;
