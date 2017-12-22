import React, { Component } from 'react';

import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem } from 'mdbreact';

class CarouselPage extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 3
    };
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
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
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={this.state.activeItem}
              next={this.next}
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
              <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
              <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselPage;