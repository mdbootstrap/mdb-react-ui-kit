import React from "react";
import { MDBMedia, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const MediaPage = props => {
  return (
    <MDBContainer>
      <DocsLink title="Media Object" href="https://mdbootstrap.com/docs/react/layout/media-object/" />

        <SectionContainer>
          <MDBMedia>
            <MDBMedia left href="#">
              <MDBMedia object src="https://placehold.it/64x64" alt="Generic placeholder image" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>MDBMedia heading</MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
              vulputate fringilla. Donec lacinia congue felis in faucibus.
            </MDBMedia>
          </MDBMedia>
        </SectionContainer>

        <SectionContainer>
          <MDBMedia style={{ maxWidth: "800px" }} className="mt-3">
            <MDBMedia left top href="#">
              <MDBMedia object src="https://placehold.it/64x64" alt="Generic placeholder image" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>Top aligned media</MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
              vulputate fringilla. Donec lacinia congue felis in faucibus.
            </MDBMedia>
          </MDBMedia>
        </SectionContainer>

        <SectionContainer>
          <MDBMedia className="mt-1" style={{ maxWidth: "800px" }}>
            <MDBMedia left middle href="#">
              <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>Middle aligned media</MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
              vulputate fringilla. Donec lacinia congue felis in faucibus.
            </MDBMedia>
          </MDBMedia>
        </SectionContainer>

        <SectionContainer>
          <MDBMedia className="mt-1" style={{ maxWidth: "800px" }}>
            <MDBMedia left bottom href="#">
              <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
            </MDBMedia>
            <MDBMedia body>
              <MDBMedia heading>Bottom aligned media</MDBMedia>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
              vulputate fringilla. Donec lacinia congue felis in faucibus.
            </MDBMedia>
          </MDBMedia>
        </SectionContainer>

        <SectionContainer>
          <MDBMedia list className="mt-3">
            <MDBMedia tag="li">
              <MDBMedia left href="#">
                <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </MDBMedia>
              <MDBMedia body>
                <MDBMedia heading>MDBMedia heading</MDBMedia>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
                <MDBMedia>
                  <MDBMedia left href="#">
                    <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
                  </MDBMedia>
                  <MDBMedia body>
                    <MDBMedia heading>Nested media heading</MDBMedia>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                    commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <MDBMedia>
                      <MDBMedia left href="#">
                        <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
                      </MDBMedia>
                      <MDBMedia body>
                        <MDBMedia heading>Nested media heading</MDBMedia>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                        commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </MDBMedia>
                    </MDBMedia>
                  </MDBMedia>
                </MDBMedia>
                <MDBMedia>
                  <MDBMedia left href="#">
                    <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
                  </MDBMedia>
                  <MDBMedia body>
                    <MDBMedia heading>Nested media heading</MDBMedia>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                    commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </MDBMedia>
                </MDBMedia>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </SectionContainer>
        
        <SectionContainer>
            <MDBMedia tag="li" className="mt-3">
              <MDBMedia body>
                <MDBMedia heading>MDBMedia heading right</MDBMedia>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
              </MDBMedia>
              <MDBMedia right href="#">
                <MDBMedia object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
              </MDBMedia>
            </MDBMedia>
        </SectionContainer>
      
    </MDBContainer>
  );
};

export default MediaPage;
