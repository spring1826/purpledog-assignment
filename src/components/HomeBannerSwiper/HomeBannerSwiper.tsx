import { SwiperSlide } from "swiper/react";
import * as S from "./HomeBannerSwiper.style";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface HomeBannerSwiperProps {
  mainBanner: any[];
}

export const HomeBannerSwiper: React.FC<HomeBannerSwiperProps> = (props) => {
  return (
    <S.Wrapper
      slidesPerView={1}
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
    >
      {props.mainBanner.map((banner) => {
        return (
          <SwiperSlide key={banner.bannerId}>
            <Image
              src={banner.thumbnailImageUrl ?? ""}
              width={"100%"}
              height={"100%"}
              layout="fill"
            />
          </SwiperSlide>
        );
      })}
    </S.Wrapper>
  );
};
