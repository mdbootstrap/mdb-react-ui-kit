import React from 'react';
import { Container, PerfectScrollbar } from 'mdbreact';


class ScrollBarPage extends React.Component  {

  render() {
    const outerContainerStyle = {width: '800px', height: '400px'}
    return(
      <Container style={outerContainerStyle} className="mt-5">
        <PerfectScrollbar className="scrollbar-primary">
          <img src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"/>
        </PerfectScrollbar>
      </Container>
    );
  }
};

export default ScrollBarPage;
