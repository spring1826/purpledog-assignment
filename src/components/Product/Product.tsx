import Image from "next/image";
import { Typo } from "../Typo/Typo";
import * as S from "./Product.style";

interface ProductProps {
  thumbnailImageUrl: string;
  countryName: string;
  wineryName: string;
  price: string;
  percent: string;
  salePrice: string;
  size: "S" | "M";
}

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <S.Wrapper>
      <S.ProductThumbnailContainer size={props.size}>
        <Image
          src={props.thumbnailImageUrl}
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </S.ProductThumbnailContainer>
      <S.ProductContentContainer>
        <div>
          <Typo fontSize="M_11PX" color="gray_3">
            {props.countryName}
          </Typo>
        </div>
        <div className="wine-name">
          <Typo fontSize="M_13PX">{props.wineryName}</Typo>
        </div>
        <div>
          <Typo fontSize="M_16PX" weight={700}>
            {props.salePrice}
          </Typo>
        </div>
        <div>
          <Typo fontSize="M_12PX" color="red">
            {props.percent}
          </Typo>
          <Typo fontSize="M_12PX" color="gray_3" className="wine-origin-price">
            {props.price}
          </Typo>
        </div>
      </S.ProductContentContainer>
    </S.Wrapper>
  );
};
