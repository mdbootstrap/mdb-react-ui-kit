import React, { Component } from 'react';

import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, View, Mask, Container } from 'mdbreact';

class CarouselPage extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      length: 4
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.length) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.length });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){

    const { activeItem } = this.state;

    return(
      <Container>
        <h4 className="mt-5 mb-2">Basic example</h4>
        <Carousel 
          activeItem={this.state.activeItem}
          next={this.next}
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
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
          <CarouselIndicators>
            <CarouselIndicator active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            <CarouselIndicator active={activeItem === 4 ? true : false} onClick={() => { this.goToIndex(4); }}></CarouselIndicator>
          </CarouselIndicators>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselPage;