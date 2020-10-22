import styled from "styled-components";

export const Logo = styled.img`
  object-fit: contain;
  height: ${(props) => props.imgHeight};
  position: ${(props) => props.absolute && "absolute"};
  top: ${(props) => props.absolute && "50%"};
  left: ${(props) => props.absolute && "50%"};
  transform: ${(props) => props.absolute && "translate(-50%, -50%)"};
`;
