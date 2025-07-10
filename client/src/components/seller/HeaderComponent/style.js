import styled from "styled-components";

export const InfoModal = styled.div`
  padding: 10px 0px;
  position: absolute;
  visibility: hidden;
  top: 60px;
  right: 0px;
`;

export const InfoItemModal = styled.div`
  width: 180px;
  line-height: 30px;
  padding: 0px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

export const InfoContainer = styled.div`
  position: relative;

  &:hover ${InfoModal} {
    visibility: visible;
  }
`;
