import styled from "styled-components";

export const ItemCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px;
  margin: 8px 0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #e6f7ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const TitleCategory = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  @media (max-width: 600px) {
    max-width: 120px;
    font-size: 14px;
  }
`;
