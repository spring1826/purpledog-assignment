import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Wrapper = styled(Swiper)`
  width: 100%;
  height: 375px;
  background-color: gray;

  .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal {
    width: 305px;
    height: 4px;
    bottom: 40px;
    left: 35px;
    top: auto;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }

  .swiper-pagination span {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
  }
`;
