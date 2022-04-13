import { AppBar } from "@/components/AppBar/AppBar";
import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  mainBanner: any[];
}

export const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <div className="app--bar__container">
        <AppBar cartCount={14} />
      </div>
      <HomeBannerSwiper mainBanner={props.mainBanner} />
    </S.Wrapper>
  );
};
