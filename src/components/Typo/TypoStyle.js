import styled from "styled-components";

export const Typography = styled.p`
  color: ${({ color }) => color || "#fff"};
  margin: ${({ margin }) => margin || "auto"};
  margin: ${({ padding }) => padding || "0"};
`;
