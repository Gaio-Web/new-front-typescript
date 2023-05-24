import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
  border-radius: 8px;

  & .first-wrapper {
    width: 50%;
    display: flex;
    gap: 1rem;

    & .content-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;

      & .title {
        font-size: 20px;
      }
    }

    & .inputs-wrapper {
      background-color: red;
      width: 50%;
    }
  }
`

