import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .icon {
    cursor: pointer;
  }

  .user--interfacr__container {
    display: flex;
    align-items: center;
  }

  .alarm__container {
    position: relative;
  }

  .dot {
    width: 4px;
    height: 4px;
    position: absolute;
    top: 4px;
    right: 2px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.Colors.red};
  }

  .cart__container {
    margin-left: 16px;
  }

  .cart-count {
    height: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0 4px;
    background-color: ${(props) => props.theme.Colors.red};
  }
`;
