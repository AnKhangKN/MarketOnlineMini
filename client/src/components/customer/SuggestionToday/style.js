import { Col, Row } from "antd";
import styled from "styled-components";

export const ItemSuggestion = styled(Col)`
  flex: 0 0 25%;
  max-width: 25%;

  @media (max-width: 992px) {
    /* md */
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }

  @media (max-width: 576px) {
    /* xs */
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
