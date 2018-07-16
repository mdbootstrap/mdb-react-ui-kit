import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

class CarouselPage extends Component {

  render(){
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselPage;
