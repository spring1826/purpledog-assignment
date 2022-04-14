import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppBar } from "@/components/AppBar/AppBar";
import { HomeBannerSwiper } from "@/components/HomeBannerSwiper/HomeBannerSwiper";
import {
  BannerType,
  MainContentsType,
  RecommendedWineType,
  SaleWineType,
  WineType,
} from "@/models/home";
import { RecommendWinesSection } from "./components/RecommendWinesSection/RecommendWinesSection";
import { SaleWinesSection } from "./components/SaleWinesSection/SaleWinesSection";
import { CountryWinesSection } from "./components/CountryWinesSection/CountryWinesSection";
import { ExhibitionSection } from "./components/ExhibitionSection/ExhibitionSection";
import { PopularWinesSection } from "./components/PopularWinesSection/PopularWinesSection";
import { GNB } from "@/components/GNB/GNB";
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
  const router = useRouter();
  // TODO: scroll event로 content가 가려지고 appbar는 흰 배경으로 변경
  const Ref = useRef(null);
  useEffect(() => {}, []);
  console.log(props.mainContents);
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
        <div className="certifying-Shot__banner">
          <Image
            src={props.certifyingShotBanner[0].thumbnailImageUrl}
            width={"100%"}
            height={80}
            layout="responsive"
            onClick={() =>
              router.push(props.certifyingShotBanner[0].thumbnailLinkUrl)
            }
          />
        </div>
        <CountryWinesSection
          title={props.mainContents.COUNTRY_WINE_TITLE.content}
          subTitle={props.mainContents.COUNTRY_WINE__DESCRIPTION.content}
        />
        <ExhibitionSection
          title={props.mainContents.RECOMMEND_PRODUCT_2_TITLTE.content}
          subTitle={props.mainContents.RECOMMEND_PRODUCT_2_DESCRIPTION.content}
        />
        <PopularWinesSection
          title={props.mainContents.RECOMMEND_PRODUCT_2_TITLTE.content}
          subTitle={props.mainContents.RECOMMEND_PRODUCT_2_DESCRIPTION.content}
          popularWines={props.popularWines}
        />
        <GNB />
      </S.Container>
    </S.Wrapper>
  );
};
