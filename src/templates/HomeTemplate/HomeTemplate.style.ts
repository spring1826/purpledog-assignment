import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .app--bar__container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 360px;
  left: 0;
  z-index: 1;
`;
