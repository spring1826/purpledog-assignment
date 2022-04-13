import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -14px;
  left: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 32px 0 0;
  background-color: ${(props) => props.theme.Colors.white};

  .title {
    padding: 0 16px 0;
    margin-bottom: 2px;
  }
`;

export const WineListContainer = styled(Swiper)`
  width: 100%;
  padding: 15px 10px;
`;
