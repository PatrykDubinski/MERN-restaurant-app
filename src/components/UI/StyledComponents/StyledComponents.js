import styled from "styled-components";

import bgImage from "../../../assets/headerImg.jpg";

export const Logo = styled.img`
  object-fit: contain;
  height: ${(props) => props.imgHeight};
  position: ${(props) => props.absolute && "absolute"};
  top: ${(props) => props.absolute && "50%"};
  left: ${(props) => props.absolute && "50%"};
  transform: ${(props) => props.absolute && "translate(-50%, -50%)"};
`;

export const StyledHeader = styled.header`
  padding: 10px 40px;
  height: 60vh;
  display: flex;
  position: relative;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    background-color: #02ccbc;
  }
`;
