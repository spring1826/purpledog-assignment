import { Product } from "@/components/Product/Product";
import { Typo } from "@/components/Typo/Typo";
import { WineType } from "@/models/home";
import * as S from "./PopularWinesSection.style";

interface PopularWinesSectionProps {
  title: string;
  subTitle: string;
  popularWines: WineType[];
}

export const PopularWinesSection: React.FC<PopularWinesSectionProps> = (
  props,
) => {
  return (
    <S.Wrapper>
      <div>
        <Typo fontSize="M_18PX" weight={700}>
          {props.title}
        </Typo>
      </div>
      <div>
        <Typo fontSize="M_13PX" color="gray_5">
          {props.subTitle}
        </Typo>
      </div>
      <S.Container>
        {props.popularWines.map((wine, index) => {
          return (
            <Product
              key={index}
              size={"M"}
              thumbnailImageUrl={wine.thumbnailImageUrl}
              countryName={`${wine.countryName} · ${wine.styleNames}`}
              wineryName={wine.wineTypeName}
              price={`${wine.salesPrice.toLocaleString()}원`}
              percent={`0%`}
              salePrice={`${wine.salesPrice.toLocaleString()}원`}
            />
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};
