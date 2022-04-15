import { purpleDogAxios } from "./axios";

// [GET] 메인 배너 조회 API - 메인 슬라이드 배너 | 타임특가 배너 | 인증샷 배너
export const fetchMainBanner = async (bannerCodeId: string) => {
  return (
    await purpleDogAxios.get(`latest/banner/bannerCodeId/${bannerCodeId}`)
  ).data;
};

// [GET] 화면별 텍스트 데이터 조회 API
export const fetchMainContents = async () => {
  return (await purpleDogAxios.get(`latest/text/textGroupCode/MAIN`)).data;
};

// [GET] 어울리는 와인 조회 API
export const fetchRecommendedWines = async () => {
  return (await purpleDogAxios.get(`latest/product/subscriptionWineRecommend`))
    .data;
};

// [GET] 타임 세일 영역 API
export const fetchTimeSaleWines = async () => {
  return (await purpleDogAxios.get(`latest/product/selectTimeSaleWine`)).data;
};

// ​[GET] 인기 와인 리스트 API
export const fetchPopularWines = async () => {
  return (await purpleDogAxios.get(`latest/product/selectPopularWine`)).data;
};
