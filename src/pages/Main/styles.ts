import styled from 'styled-components';

import Swipe from '../../assets/Gifs/animation_500_lhwe2pfh.gif';

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
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2%;
  padding-bottom: 2%;
  align-items: center;
  justify-content: center;

  & .btn {
      width: 40%;
    }

  /* background-image: url(${Swipe});
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: bottom right; */

    & h1 {
        font-family: 'Inter', sans-serif;
        font-size: 32px;
        margin: 0;
        margin-bottom: 1rem;
      }
  & .fourth-wrapper {
    width: 90%;
    height: fit-content;
    min-height: 20rem;
    /* padding: 10%; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {


    height: 850px;

    & .btn {
      width: 90%;
    }

    & .fourth-wrapper {
      padding: 0;
      box-sizing: border-box;
      max-height: none;
      /* overflow: hidden; */

    & h1 {


      }

      & p {


      }
  }
  }

`;


export const ImageSchedule = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;
  box-sizing: border-box;

  & h1 {
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    margin: 0;
    margin-bottom: 1rem;
  }

  & .img-wrapper {
    width: 100%;
    height: 100%;
    min-height: 20rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    box-sizing: border-box;

    & img {
      height: 100%;
      /* width: 50%; */
      /* max-width: 600px; */
      box-sizing: border-box;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 600px) {
    min-height: 100vh;
    height: fit-content;

    & h1 {
      margin-bottom: 1rem;
    }
    & .img-wrapper {
      padding: 0;
      flex-direction: column;

      & img {
        width: 100%;
      }
    }
  }
`;


export const AddressContainer = styled.div`
  background-color: #f4f7fa;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 5%;
  padding-right: 5%;

  box-sizing: border-box;

      & h1 {
      margin: 0;
      font-weight: 600;
      font-size: 32px;
      color: #05377c;
      text-align: center;
      font-family: 'Inter', sans-serif;
    }
`;
