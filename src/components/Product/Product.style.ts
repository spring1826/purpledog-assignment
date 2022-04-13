import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProductThumbnailContainer = styled.div`
  width: 140px;
  height: 168px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.Colors.gray_1};
`;

export const ProductContentContainer = styled.div`
  .wine-name {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .wine-origin-price {
    margin-left: 5px;
    text-decoration: line-through;
  }
`;
