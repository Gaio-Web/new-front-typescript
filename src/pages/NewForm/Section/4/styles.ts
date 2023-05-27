import styled from "styled-components";

export const IMGContainer = styled.div`
  width: 100%;
  height: fit-content;
  /* height: 80rem; */

  box-sizing: border-box;

  & .imageWrapper {
    height: fit-content;

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;
