import styled from "styled-components";
import { color1 } from "../../__variables";

export const Btn = styled.button`
  color: ${({ color }) => color || "#fff"};
  font-size: ${({ textSize }) => textSize || "18px"};
  background-color: ${({ bgColor }) => bgColor || color1};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ radius }) => radius || "16px"};
  padding: ${({ padding }) => padding || "8px"};
  margin: ${({ margin }) => margin || "4px 8px"};
  cursor: pointer;

  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;
