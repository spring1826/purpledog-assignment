import type { NextPage } from "next";
import {
  fetchMainBanner,
  fetchMainContents,
  fetchPopularWines,
  fetchRecommendedWines,
  fetchTimeSaleWines,
} from "@/apis/fetch";
import {
  BannerType,
  MainContentsType,
  RecommendedWineType,
  SaleWineType,
  WineType,
} from "@/models/home";
import { HomeTemplate } from "@/templates/HomeTemplate/HomeTemplate";

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
  const mainBanner = await fetchMainBanner("MAIN_TOP");

  // [GET] 메인 배너 조회 API - 타임특가 배너
  const timeSaleBanner = await fetchMainBanner("MAIN_SUB_1");

  // [GET] 메인 배너 조회 API - 인증샷 배너
  const certifyingShotBanner = await fetchMainBanner("MAIN_SUB_2");

  // [GET] 화면별 텍스트 데이터 조회 API
  const mainContents = await fetchMainContents();

  // [GET] 어울리는 와인 조회 API
  const recommendedWines = await fetchRecommendedWines();

  // [GET] 타임 세일 영역 API
  const timeSaleWines = await fetchTimeSaleWines();

  // ​[GET] 인기 와인 리스트 API
  const popularWines = await fetchPopularWines();

  return {
    props: {
      mainBanner: mainBanner.results,
      recommendedWines: recommendedWines.results,
      timeSaleBanner: timeSaleBanner.results,
      certifyingShotBanner: certifyingShotBanner.results,
      popularWines: popularWines.results,
      timeSaleWines: timeSaleWines.results,
      mainContents: mainContents.results,
    },
  };
}

export default Home;
