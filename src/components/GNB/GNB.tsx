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
      <Image src={HomeIcon} className="icon" />
      <Image src={MagazineIcon} className="icon" />
      <Image src={CategoryIcon} className="icon" />
      <Image src={FeedIcon} className="icon" />
      <Image src={MypageIcon} className="icon" />
    </S.Wrapper>
  );
};
