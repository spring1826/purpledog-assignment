import { TimeDealProduct } from "@/components/TimeDealProduct/TimeDealProduct";
import { Typo } from "@/components/Typo/Typo";
import { BannerType, SaleWineType } from "@/models/home";
import Image from "next/image";

import { useRouter } from "next/router";
import * as S from "./SaleWinesSection.style";

interface SaleWinesSectionProps {
  title: string;
  subTitle: string;
  timeSaleBanner: BannerType;
  timeSaleWines: SaleWineType[];
}

export const SaleWinesSection: React.FC<SaleWinesSectionProps> = (props) => {
  const router = useRouter();

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
      <div className="time-sale__banner">
        <Image
          src={props.timeSaleBanner.thumbnailImageUrl}
          width={"100%"}
          height={80}
          layout="responsive"
          onClick={() => router.push(props.timeSaleBanner.thumbnailLinkUrl)}
        />
      </div>
      {props.timeSaleWines.map((wine, index) => {
        return <TimeDealProduct key={index} wine={wine} />;
      })}
    </S.Wrapper>
  );
};
