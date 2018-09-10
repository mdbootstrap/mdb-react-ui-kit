import React from 'react';
import { Media, Row, Fa, Container } from 'mdbreact';



const MediaPage = (props) => {
  return(
  <Container>
    <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Media Object</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/layout/media/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
    </Row>
    <hr className="mb-5" />
    <div className="container-fluid mt-4">
      <div className="">
        <Media>
          <Media left href="#">
            <Media object src="https://placehold.it/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
      <div>
        <Media style={{maxWidth: '800px'}} className="mt-3">
          <Media left top href="#">
            <Media object src="https://placehold.it/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1" style={{maxWidth: '800px'}}>
          <Media left middle href="#">
            <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Middle aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-1" style={{maxWidth: '800px'}}>
          <Media left bottom href="#">
            <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Bottom aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>

      <Media list className="mt-3">
        <Media tag="li">
          <Media left href="#">
            <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
            Media heading
            </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
              <Media left href="#">
                <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                Nested media heading
                </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                <Media>
                  <Media left href="#">
                    <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                    Nested media heading
                    </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </Media>
                </Media>
              </Media>
            </Media>
            <Media>
              <Media left href="#">
                <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </Media>
              <Media body>
                <Media heading>
                Nested media heading
                </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          </Media>
        </Media>
        <Media tag="li" className="mt-3">
          <Media body>
            <Media heading>
              Media heading right
            </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <Media right href="#">
            <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
        </Media>
      </Media>
    </div>
  </Container>
  );
};

export default MediaPage;
