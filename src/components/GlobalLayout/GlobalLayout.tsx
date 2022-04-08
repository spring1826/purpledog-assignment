import * as S from "./GlobalLayout.style";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = (props) => {
  return (
    <S.Wrapper>
      <S.Container>{props.children}</S.Container>
    </S.Wrapper>
  );
};
