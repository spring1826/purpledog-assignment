import { HTMLAttributes } from "react";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/components/Product/Product";
import { Typo } from "@/components/Typo/Typo";
import { RecommendedWineType } from "@/models/home";
import * as S from "./RecommendWinesSection.style";
import "swiper/css";

interface RecommendWinesSectionProps extends HTMLAttributes<HTMLDivElement> {
  userName: string;
  wineList: RecommendedWineType[];
  title: string;
  subTitle: string;
}

export const RecommendWinesSection: React.FC<RecommendWinesSectionProps> = (
  props,
) => {
  return (
    <S.Wrapper>
      <div className="title">
        <Typo fontSize="M_18PX" weight={700}>
          {`${props.userName}${props.title}`}
        </Typo>
      </div>
      <div className="title">
        <Typo fontSize="M_13PX" color="gray_5">
          {props.subTitle}
        </Typo>
      </div>
      {/* TODO: swiper컴포넌트 분리 */}
      <S.WineListContainer slidesPerView={2.5} spaceBetween={10}>
        {props.wineList.map((wine, index) => {
          return (
            <SwiperSlide key={index}>
              <Product wine={wine} />
            </SwiperSlide>
          );
        })}
      </S.WineListContainer>
    </S.Wrapper>
  );
};
