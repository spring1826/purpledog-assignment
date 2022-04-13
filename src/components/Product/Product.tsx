import Image from "next/image";
import { Typo } from "../Typo/Typo";
import * as S from "./Product.style";

// TODO: type별로 분리 필요
type wineProps = {
  acidity: number;
  alc: number;
  body: number;
  bubble: number;
  countryId: number;
  countryName: string;
  description: string;
  drinkingTemp: number;
  dry: number;
  dryNames: string;
  englishName: string;
  grapeEnglishName: string;
  grapeName: string;
  name: string;
  originName: string;
  overall: number;
  pointDescription: string;
  productCode: string;
  productId: number;
  regionId: number;
  regionName: string;
  salesPrice: number;
  styleNames: string;
  tannins: number;
  thumbnailImageUrl: string;
  wineTypeCode: string;
  wineTypeName: string;
};

interface ProductProps {
  wine: wineProps;
}

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <S.Wrapper>
      <S.ProductThumbnailContainer>
        <Image
          src={props.wine.thumbnailImageUrl}
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </S.ProductThumbnailContainer>
      <S.ProductContentContainer>
        <div>
          <Typo fontSize="M_11PX" color="gray_3">
            {props.wine.countryName}
          </Typo>
          <Typo fontSize="M_11PX" color="gray_3">
            {" "}
            &#183;{" "}
          </Typo>
          <Typo fontSize="M_11PX" color="gray_3">
            {props.wine.wineTypeName}
          </Typo>
        </div>
        <div className="wine-name">
          <Typo fontSize="M_13PX">{props.wine.name}</Typo>
        </div>
        <div>
          <Typo fontSize="M_16PX" weight={700}>
            {`${props.wine.salesPrice.toLocaleString()}원`}
          </Typo>
        </div>
        <div>
          <Typo fontSize="M_12PX" color="red">
            0%
          </Typo>
          <Typo fontSize="M_12PX" color="gray_3" className="wine-origin-price">
            {`${props.wine.salesPrice.toLocaleString()}원`}
          </Typo>
        </div>
      </S.ProductContentContainer>
    </S.Wrapper>
  );
};
