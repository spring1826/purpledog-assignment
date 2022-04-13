import Image from "next/image";
import * as S from "./AppBar.style";
import CartIcon from "@/assets/icon/cart.svg";
import AlarmIcon from "@/assets/icon/alarm.svg";
import SearchIcon from "@/assets/icon/search.svg";
import { HTMLAttributes } from "react";
import { Typo } from "../Typo/Typo";

interface AppBarProps extends HTMLAttributes<HTMLDivElement> {
  cartCount: number;
}

export const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <S.Wrapper>
      <Image src={SearchIcon} />
      <div className="user--interfacr__container">
        <div className="alarm__container">
          <Image src={AlarmIcon} />
          <div className="dot" />
        </div>
        <div className="cart__container">
          <Image src={CartIcon} />
          <Typo className="cart-count" fontSize="M_10PX" color="white">
            {props.cartCount ?? 14}
          </Typo>
        </div>
      </div>
    </S.Wrapper>
  );
};
