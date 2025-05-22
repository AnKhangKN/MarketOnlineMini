import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5fa;
  margin-top: 119px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const ItemCategory = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const TitleCategory = styled.div`
  max-width: 150px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WrapperComponent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-top: 16px;
`;
