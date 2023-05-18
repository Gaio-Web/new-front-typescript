import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }

    & .skeletonHeaderWrapper{
      width: 95vw;
      border-radius: 8px;
      overflow: hidden;
    }

    & .skeletonTitleWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & span{
        width: 80%;
      }
    }

    & .skeletonTextWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonText{
        width: 80%;
      }
    }

    & .skeletonImageWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 2rem 0;

      & .skeletonImage{
        @media screen and (max-width: 800px) {
          width: 60%;
          height: 100%;
        }
        width: 40%;
      }
    }

    & .skeletonButtonWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonButton{
        width: 80%;
      }
    }

    & .fadeWhite{
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255, .6) 70%, rgba(255,255,255, 1));

    }
  }
`;

export const FourthSection = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fourth-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem;
    gap: 2rem;

    @media screen and (max-width: 800px) {
      width: 80%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377c;
      text-align: center;
      margin-top: 2rem;

      @media screen and (max-width: 800px) {
        margin-top: 0;
      }
    }

    & button {
      cursor: pointer;
      background-color: rgb(41, 182, 10);
      box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

      font-family: "Montserrat", sans-serif;

      border: 0;

      width: 50%;
      height: 55px;

      color: #fff;
      font-size: 1.05rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 16px;

      @media screen and (max-width: 800px) {
        width: 110%;
      }
    }
  }
`;
