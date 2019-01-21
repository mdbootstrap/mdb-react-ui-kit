import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from "mdbreact";
import DocsLink from "./../components/docsLink";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Video Carousel"
        href="https://mdbootstrap.com/docs/react/advanced/carousel/#video"
      />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source
                      src="https://mdbootstrap.com/img/video/Tropical.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source
                      src="https://mdbootstrap.com/img/video/forest.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source
                      src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                      type="video/mp4"
                    />
                  </video>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default CarouselPage;
