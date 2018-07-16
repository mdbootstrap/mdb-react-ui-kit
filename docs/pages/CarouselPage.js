import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselPage extends Component {

  render(){
    return(
      <Container>
        <h4 className="mt-5 mb-2">Basic example</h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;
