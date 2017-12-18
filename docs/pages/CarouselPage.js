import React, { Component } from 'react';

import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem } from 'mdbreact';

class CarouselPage extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
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
                  <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Light mask</h3>
                    <p>First text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <div className="view hm-black-strong">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Second text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <div className="view hm-black-slight">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Slight mask</h3>
                    <p>Third text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <div className="view hm-black-light">
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                    <div className="mask"></div>
                  </div>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Sopot Beach</h3>
                    <p>Taken june 21th by @mattonit</p>
                  </CarouselCaption>
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