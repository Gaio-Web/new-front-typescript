import styled from 'styled-components';

export const Container = styled.div`
   background-color: #f4f7fa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fifth-wrapper {
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
      font-weight: 500;
      font-size: 42px;
      color: #05377c;
      text-align: center;
    }

    & p {
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      text-align: center;
    }

    & .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: fit-content;
      max-width: 100%;
      max-height: 70vh;

      @media screen and (max-width: 800px) {
        margin: 0;
        padding: 0;
        width: fit-content;
        max-width: 100%;
        max-height: 40vh;
      }
    }

    & img {
      max-width: 90%;
      max-height: 70vh;
      margin-bottom: 0.5rem;
      border-radius: 1rem;
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);

      @media screen and (max-width: 800px) {
        max-height: 80vh;
      }
    }
  }
`;
