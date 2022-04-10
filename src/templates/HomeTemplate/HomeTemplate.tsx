import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  mainBanner: any[];
}

export const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <HomeBannerSwiper mainBanner={props.mainBanner}/>
    </S.Wrapper>
  );
};
