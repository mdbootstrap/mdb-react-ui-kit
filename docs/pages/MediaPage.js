import React from 'react';
import { Media } from 'mdbreact';



const MediaPage = (props) => {
  return(
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
  );
};

export default MediaPage;
