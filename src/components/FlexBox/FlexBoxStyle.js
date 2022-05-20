import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-grow: ${({ grow }) => grow || 0};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  order: ${({ order }) => order || 0};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  height: ${({ height }) => height || "auto"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};
`;
