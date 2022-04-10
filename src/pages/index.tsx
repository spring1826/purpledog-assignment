import { HomeTemplate } from "@/templates/HomeTemplate/HomeTemplate";
import axios from "axios";
import type { NextPage } from "next";

const Home: NextPage = (props: any) => {
  const { mainBanner, recommendedWines, timeSaleBanner, certifyingShotBanner } =
    props;
  return <HomeTemplate mainBanner={mainBanner.results} />;
};

export async function getServerSideProps() {
  const mainBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_TOP`,
  );

  const timeSaleBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_SUB_1`,
  );

  const certifyingShotBanner = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/banner/bannerCodeId/MAIN_SUB_2`,
  );

  const recommendedWines = await axios.get(
    `https://796f1d8e-8f52-4549-bad2-c1131d12efa7.mock.pstmn.io/latest/product/subscriptionWineRecommend`,
  );

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
    },
  };
}

export default Home;
