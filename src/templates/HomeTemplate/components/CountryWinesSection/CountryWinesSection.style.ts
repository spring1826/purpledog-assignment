import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px 8px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  .country__link {
    cursor: pointer;
  }
`;
