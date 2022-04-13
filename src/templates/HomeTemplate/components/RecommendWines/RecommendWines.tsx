import { Product } from "@/components/Product/Product";
import { Typo } from "@/components/Typo/Typo";
import { HTMLAttributes } from "react";
import * as S from "./RecommendWines.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface RecommendWinesProps extends HTMLAttributes<HTMLDivElement> {
  userName: string;
  wineList: any[];
}

export const RecommendWines: React.FC<RecommendWinesProps> = (props) => {
  console.log(props.wineList);
  return (
    <S.Wrapper>
      <div className="title">
        <Typo fontSize="M_18PX" weight={700}>
          {`${props.userName}님께 맞는 와인`}
        </Typo>
      </div>
      <div className="title">
        <Typo fontSize="M_13PX" color="gray_5">
          회원님이 선택한 취향의 와인만 추천드려요.
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
