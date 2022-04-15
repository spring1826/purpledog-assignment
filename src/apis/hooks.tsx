import { useQuery } from "react-query";
import {
  fetchMainBanner,
  fetchMainContents,
  fetchRecommendedWines,
  fetchTimeSaleWines,
  fetchPopularWines,
} from "./fetch";

// [GET] 메인 배너 조회 API - 메인 슬라이드 배너 | 타임특가 배너 | 인증샷 배너
export const useMainBanner = (bannerCodeId: string) => {
  const data = useQuery(
    [`latest/banner/bannerCodeId/${bannerCodeId}`],
    () => fetchMainBanner(bannerCodeId),
    {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return { ...data };
};

// [GET] 화면별 텍스트 데이터 조회 API
export const useMainContents = () => {
  const data = useQuery(
    [`latest/text/textGroupCode/MAIN`],
    () => fetchMainContents(),
    {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return { ...data };
};

// [GET] 어울리는 와인 조회 API
export const useRecommendedWines = () => {
  const data = useQuery(
    [`latest/product/subscriptionWineRecommend`],
    () => fetchRecommendedWines(),
    {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return { ...data };
};

// [GET] 타임 세일 영역 API
export const useTimeSaleWines = () => {
  const data = useQuery(
    [`latest/product/selectTimeSaleWine`],
    () => fetchTimeSaleWines(),
    {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return { ...data };
};

// ​[GET] 인기 와인 리스트 API
export const usePopularWines = () => {
  const data = useQuery(
    [`latest/product/selectPopularWine`],
    () => fetchPopularWines(),
    {
      staleTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return { ...data };
};
