import styled from "styled-components";
import { TypoProps } from "./Typo";

export const Wrapper = styled.span<TypoProps>`
  font-size: ${(props) => props.theme.FontStyles[props.fontSize].size};
  line-height: ${(props) => props.theme.FontStyles[props.fontSize].lineHeight};
  color: ${(props) =>
    props.color ? props.theme.Colors[props.color] : props.theme.Colors.black};
  font-weight: ${(props) => props.weight ?? 400};
  letter-spacing: ${(props) => props.letterSpacing ?? 0};
`;
