import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`;

export const WineThumbnailContainer = styled.div`
  width: 110px;
  height: 132px;
  background-color: ${(props) => props.theme.Colors.gray_1};
  border-radius: 5px;
`;

export const WineContentContainer = styled.div`
  margin-left: 15px;

  .wine-price {
    margin-left: 5px;
    text-decoration: line-through;
  }

  .time-box {
    width: 100%;
    height: 22px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.Colors.red};
    padding: 3px 5px;
    border-radius: 2px;
  }
`;
