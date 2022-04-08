import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {}

export const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  return (
    <S.Wrapper>
      <HomeBannerSwiper />
    </S.Wrapper>
  );
};
