import React from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const FaPage = props => {
  return (
    <MDBContainer className="mt-3">
      <DocsLink title="Icons" href="https://mdbootstrap.com/docs/react/content/icons-usage/" />

      <SectionContainer header="Sizing" className="text-center">
        <p>
          <MDBIcon icon="camera-retro" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="lg" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="2x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="4x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="10x" />
        </p>
      </SectionContainer>

      <SectionContainer header="Colors" className="text-center">
        <p>
          <MDBIcon icon="bolt" size="3x" className="amber-text pr-3" />
        </p>
        <p>
          <MDBIcon icon="bug" size="3x" className="red-text pr-3" />
        </p>
        <p>
          <MDBIcon icon="heart" size="3x" className="indigo-text pr-3" />
        </p>
        <p>
          <MDBIcon icon="bell" size="3x" className="cyan-text pr-3" />
        </p>
        <p>
          <MDBIcon icon="birthday-cake" size="3x" className="green-text pr-3" />
        </p>
      </SectionContainer>

      <SectionContainer header="Position" style={{ minHeight: "100px" }}>
        <MDBIcon icon="quote-left" size="3x" border pull="right" />
        <MDBIcon icon="quote-left" size="3x" border pull="left" />
      </SectionContainer>

      <SectionContainer header="Animation" className="text-center">
        <p>
          <MDBIcon icon="spinner" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="spinner" size="5x" pulse />
        </p>
        <p>
          <MDBIcon icon="circle-notch" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="sync" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="cog" spin size="5x" />
        </p>
      </SectionContainer>

      <SectionContainer header="Rotation" className="text-center">
        <p>
          <MDBIcon icon="camera-retro" size="5x" rotate="90" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" rotate="180" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" rotate="270" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" flip="vertical" />
        </p>
      </SectionContainer>
    </MDBContainer>
  );
};

export default FaPage;
