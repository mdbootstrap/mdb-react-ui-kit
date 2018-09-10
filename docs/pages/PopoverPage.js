import React from 'react';
import { Popover, PopoverBody, PopoverHeader, Container, Row, Fa } from 'mdbreact';

class PopoverPage extends React.Component {


  render() {
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Popovers</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/popovers/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <div style={{display: 'flex'}} className="m-5 p-5">
          <Popover
            component="button"
            placement="top"
            popoverBody="popover on top"
            className="btn btn-default">
            <PopoverHeader>popover on top</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="right"
            popoverBody="popover on right"
            className="btn btn-default">
            <PopoverHeader>popover on right</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="bottom"
            popoverBody="popover on bottom"
            className="btn btn-default">
            <PopoverHeader>popover on bottom</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="left"
            popoverBody="popover on left"
            className="btn btn-default">
            <PopoverHeader>popover on left</PopoverHeader>
            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
          </Popover>
        </div>
      </Container>
    );
  }
}
export default PopoverPage;
