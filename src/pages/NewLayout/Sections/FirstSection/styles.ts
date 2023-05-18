import styled from 'styled-components';

//Banner
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .first-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;

    & .main-content-wrapper {
    width: 100%;
    height: 100%;
    /* background-color: green; */
    display: flex;
    margin-bottom: 2rem;

    & .call-n-desc {
      width: 50%;
      /* background-color: blue; */

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
      width: 50%;
      display: flex;
      align-items: end;
      justify-content: flex-end;
    }
  }
  }

@media screen and (max-width: 600px) {
  & .first-wrapper {
    padding: 10% 5%;

    & .main-content-wrapper {
      flex-direction: column;

      & .call-n-desc {
        width: 100%;
      }

      & .img-wrapper {
        width: 100%;
        margin-top: 2rem;
      align-items: center;
      justify-content: center;
      }
    }

    & button {
      width: 100%;
    }
  }
  }
`;

