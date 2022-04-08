import { HTMLAttributes } from "react";
import * as S from "./Typo.style";

export interface TypoProps extends HTMLAttributes<HTMLDivElement> {
  fontSize:
    | "M_8PX"
    | "M_10PX"
    | "M_11PX"
    | "M_12PX"
    | "M_13PX"
    | "M_14PX"
    | "M_16PX"
    | "M_18PX"
    | "M_26PX";
  weight?: 400 | 500 | 700;
  fontColor?:
    | "white"
    | "black"
    | "gray_1"
    | "gray_2"
    | "gray_3"
    | "gray_4"
    | "gray_5"
    | "gray_6"
    | "gray_7"
    | "red"
    | "pink"
    | "purple";
  letterSpacing?: string;
}

export const Typo: React.FC<TypoProps> = (props) => {
  return <S.Wrapper {...props}>{props.children}</S.Wrapper>;
};
