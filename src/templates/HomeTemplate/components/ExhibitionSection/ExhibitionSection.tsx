import { Typo } from "@/components/Typo/Typo";
import * as S from "./ExhibitionSection.style";
import WineExhibitionIMG from "@/assets/image/wine-exhibition.png";
import Image from "next/image";

interface ExhibitionSectionProps {
  title: string;
  subTitle: string;
}

export const ExhibitionSection: React.FC<ExhibitionSectionProps> = (props) => {
  return (
    <S.Wrapper>
      <div className="title__container">
        <Typo fontSize="M_18PX" weight={700}>
          기획전 모아보기
        </Typo>
        <Typo fontSize="M_13PX" color="gray_3">
          더보기
        </Typo>
      </div>
      <div>
        <Typo fontSize="M_13PX" color="gray_5">
          퍼플독에서만 만날 수 있는 기획전, 놓치지 마세요!
        </Typo>
      </div>
      <div className="image__container">
        <Image src={WineExhibitionIMG} />
      </div>
    </S.Wrapper>
  );
};
