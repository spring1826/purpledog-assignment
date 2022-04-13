import { AppBar } from "@/components/AppBar/AppBar";
import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import {
  BannerType,
  MainContentsType,
  RecommendedWineType,
  SaleWineType,
  WineType,
} from "@/models/home";
import { useEffect, useRef } from "react";
import { RecommendWinesSection } from "./components/RecommendWinesSection/RecommendWinesSection";
import { SaleWinesSection } from "./components/SaleWinesSection/SaleWinesSection";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  mainBanner: BannerType[];
  recommendedWines: RecommendedWineType[];
  timeSaleBanner: BannerType[];
  certifyingShotBanner: BannerType[];
  popularWines: WineType[];
  timeSaleWines: SaleWineType[];
  mainContents: MainContentsType;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  // TODO: scroll event로 content가 가려지고 appbar는 흰 배경으로 변경
  const Ref = useRef(null);
  useEffect(() => {}, []);
  return (
    <S.Wrapper>
      <div className="app--bar__container">
        <AppBar cartCount={14} />
      </div>
      <HomeBannerSwiper mainBanner={props.mainBanner} />
      <S.Container>
        <RecommendWinesSection
          userName="김새콤달콤"
          wineList={props.recommendedWines}
          title={props.mainContents.PERSONAL_RECOMMEND_TITLE.content}
          subTitle={props.mainContents.PERSONAL_RECOMMEND_DESCRIPTON.content}
        />
        <SaleWinesSection
          timeSaleBanner={props.timeSaleBanner[0]}
          title={props.mainContents.RECOMMEND_PRODUCT_1_TITLE.content}
          subTitle={"와인을 정기 구독중인 회원님에게만 드려요."}
          timeSaleWines={props.timeSaleWines}
        />
      </S.Container>
    </S.Wrapper>
  );
};
