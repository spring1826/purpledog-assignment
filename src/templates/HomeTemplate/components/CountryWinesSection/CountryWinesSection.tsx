import { Typo } from "@/components/Typo/Typo";
import * as S from "./CountryWinesSection.style";
import USAIMG from "@/assets/image/usa.png";
import ItalyIMG from "@/assets/image/italy.png";
import FranceIMG from "@/assets/image/france.png";
import PortugalIMG from "@/assets/image/portugal.png";
import AustraliaIMG from "@/assets/image/australia.png";
import SpainIMG from "@/assets/image/spain.png";
import Image from "next/image";

interface CountryWinesSectionProps {
  title: string;
  subTitle: string;
}

export const CountryWinesSection: React.FC<CountryWinesSectionProps> = (
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
        <Image src={FranceIMG} />
        <Image src={ItalyIMG} />
        <Image src={USAIMG} />
        <Image src={PortugalIMG} />
        <Image src={AustraliaIMG} />
        <Image src={SpainIMG} />
      </S.Container>
    </S.Wrapper>
  );
};
