import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f7fa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fifth-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5% 10%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;

    & .btn {
        margin-top: 1.5rem;
      }

    & .img-wrapper {
      width: 100%;
      height: 32rem;
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        /* display: none; */
        height: 100%;
      }
    }

    & .sectionTitle {
      font-family: 'Inter', sans-serif;
      font-size: 32px;
      margin: 0;
    }

    & .history {
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    & .fifth-wrapper {
      padding: 10% 5%;

      & .btn {
        width: 100%;
      }

      & .img-wrapper {
        /* width: 100%; */
        height: fit-content;

        & img {
          /* height: 100%; */
          width: 100%;
          object-fit: contain;

        }
      }

    & .sectionTitle {

    }

    & .history {

    }
  }
  }
`;