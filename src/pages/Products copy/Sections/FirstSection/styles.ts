import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & .first-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;

    @media screen and (max-width: 800px) {
      width: 100%;
      align-items: center;
    }

    & .img-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0;
      height: fit-content;
      width: fit-content;
      width: 100vw;
      max-height: 80vh;
      overflow: hidden;


      @media screen and (max-width: 800px) {
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        width: 100vw;
        max-height: 77vh;
      }
    }

    & img {
      max-height: auto;
      width: 50%;


      @media screen and (max-width: 800px) {
        max-height: 100%;
        padding-bottom: 33vh;
        padding-top: 0;
        width: 100%;
        margin: 0;
      }
    }

    & .gifOverlay{
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, #000 0%, #000 50.10%, rgba(0, 0, 0, 0.63) 64.96%, rgba(0, 0, 0, 0.53) 80.53%, rgba(0, 0, 0, 0.33) 100%);

      @media screen and (max-width: 800px) {
        background: linear-gradient(180deg, rgba(17, 17, 17, 0.00) 0%, rgba(16, 16, 16, 0.35) 25.10%, rgba(14, 14, 14, 0.72) 52.57%, #0C0C0C 100%);
      }
    }

    & .secondOverlay{
      position: absolute;
      bottom: 0;
      height: 30%;
      width: 100%;
      background: linear-gradient(180deg, rgba(17, 17, 17, 0.00) 0%, rgba(16, 16, 16, 0.35) 25.10%, rgba(14, 14, 14, 0.72) 52.57%, #0C0C0C 100%);

      @media screen and (max-width: 800px) {
        background: transparent;
      }
    }

    & .contentWrapper{
      position: absolute;
      bottom: 25%;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 0 0 0 4rem;
      gap: 1.5rem;

      @media screen and (max-width: 800px) {
        gap: 1rem;
        bottom: 10%;
        padding: 0 1rem;
      }


        & h1 {
        margin: 0;
        color: white;
        line-height: 40px;
        font-family: "Montserrat", sans-serif;
        font-size: 3rem;
        width: 70%;
        padding-bottom: 1rem;

        @media screen and (max-width: 410px) {
          font-size: 2rem;
          padding: 0;
          width: 100%;
        }
        @media screen and (max-width: 330px) {
          font-size: 18px;
          padding: 0;
          width: 100%;
        }
      }

      & p {
        margin: 0;
        padding-bottom: .5rem;
        font-weight: 500;
        font-size: .9rem;
        color: #f0f0f0;
        line-height: 33px;
        font-family: "Montserrat", sans-serif;
        width: 50%;

        @media screen and (max-width: 800px) {
          width: 100%;
          line-height: 24px;
        }
      }

      & button{
        width: 50%;

        @media screen and (max-width: 800px) {
          width: 100%;
        }
      }

      & .buttonContent {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 1rem;
      padding: 0;
      gap: .4rem;

      & img{
        width: 1.6rem;
        padding: 0;
      }
    }
    }
  }
`;
