import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 20px;
  padding: 16px;
  place-items: center;
  min-height: 100vh;

  @media screen and (max-width: 1023px) {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    padding: 16px;
    place-items: center;
  }

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 16px;
    place-items: center;
  }
`;

export const CardLink = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: #fff;
  border-radius: 16px;
`;
