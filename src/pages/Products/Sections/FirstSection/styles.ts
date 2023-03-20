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
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      line-height: 40px;
      text-align: center;
      padding: 0 1.5rem 0;
      font-family: "Montserrat", sans-serif;

      @media screen and (max-width: 410px) {
        font-size: 6vw;
      }
      @media screen and (max-width: 330px) {
        font-size: 18px;
      }
    }

    & p {
      margin: 0;
      font-weight: 500;
      font-size: 17px;
      color: #f0f0f0;
      line-height: 33px;
      font-family: "Montserrat", sans-serif;

      text-align: center;
    }

    & .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      height: fit-content;
      width: fit-content;
      max-width: 100%;
      max-height: 70vh;

      @media screen and (max-width: 800px) {
        margin: 0;
        padding: 0;
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        max-height: 50vh;
      }
    }

    & img {
      max-width: 90%;
      max-height: 70vh;
      margin-bottom: 0.5rem;
      border-radius: 1rem;
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

      @media screen and (max-width: 800px) {
        max-height: 60vh;
      }
    }
  }
`;
