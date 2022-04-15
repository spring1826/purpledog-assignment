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

  .certifying-Shot__banner {
    padding: 14px 16px 34px;
    cursor: pointer;

    & > span {
      width: 100% !important;
      height: 80px !important;
    }
  }
`;
