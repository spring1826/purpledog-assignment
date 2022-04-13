import { Typo } from "@/components/Typo/Typo";
import { BannerType } from "@/models/home";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./SaleWinesSection.style";

interface SaleWinesSectionProps {
  timeSaleBanner: BannerType[];
  mainContents: any;
  certifyingShotBanner: any;
}

export const SaleWinesSection: React.FC<SaleWinesSectionProps> = (props) => {
  const router = useRouter();
  const banner = props.timeSaleBanner[0];
  // console.log(props.mainContents);
  return (
    <S.Wrapper>
      <div>
        <Typo fontSize="M_18PX" weight={700}>
          지금만 이 가격이예요.
        </Typo>
      </div>
      <div>
        <Typo fontSize="M_13PX" color="gray_5">
          와인을 정기 구독중인 회원님에게만 드려요.
        </Typo>
      </div>
    </S.Wrapper>
  );
};
