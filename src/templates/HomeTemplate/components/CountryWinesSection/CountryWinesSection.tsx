import { Typo } from "@/components/Typo/Typo";
import * as S from "./CountryWinesSection.style";

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
    </S.Wrapper>
  );
};
