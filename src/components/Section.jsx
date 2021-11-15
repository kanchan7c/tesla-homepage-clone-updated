import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImage,
  leftButtonText,
  rightButtonText,
}) => {
  return (
    <SectionWraper bgImage={backgroundImage}>
      <Fade bottom>
        <HeaderGroup>
          <h1 className="section-heading">{title}</h1>
          <p className="description"> {description}</p>
        </HeaderGroup>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <Fade left>
              <LeftButton>{leftButtonText}</LeftButton>
            </Fade>
            {rightButtonText && (
              <Fade right>
                <RightButton>{rightButtonText}</RightButton>
              </Fade>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/Images/down-arrow.svg"></DownArrow>
      </Buttons>
    </SectionWraper>
  );
};

export default Section;

// styling goes here

const SectionWraper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/Images/${props.bgImage}')`};
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignment
  align-items: center; //horizontal alignment
  scroll-snap-align: start;
`;

const HeaderGroup = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 805px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: #2f3035;
  height: 2.5rem;
  width: 15rem;
  color: #f6f6f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  @media (max-width: 805px) {
    margin-bottom: 1rem;
    width: 25rem;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #f6f6f7;
  color: #2f3035;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 2.5rem;
  overflow-x: hidden;
  animation: animateUpDown infinite 1.5s;
`;

