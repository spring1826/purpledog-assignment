import { AppBar } from "@/components/AppBar/AppBar";
import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import {
  BannerType,
  MainContentsType,
  RecommendedWine,
  WineType,
} from "@/models/home";
import { useEffect, useRef } from "react";
import { RecommendWinesSection } from "./components/RecommendWinesSection/RecommendWinesSection";
import { SaleWinesSection } from "./components/SaleWinesSection/SaleWinesSection";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  mainBanner: BannerType[];
  recommendedWines: RecommendedWine[];
  timeSaleBanner: BannerType[];
  certifyingShotBanner: BannerType[];
  popularWines: WineType[];
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
        />
        <SaleWinesSection
          timeSaleBanner={props.timeSaleBanner}
          mainContents={props.mainContents}
          certifyingShotBanner={props.certifyingShotBanner}
        />
      </S.Container>
    </S.Wrapper>
  );
};
