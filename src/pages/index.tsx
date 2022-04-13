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
    mainContents,
  } = props;
  return (
    <HomeTemplate
      mainBanner={mainBanner.results}
      recommendedWines={popularWines.results}
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

  // ​[GET] 인기 와인 리스트 API
  const popularWines = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/product/selectPopularWine`,
  );

  return {
    props: {
      mainBanner: mainBanner.data,
      recommendedWines: recommendedWines.data,
      timeSaleBanner: timeSaleBanner.data,
      certifyingShotBanner: certifyingShotBanner.data,
      popularWines: popularWines.data,
      mainContents: mainContents.data,
    },
  };
}

export default Home;
