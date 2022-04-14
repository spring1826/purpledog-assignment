import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.Colors.white};
  padding: 8px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px -3px 30px ${(props) => props.theme.Colors.gray_3};
  margin-top: 20px;
`;
