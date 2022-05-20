import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ radius }) => radius || "auto"};

  fit-content: cover;
`;
