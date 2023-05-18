import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .second-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;

    & .title-n-prod {
      width: 50%;

      & h1 {
        font-family: 'Inter', sans-serif;
        font-size: 26px;

      }

      & p {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
      }
    }

      & .img-wrapper {
        padding-top: 10px;
        width: 50%;
        display: flex;
        align-items: end;
        justify-content: flex-end;
      }

      & .btn-2 {
        display: none;
      }
  }

  @media screen and (max-width: 600px) {

    & .second-wrapper {
      padding: 10% 5%;
    flex-direction: column;

    & .title-n-prod {
      width: 100%;

      & .btn-1 {
        display: none;
      }
    }

    & .img-wrapper {
      margin-top: 20px;
      align-items: center;
      justify-content: center;
    }

    & .btn-2 {
      display: block;
    }
    }
  }
`;
