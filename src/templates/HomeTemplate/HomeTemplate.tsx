import { AppBar } from "@/components/AppBar/AppBar";
import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import { RecommendWines } from "./components/RecommendWines/RecommendWines";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  mainBanner: any[];
  recommendedWines: any[];
}

export const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <div className="app--bar__container">
        <AppBar cartCount={14} />
      </div>
      <HomeBannerSwiper mainBanner={props.mainBanner} />
      <div className="recommend-wines__container">
        <RecommendWines
          userName="김새콤달콤"
          wineList={props.recommendedWines}
        />
      </div>
    </S.Wrapper>
  );
};
