import * as S from "./GNB.style";
import HomeIcon from "@/assets/icon/gnb_home.svg";
import MagazineIcon from "@/assets/icon/gnb_magazine.svg";
import CategoryIcon from "@/assets/icon/gnb_category.svg";
import FeedIcon from "@/assets/icon/gnb_feed.svg";
import MypageIcon from "@/assets/icon/gnb_mypage.svg";
import Image from "next/image";

interface GNBProps {}

export const GNB: React.FC<GNBProps> = (props) => {
  return (
    <S.Wrapper>
      <Image src={HomeIcon} />
      <Image src={MagazineIcon} />
      <Image src={CategoryIcon} />
      <Image src={FeedIcon} />
      <Image src={MypageIcon} />
    </S.Wrapper>
  );
};
