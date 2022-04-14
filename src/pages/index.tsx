import { GNB } from "@/components/GNB/GNB";
import {
  BannerType,
  MainContentsType,
  RecommendedWineType,
  SaleWineType,
  WineType,
} from "@/models/home";
import { HomeTemplate } from "@/templates/HomeTemplate/HomeTemplate";
import axios from "axios";
import type { NextPage } from "next";

const Home: NextPage = (props: any) => {
  const {
    mainBanner,
    recommendedWines,
    timeSaleBanner,
    certifyingShotBanner,
    popularWines,
    timeSaleWines,
    mainContents,
  }: {
    mainBanner: BannerType[];
    recommendedWines: RecommendedWineType[];
    timeSaleBanner: BannerType[];
    certifyingShotBanner: BannerType[];
    popularWines: WineType[];
    timeSaleWines: SaleWineType[];
    mainContents: MainContentsType;
  } = props;
  console.log(timeSaleWines);
  return (
    <HomeTemplate
      mainBanner={mainBanner}
      recommendedWines={recommendedWines}
      timeSaleBanner={timeSaleBanner}
      certifyingShotBanner={certifyingShotBanner}
      popularWines={popularWines}
      timeSaleWines={timeSaleWines}
      mainContents={mainContents}
    />
  );
};

export async function getServerSideProps() {
  // [GET] 메인 배너 조회 API - 메인 슬라이드 배너
  const mainBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_TOP`,
  );

  // [GET] 메인 배너 조회 API - 타임특가 배너
  const timeSaleBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_SUB_1`,
  );

  // [GET] 메인 배너 조회 API - 인증샷 배너
  const certifyingShotBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_SUB_2`,
  );

  // [GET] 화면별 텍스트 데이터 조회 API
  const mainContents = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/text/textGroupCode/MAIN`,
  );

  // [GET] 어울리는 와인 조회 API
  const recommendedWines = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/product/subscriptionWineRecommend`,
  );

  // [GET] 타임 세일 영역 API
  const timeSaleWines = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/product/selectTimeSaleWine`,
  );

  // ​[GET] 인기 와인 리스트 API
  const popularWines = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/product/selectPopularWine`,
  );

  return {
    props: {
      mainBanner: mainBanner.data.results,
      recommendedWines: recommendedWines.data.results,
      timeSaleBanner: timeSaleBanner.data.results,
      certifyingShotBanner: certifyingShotBanner.data.results,
      popularWines: popularWines.data.results,
      timeSaleWines: timeSaleWines.data.results,
      mainContents: mainContents.data.results,
    },
  };
}

export default Home;
