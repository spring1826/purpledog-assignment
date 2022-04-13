// [GET] 메인 배너 조회 API - 메인 슬라이드 배너
// [GET] 메인 배너 조회 API - 타임특가 배너
// [GET] 메인 배너 조회 API - 인증샷 배너
export type BannerType = {
  bannerId: number;
  bannerGroupCodeId: string;
  bannerGroupCodeName: string;
  bannerCodeId: string;
  bannerCodeName: string;
  description: string;
  mainUseYn: boolean;
  thumbnailLinkUseYn: boolean;
  thumbnailLinkUrl: string;
  thumbnailImageUrl: string;
  useYn: boolean;
  sortingOrder: number;
  updateId: number;
  updateDate: string;
};

type Contents = {
  textId: number;
  textGroupCodeId: string;
  textGroupCodeName: string;
  textCodeId: string;
  description: string;
  content: string;
  createId: number;
  updateId: number;
};

// [GET] 화면별 텍스트 데이터 조회 API
export type MainContentsType = {
  EVENT_DESCRIPTION: Contents;
  EVENT_TITLE: Contents;
  RECOMMEND_PRODUCT_2_DESCRIPTION: Contents;
  COUNTRY_WINE_TITLE: Contents;
  PERSONAL_RECOMMEND_DESCRIPTON: Contents;
  RECOMMEND_PRODUCT_2_TITLTE: Contents;
  PERSONAL_RECOMMEND_TITLE: Contents;
  RECOMMEND_PRODUCT_1_TITLE: Contents;
  COUNTRY_WINE__DESCRIPTION: Contents;
};

// [GET] 어울리는 와인 조회 API
export type RecommendedWine = {
  productId: number;
  useYn: string;
  viewYn: string;
  englishName: string;
  productCode: string;
  categoryId: number;
  title: string;
  statusCode: string;
  statusCodeName: string;
  weight: number;
  salesPrice: number;
  dry: number;
  body: number;
  tannins: number;
  acidity: number;
  bubble: number;
  overall: number;
  alc: number;
  wineryName: string;
  description: string;
  productUrl: string;
  thumbnailImageUrl: string;
  taxYn: string;
  regionId: number;
  regionName: string;
  countryId: number;
  countryName: string;
  pointDescription: string;
  styleNames: string;
  dryNames: string;
  productOnSales: boolean;
};

// ​[GET] 인기 와인 리스트 API
export type WineType = {
  productId: number;
  name: string;
  englishName: string;
  productCode: string;
  salesPrice: number;
  wineTypeName: string;
  grapeName: string;
  grapeEnglishName: string;
  dry: number;
  body: number;
  tannins: number;
  acidity: number;
  bubble: number;
  overall: number;
  alc: number;
  drinkingTemp: number;
  description: string;
  thumbnailImageUrl: string;
  originName: string;
  regionId: number;
  regionName: string;
  countryId: number;
  countryName: string;
  pointDescription: string;
  wineTypeCode: string;
  styleNames: string;
  dryNames: string;
};
