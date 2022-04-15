import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import * as S from "./HomeBannerSwiper.style";
import "swiper/css";
import "swiper/css/pagination";

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
